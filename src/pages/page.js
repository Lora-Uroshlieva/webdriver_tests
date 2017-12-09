"use strict";

const {By, until} = require('selenium-webdriver');

class Page {
    constructor(driver, timeout) {
        this.driver = driver;
        this.timeout = timeout;
        this.url = 'https://ua.sinoptik.ua';
    }

    async getPage() {
        await this.driver.get(this.url);
    }

    async search (keyword = 'Львів') {
        let searchField = await this.driver.wait(until.elementLocated(By.id('search_city')));
        await searchField.sendKeys(keyword);
        let button = await this.driver.wait(until.elementLocated(By.className('search_city-submit')));
        await button.click();
    }

    async getTitle() {
        await this.driver.wait(until.titleIs('SINOPTIK: Погода у Львові. Прогноз погоди Львів на тиждень, Україна'),
            this.timeout);
        return this.driver.getTitle();
    }
}

module.exports = Page;