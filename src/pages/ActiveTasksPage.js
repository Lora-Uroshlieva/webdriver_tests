"use strict";

const BasePage = require('./BasePage');

class ActiveTasksPage extends BasePage {
    constructor() {
        super();
    }

    open() {
        this.driver.get(this.url + '#/active');
    }
}

module.exports = ActiveTasksPage;