import { expect, test } from "@playwright/test"

test.describe("Test 5 : Register with existing email: ", () => {
  test("Register with existing email:", async ({ page }) => {
    //first register the user
    await page.goto("http://automationexercise.com")
    await expect(page).toHaveTitle("Automation Exercise")

    await page.getByRole("link", { name: "Signup / Login" }).click()
    await expect(page.getByText("New User Signup!")).toBeVisible()

    const time = Date.now()
    const username = `Abhishek${time}`
    const email = `Abhishek@${time}.com`
    const password = `Abhishek${time}`

    await page.locator('[data-qa="signup-name"]').fill(username)
    await page.locator('[data-qa="signup-email"]').fill(email)
    await page.click('[data-qa="signup-button"]')
    await expect(page.getByText("Enter Account Information")).toBeVisible()

    //fill exctra info
    await page.locator("#id_gender1").check()
    await page.locator('input[data-qa="password"]').fill(password)
    await page.locator('select[data-qa = "days"]').selectOption("23")
    await page.locator('select[data-qa = "months"]').selectOption("2")
    await page.locator('select[data-qa = "years"]').selectOption("2003")

    await page.locator("#newsletter").check()
    await page.locator("#optin").click()

    //address info
    await page.locator('input[data-qa="first_name"]').fill("Abhishek")
    await page.locator('input[data-qa="last_name"]').fill("Kumar")
    await page.locator('input[data-qa="company"]').fill("Abhishek Kumar")
    await page.locator('input[data-qa="address"]').fill("Latehar")
    await page.locator('input[data-qa="address2"]').fill("Latehar")
    await page.locator('select[data-qa="country"]').selectOption("India")
    await page.locator('input[data-qa="state"]').fill("Jharkhand")
    await page.locator('input[data-qa="city"]').fill("Ranchi")
    await page.locator('input[data-qa="zipcode"]').fill("123456")
    await page.locator('input[data-qa="mobile_number"]').fill("1234567890")

    await page.locator('button[data-qa="create-account"]').click()

    await expect(page.getByText("Account Created!")).toBeVisible()

    await page.locator('a[data-qa="continue-button"]').click()
    await expect(page.getByText(/Logged in as/i)).toContainText(username)

    //now logout the user to re-register with same email
    await page.locator('a[href="/logout"]').click()

    //now retry to register with the same email
    await expect(page.getByText("New User Signup!")).toBeVisible()
    await page.locator('[data-qa="signup-name"]').fill(username)
    await page.locator('[data-qa="signup-email"]').fill(email)
    await page.click('[data-qa="signup-button"]')

    await expect(page.getByText("Email Address already exist!")).toBeVisible()
  })
})
