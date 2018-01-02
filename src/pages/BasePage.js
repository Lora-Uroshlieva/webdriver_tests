"use strict";
const {By, until} = require('selenium-webdriver');


const INPUT_FIELD_LOCATOR = '.new-todo';
const MARK_ALL_TASKS_BUTTON_LOCATOR = 'toggle-all';
const EDIT_TASK_LOCATOR = '.editing label';
const OPENED_TASKS_LOCATOR = 'li[class="todo"] label';
const DESTROY_BUTTON_LOCATOR = 'button.destroy';
const COMPLETED_TASKS_LOCATOR = 'li[class="todo completed"] label';
const ALL_TASKS_LOCATOR = '.todo label';
const MARK_TASK_DONE_LOCATOR = 'li[class="todo"] input.toggle';
const MARK_TASK_UNDONE_LOCATOR = '.todo.completed input.toggle';
const ACTIVE_TASKS_COUNTER_LOCATOR = 'span.todo-count strong'; //number of tasks
const ALL_LINK_LOCATOR = 'a[href="#/all"]';
const ACTIVE_LINK_LOCATOR = 'a[href="#/active"]';
const COMPLETED_LINK_LOCATOR = 'a[href="#/completed"]';
const CLEAR_COMPLETED_BUTTON_LOCATOR = 'button.clear-completed';


class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.waitTimeout = 5000;
        this.url = 'http://todomvc.com/examples/vue/';
    }

    async getInputField() {
        return this.driver.findElement(By.css(INPUT_FIELD_LOCATOR));
    }

    async getMarkAllTasksButton() {
        return this.driver.findElement(By.css(MARK_ALL_TASKS_BUTTON_LOCATOR));
    }
    async getEditTaskField() {
        return this.driver.findElement(By.css(EDIT_TASK_LOCATOR));
    }

    async getOpenedTasks() {
        return this.driver.findElements(By.css(OPENED_TASKS_LOCATOR));
    }

    async getCompletedtasks() {
        return this.driver.findElements(By.css(COMPLETED_TASKS_LOCATOR));
    }

    async getAllTasks() {
        return this.driver.findElements(By.css(ALL_TASKS_LOCATOR));
    }

    async getDestroyButtons() {
        return this.driver.findElements(By.css(DESTROY_BUTTON_LOCATOR));
    }

    async getMarkTaskDone() {
        return this.driver.findElement(By.css(MARK_TASK_DONE_LOCATOR));
    }

    async getMarkTaskUndone() {
        return this.driver.findElement(By.css(MARK_TASK_UNDONE_LOCATOR));
    }

    async getActiveTasksCounter() {
        return this.driver.findElement(By.css(ACTIVE_TASKS_COUNTER_LOCATOR));
    }

    async getAllLink() {
        return this.driver.findElement(By.css(ALL_LINK_LOCATOR));
    }

    async getActiveLink() {
        return this.driver.findElement(By.css(ACTIVE_LINK_LOCATOR));
    }

    async getCompletedLink() {
        return this.driver.findElement(By.css(COMPLETED_LINK_LOCATOR));
    }

     async getClearCompletedButton() {
        return this.driver.findElement(By.css(CLEAR_COMPLETED_BUTTON_LOCATOR));
     }

    async addNewTask(text){
        await (this.getInputField()).sendKeys(text);
        await (this.getInputField()).sendKeys(this.driver.key.ENTER);
    }

    markAllTasksDone(){}

    markAllTasksUndone(){}

    countActiveTasks(){}

    countCompletedTasks(){}

    findTaskByText(){}

    editTask(){}

    completeOneTask() {}

    undoOneTask() {}

    deleteOneTask() {}

    clearCompletedTasks() {}
}

module.exports = BasePage;