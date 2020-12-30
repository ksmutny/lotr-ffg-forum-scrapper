import { fetchHtml, writeToFile } from './io'


try { fs.mkdirSync('html') } catch {}

crawl('https://community.fantasyflightgames.com/forum/249-rules-questions-answers')

export function crawl(url: string): Promise<void> {
    return fetchHtml(url).then(
        async html => {
            for (const postUrl of parsePostUrls(html))
                await downloadPost(postUrl)

            const nextPage = html.match(nextPageLinkRexex)
            if (nextPage !== null) crawl(nextPage[1])
        }
    )
}

const nextPageLinkRexex = new RegExp('<a href=\'(https://community\\.fantasyflightgames\\.com/forum/249-rules-questions-answers/page/\\d+/)\'.*?>Next</a>')


export function parsePostUrls(html: string): string[] {
    return [...html.matchAll(postUrlLinkRegex)].map(match => match[1])
}

const postUrlPattern = '\'(https://community\\.fantasyflightgames\\.com/topic/[^/]+/)\''
const postUrlLinkRegex = new RegExp(postUrlPattern, 'g')


export async function downloadPost(postUrl: string) {
    await fetchHtml(postUrl).then(html => {
        const [, topic] = topicRegex.exec(postUrl)
        writeToFile(`html/${topic}.html`)(html)
    })
}
const topicRegex = new RegExp('topic/([^/]+)/')
