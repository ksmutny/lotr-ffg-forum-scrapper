import * as fs from 'fs'
import { Post, Comment, saveAsMd, stripExtension } from './parse'


const inputDir = 'json'
const outputDir = 'rulings'

try { fs.mkdirSync(outputDir) } catch {}


const officialRulingRegex = new RegExp('caleb', 'i')

fs.readdirSync(inputDir).forEach(fileName => {
    const post: Post = JSON.parse(fs.readFileSync(inputDir + '/' + fileName, 'utf8'))
    const officialRulings = findOfficialRulings(post)
    if (officialRulings.length > 0) {
        saveAsMd(outputDir + '/' + stripExtension(fileName, '.json') + '.md', {
            url: post.url,
            title: post.title,
            comments: officialRulings
        })
    }
})


export function findOfficialRulings(post: Post): Comment[] {
    const hasOfficialRuling = (comment: Comment) => comment.content.search(officialRulingRegex) !== -1

    const [question, ...comments] = post.comments

    return (post.comments.length > 0 && (hasOfficialRuling(question) || comments.find(hasOfficialRuling)))
        ? [question, ...comments.filter(hasOfficialRuling)]
        : []
}
