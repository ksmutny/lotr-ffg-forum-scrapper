import * as fs from 'fs'
import { htmlToText } from 'html-to-text'
import { writeToFile } from './io'


const inputDir = 'html'
const outputJsonDir = 'json'
const outputMdDir = 'md'

try { fs.mkdirSync(outputJsonDir) } catch {}
try { fs.mkdirSync(outputMdDir) } catch {}


const dateFormat = Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

const postUrlRegex = new RegExp('<link rel="canonical" href="(.*?)" />')
const postTitleRegex = new RegExp('<meta property="og:title" content="(.*?)">')

const metadataPattern = '{&quot;userid&quot;:(\\d+),&quot;username&quot;:&quot;(.*?)&quot;,&quot;timestamp&quot;:(\\d+),.*?&quot;contentcommentid&quot;:(\\d+)}'
const commentUrlPattern = '<div class=\'ipsType_reset\'>.*?<a href=\'(.*?)\''
const contentPattern = '<div data-role=\'commentContent\'.*?>(.*?)</div>\\s*?<div class=\'ipsItemControls\'>'
const articleRegex = new RegExp(`<article.*?>.*?${metadataPattern}.*?${commentUrlPattern}.*?${contentPattern}.*?</article>`, 'gs')


fs.readdirSync(inputDir).forEach(fileName => {
    const post = parsePost(inputDir + '/' + fileName)
    saveAsJson(outputJsonDir + '/' + stripExtension(fileName, '.html') + '.json', post)
    saveAsMd(outputMdDir + '/' + stripExtension(fileName, '.html') + '.md', post)
})


export interface Comment {
    commentUrl: string
    commentId: number,
    userName: string,
    timestamp: number,
    content: string
}

export interface Post {
    url: string,
    title: string,
    comments: Comment[]
}


export function parsePost(fileName: string): Post {
    const html = fs.readFileSync(fileName, 'utf8')
    const [, url] = html.match(postUrlRegex)
    const [, title] = html.match(postTitleRegex)

    const articles = html.matchAll(articleRegex)
    const comments: Comment[] = Array.from(articles).map(article => {
        const [, , userName, timestamp, commentId, commentUrlHtml, contentHtml] = article
        const commentUrl = htmlToText(commentUrlHtml)
        const content = htmlToText(contentHtml, { wordwrap: false })

        return {
            commentUrl,
            commentId: parseInt(commentId, 10),
            userName,
            timestamp: parseInt(timestamp, 10),
            content
        }
    })

    return { url, title, comments }
}


export function saveAsJson(fileName: string, post: Post) {
    writeToFile(fileName)(JSON.stringify(post))
}

export function saveAsMd(fileName: string, post: Post) {
    const text = `# [${post.title}](${post.url})\n\n` +
        post.comments.reduce((acc, comment, idx) =>
            acc + `## ${idx + 1} [${comment.userName} on ${dateFormat.format(comment.timestamp * 1000)}](${comment.commentUrl})\n\n${comment.content}\n\n`, '')

    writeToFile(fileName)(text)
}

export function stripExtension(fileName: string, ext: string) {
    return fileName.replace(ext, '')
}
