"use strict";

const promise = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');

const AllTasksPage = require('./AllTasksPage');
const ActiveTasksPage = require('./ActiveTasksPage');
const CompletedTasksPage = require('./CompletedTasksPage');

promise.USE_PROMISE_MANAGER = false;

class Application {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
        this.allTasksPage = new AllTasksPage(this.driver);
        this.activeTaskPage = new ActiveTasksPage(this.driver);
        this.completedTaskPage = new CompletedTasksPage(this.driver);
    }
}

module.exports = Application;