"use strict";

const BasePage = require('./BasePage');

class AllTasksPage extends BasePage{
    constructor(driver) {
        super(driver);
    }

    async open() {
         await this.driver.get(this.url + '#/all');
    }
}

module.exports = AllTasksPage;