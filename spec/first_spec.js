"use strict";

const Application = require('./../src/pages/Application');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;


describe('first test', () => {
    let app;

    beforeAll(async function () {
        app = await new Application();
    });

    it('should open page', async () => {
       await app.allTasksPage.open();
       await app.allTasksPage.addNewTask('111');
    });

    afterAll(async function () {
        await app.driver.quit();
    });
});
