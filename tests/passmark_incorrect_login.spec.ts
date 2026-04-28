import {test, expect} from '@playwright/test';
import { runSteps, configure } from 'passmark';

configure({
    ai: {gateway: "openrouter"}
})

test("Test 3: Login with incorrect email", async ({page}) => {
    test.setTimeout(300_000);
    await runSteps({
        page,
        userFlow: 'Login with incorrect email and password, verify incorrect login',
        steps:[
            {
                description:"Navigate to http://automationexercise.com",
                waitUntil: "Home page is visible"
            },
            {
                description: "click on 'Signup / Login'",
                waitUntil: "'Login to your account' is visible"
            },
            {
                description: "enter email {run.email} and password {run.password} on Login to your account form",
            },
            {
                description: "click on 'Login' button",
                waitUntil: 'Your email or password is incorrect! is visible'
            }
        ],
        assertions: [
      {
        assertion:
          "The user flow successfully navigated to login page and after entering the wrong email, the correct message should be shown.",
      },
    ],
    test,
    expect
    })
})