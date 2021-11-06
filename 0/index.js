const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/%22Hello,_World!%22_program');
    await page.screenshot({ path: './screenshot.png'});
    browser.close();
}) ();

/* Web scraping with axios and cheerio
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const url = ''

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))
    


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
*/