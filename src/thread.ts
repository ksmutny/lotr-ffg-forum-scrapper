import * as fs from 'fs'
import { htmlToText } from 'html-to-text'
import { writeToFile } from './io'


export interface Comment {
    commentUrl: string
    commentId: number,
    userName: string,
    timestamp: number,
    content: string
}

export interface Thread {
    url: string,
    title: string,
    comments: Comment[]
}


const dateFormat = Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

const threadUrlRegex = new RegExp('<link rel="canonical" href="(.*?)" />')
const threadTitleRegex = new RegExp('<meta property="og:title" content="(.*?)">')

const metadataPattern = '{&quot;userid&quot;:(\\d+),&quot;username&quot;:&quot;(.*?)&quot;,&quot;timestamp&quot;:(\\d+),.*?&quot;contentcommentid&quot;:(\\d+)}'
const commentUrlPattern = '<div class=\'ipsType_reset\'>.*?<a href=\'(.*?)\''
const contentPattern = '<div data-role=\'commentContent\'.*?>(.*?)</div>\\s*?<div class=\'ipsItemControls\'>'
const articleRegex = new RegExp(`<article.*?>.*?${metadataPattern}.*?${commentUrlPattern}.*?${contentPattern}.*?</article>`, 'gs')


export function parseThread(fileName: string): Thread {
    console.log('reading ' + fileName)
    const html = fs.readFileSync(fileName, 'utf8')
    const [, url] = html.match(threadUrlRegex)
    const [, title] = html.match(threadTitleRegex)

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


export function saveAsJson(fileName: string, thread: Thread) {
    writeToFile(fileName)(JSON.stringify(thread))
}

export function saveAsMd(fileName: string, thread: Thread) {
    const text = `# [${thread.title}](${thread.url})\n\n` +
        thread.comments.reduce((acc, comment, idx) =>
            acc + `## ${idx + 1} [${comment.userName} on ${dateFormat.format(comment.timestamp * 1000)}](${comment.commentUrl})\n\n${comment.content}\n\n`, '')

    writeToFile(fileName)(text)
}
