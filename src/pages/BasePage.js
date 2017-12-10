"use strict";

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
    }

    addNewTask() {}

    markAllTasksDone() {}

    markAllTasksUndone() {}

    countActiveTasks() {}

    countCompletedTasks() {}

    findTaskByText() {}

    editTask() {}

    completeOneTask() {}

    undoOneTask() {}

    deleteOneTask() {}

    clearCompletedTasks() {}
}

