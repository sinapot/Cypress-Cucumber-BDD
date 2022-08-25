//Page Object Model for Login page

export default class AddEmployeePage{

    get firstnamefield(){
        return cy.get("input[placeholder='First Name']")
    }

    get middlenamefield(){
        return cy.get("input[placeholder='Middle Name']")
    }

    get lastnamefield(){
        return cy.get("input[placeholder='Last Name']")
    }

    get savebtn(){
        return cy.contains("Save")
    }

    addemployee(firstname, middlename, lastname){
        this.firstnamefield.type(firstname);
        this.middlenamefield.type(middlename);
        this.lastnamefield.type(lastname);
        this.savebtn.click();
    }

}

export const addEmployeePage = new AddEmployeePage();