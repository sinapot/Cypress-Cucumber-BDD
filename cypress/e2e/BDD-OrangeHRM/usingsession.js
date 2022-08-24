// const { When, Then, Given, Before, And } = require("@badeball/cypress-cucumber-preprocessor");

// Before(() => {
//     cy.session("login", () => {
//             cy.request({
//             url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
//             method: "POST",
//             username: "Admin",
//             password: "admin123",
//         // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//         // cy.get("input[placeholder='Username']").type("Admin");
//         // cy.get("input[placeholder='Password']").type("admin123{enter}")
//         })
//     })
// })
// // When("send API call top login", ()=>{
// //     cy.request({
// //         url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
// //         method: "POST",
// //         username: "Admin",
// //         password: "admin123",
// //     }).as("loginResp")
// // })
// // Then("I should be logged in",()=>{
// //     cy.get("@loginResp").should((response)=>{
// //         expect(response.status).to.equal(200)
// //         expect(response).to.have.property('headers')
// //         expect(response).to.have.property('duration')
// //     })
// // })

// Given("I add an employee", () => {
//     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
//     cy.url().should("equal", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
//     cy.contains("Add").click()
// })
// // When("fill out the form and save", () => {
// //     cy.get("input[placeholder='First Name']").type("Juan")
// //     cy.get("input[placeholder='Middle Name']").type("Dela")
// //     cy.get("input[placeholder='Last Name']").type("Cruz")
// //     cy.contains("Save").click()
// // })
// // Then("employee should be added", () => {
// //     cy.contains("Successfully Saved").should("be.visible")
// // })
