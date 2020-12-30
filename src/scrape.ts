import { fetchHtml, mkDirIfNotExists, writeToFile } from './io'


const outputDir = 'html'
mkDirIfNotExists(outputDir)

scrapeThreads('https://community.fantasyflightgames.com/forum/178-the-lord-of-the-rings-the-card-game')


function scrapeThreads(forumUrl: string) {
    const nextPageLinkRegex = new RegExp(`<a href='(${forumUrl}/page/\\d+/)'.*?>Next</a>`)

    crawl(forumUrl, nextPageLinkRegex, async html => {
        for (const threadUrl of parseThreadUrls(html))
            await scrapeThread(threadUrl)
    })
}


const postUrlLinkRegex = new RegExp('\'(https://community\\.fantasyflightgames\\.com/topic/[^/]+/)\'', 'g')

export function parseThreadUrls(html: string): string[] {
    return [...html.matchAll(postUrlLinkRegex)].map(match => match[1])
}


async function scrapeThread(threadUrl: string) {
    const urlRegex = new RegExp('topic/([^/]+)/(page/(\\d+)/#comments)?')
    const nextPageLinkRegex = new RegExp(`<a href='(${threadUrl}page/\\d+/#comments)'.*?>Next</a>`)

    crawl(threadUrl, nextPageLinkRegex, async (html, url) => {
        const [, topic, , page] = urlRegex.exec(url)
        writeToFile(`html/${topic}${page ? '#' + page : ''}.html`)(html)
    })
}


function crawl(url: string, nextPageLinkRegex: RegExp, process: (html: string, url: string) => Promise<void>) {
    async function crawlNext(url: string): Promise<void> {
        await fetchHtml(url).then(
            async html => {
                await process(html, url)

                const nextPage = html.match(nextPageLinkRegex)
                if (nextPage !== null && url !== nextPage[1]) crawlNext(nextPage[1])
            }
        )
    }

    crawlNext(url)
}
