//Page Object Model for Reports page

export default class ReportsPage{

    get employeejobdetailsrow(){
        return cy.get("[data-v-9971f952]").eq(3).find("button[data-v-654f8522]").eq(2);
    }

    clickreportsbtn(){
        this.employeejobdetailsrow.click();
    }
}

export const reportsPage = new ReportsPage();