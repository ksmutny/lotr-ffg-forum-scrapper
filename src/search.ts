import * as fs from 'fs'
import { mkDirIfNotExists } from './io'
import { Thread, Comment, saveAsMd } from './thread'


const inputDir = 'json'
const outputDir = 'rulings'

mkDirIfNotExists(outputDir)


const officialRulingRegex = new RegExp('caleb', 'i')

fs.readdirSync(inputDir).forEach(fileName => {
    const [, topic] = fileName.match('(.*)\\.json')
    const post: Thread = JSON.parse(fs.readFileSync(inputDir + '/' + fileName, 'utf8'))

    const officialRulings = findOfficialRulings(post)
    if (officialRulings.length > 0) {
        saveAsMd(outputDir + '/' + topic + '.md', {
            url: post.url,
            title: post.title,
            comments: officialRulings
        })
    }
})


export function findOfficialRulings(thread: Thread): Comment[] {
    const hasOfficialRuling = (comment: Comment) => comment.content.search(officialRulingRegex) !== -1

    const [question, ...comments] = thread.comments

    return (thread.comments.length > 0 && (hasOfficialRuling(question) || comments.find(hasOfficialRuling)))
        ? [question, ...comments.filter(hasOfficialRuling)]
        : []
}
