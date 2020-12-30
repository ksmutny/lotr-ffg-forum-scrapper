# Fantasy Flight Games Forums scrapper

This tool was created to preserve official rulings for The Lord of the Rings: The Card Game from its designers before the FFG forum shuts down on February 1, 2021.

## How to use

You need [Node JS](https://nodejs.org/en/) installed on your computer. Install dependencies:

    npm install

Run scrapper to download all raw HTML from FFG official forum website, specifically in the [Rules questions & answers](https://community.fantasyflightgames.com/forum/249-rules-questions-answers/) section. (You may change the URL in the script for any other section.)

    npm run scrape

It downloads each question to a separate file in `html` folder.

Then run parser to parse the HTML into more managable format, JSON and Markdown. Each forum topic is stored in a separate file in `json` and `md` fodlers respectivelly.

    npm run parse

The following attributes are stored for each Rule question:

* Title
* Original URL
* For the original question and each subsequent comment
  * Author's nickname
  * Timestamp of the post
  * Content in Markdown format (converted from HTML)

Now the data is in a format easy to process programatically to look for official rulings to be preserved.

Official rulings are searched by `search.ts` script and currently only look for an occurence of name Caleb, one of the designer. All posts with such an occurence are stored in `rulings` folder, with the original question and only relevant comments.

    npm run search
