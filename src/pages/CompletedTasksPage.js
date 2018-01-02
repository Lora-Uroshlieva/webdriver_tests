"use strict";

const BasePage = require('./BasePage');

class CompletedTasksPage extends BasePage {
    constructor() {
        super();
    }

    open() {
        this.driver.get(this.url + '#/completed');
    }
}

module.exports = CompletedTasksPage;