//Page Object Model for Login page

export default class LoginPage{

    get usernamefield(){
        return cy.get("input[placeholder='Username']");
    }

    get passwordfield(){
        return cy.get("input[placeholder='Password']");
    }

    get loginbtn(){
        return cy.get("button[type='submit']")
    }

    login(username,password){
        this.usernamefield.type(username);
        this.passwordfield.type(password);
        this.loginbtn.click();
    }
    
    //login helper function wrapped in cy session
    loginsession (){
        cy.session("login", () => {
            //visit baseUrl as defined in config
            cy.visit("/");
            //using page object model to login
            this.login("Admin","admin123")
        })
        cy.visit("/pim/viewEmployeeList")
    }
}

export const loginPage = new LoginPage();