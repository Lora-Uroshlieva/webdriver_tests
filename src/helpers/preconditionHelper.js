'use strict';

function clearTasks() {
    browser.executeScript('localStorage.removeItem("todos-vuejs");');
    browser.refresh();
}

module.exports = clearTasks;