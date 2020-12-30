import * as fs from 'fs'
import fetch, { Response } from 'node-fetch'


export const fetchData = (url: string): Promise<Response> => {
    console.log('fetching ' + url)
    return fetch(url)
}

export const fetchHtml = (url: string): Promise<string> =>
    fetchData(url).then(response => response.text())

export const mkDirIfNotExists = (dirName: string) => {
    try { fs.mkdirSync(dirName) } catch {}
}

export const writeToFile = (fileName: string) =>
    (content: string | Buffer) =>
        fs.writeFileSync(fileName, content)


export const pipeToFile = (fileName: string) =>
    (response: Response) =>
        response.body.pipe(fs.createWriteStream(fileName))
