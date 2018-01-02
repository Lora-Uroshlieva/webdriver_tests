"use strict";

const promise = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');
const TIMEOUT = 10000;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
const Page = require('./../src/pages/page');

promise.USE_PROMISE_MANAGER = false;


describe('my first pure test', () => {
    let driver;
    let page;
    
    beforeAll(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        page = await new Page(driver);
    });

    afterEach(async function () {
        await (await driver.manage()).deleteAllCookies();
        await (await driver.navigate()).refresh();
    });

    afterAll(async function () {
        await driver.quit();
    });

    it('exemplary search of whether by city', async function () {
        await page.getPage();
        await page.search();
    });

    it('title should be proper', async function () {
        await page.getPage();
        await page.search();
        let title = await page.getTitle();
        // console.log(title);
        expect(title).toEqual('SINOPTIK: Погода у Львові. Прогноз погоди Львів на тиждень, Україна');
    });
});