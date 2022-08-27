//Page Object Model for PIM page

export default class PIMPage{

    get addbtn(){
        return cy.contains("Add");
    }
    get firstcheckbox(){
        return cy.get(".oxd-table-card input").eq(0);
    }
    get deleteBtn(){
        return cy.contains("Delete Selected");
    }
    get yesBtn(){
        return cy.contains("Yes");
    }
    get employeenamefield(){
        return cy.get("input[data-v-7c56a434]").eq(0);
    }
    get jobtitledropdown(){
        return cy.get("[data-v-2fe357a6]  [data-v-013b3fcc] ").eq(2)
    }
    get dropdownlist(){
        return cy.get("[role='listbox']").contains("Software Engineer")
    }
    get searchbtn(){
        return cy.contains("Search")
    }
    get reportsbtn(){
        return cy.contains("Reports")
    }

    clickAddBtn(){
        this.addbtn.click();
    }

    tickfirstcheckbox(){
        this.firstcheckbox.click({force: true});
    }

    clickDeleteBtn(){
        this.deleteBtn.click({force: true})
    }

    clickYes(){
        this.yesBtn.click()
    }

    searchforrole(firstname){
        this.employeenamefield.type(firstname);
        this.jobtitledropdown.click({force: true})
        this.dropdownlist.click();
        this.searchbtn.click({force: true});
    }
    clickJobTitleDropown(){
        //clicks dropdown list
        this.jobtitledropdown.click({force: true})
        //clicks for Software Engineer hardcoded
        this.dropdownlist.click();
        this.searchbtn.click({force: true});
        
    }
    clickreports(){
        this.reportsbtn.click();
    }


}

export const pimPage = new PIMPage();