import * as fs from 'fs'
import { mkDirIfNotExists } from './io'
import { parseThread, saveAsJson, saveAsMd } from './thread'


const inputDir = 'html'
const outputJsonDir = 'json'
const outputMdDir = 'md'

mkDirIfNotExists(outputJsonDir)
mkDirIfNotExists(outputMdDir)


fs.readdirSync(inputDir).forEach(fileName => {
    const fileNameFrom = (topic: string, page: number) => `${inputDir}/${topic}#${page}.html`
    const [, topic, , page] = fileName.match('(.*?)(#(\\d+))?\\.html')

    if (!page) {
        const thread = parseThread(inputDir + '/' + fileName)

        let next = 2
        while (fs.existsSync(fileNameFrom(topic, next))) {
            const nextPost = parseThread(fileNameFrom(topic, next))
            thread.comments = thread.comments.concat(nextPost.comments)
            next++
        }

        saveAsJson(outputJsonDir + '/' + topic + '.json', thread)
        saveAsMd(outputMdDir + '/' + topic + '.md', thread)
    }
})
