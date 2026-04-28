import { expect, test } from "@playwright/test"

test("Login user with incorrect email and correct password", async ({
  page,
}) => {
  await page.goto("http://automationexercise.com")
  await expect(page).toHaveTitle("Automation Exercise")

  await page.getByRole("link", { name: "Signup / Login" }).click()
  await expect(page.getByText("Login to your account")).toBeVisible()

  await page
    .locator('input[data-qa="login-email"]')
    .fill(`email_${Date.now()}@gmail.com`)
  await page.locator('input[data-qa="login-password"]').fill("password")
  await page.locator('button[data-qa="login-button"]').click()

  await expect(
    page.getByText("Your email or password is incorrect!"),
  ).toBeVisible()
})
