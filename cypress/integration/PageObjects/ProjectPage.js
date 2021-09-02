class ProjectPage {

    getProjectName() {
        return cy.get('#input-field-name');
    }

    getProjectDesc() {
        return cy.get('#textarea-field-nameTextArea');
    }

    getAddProjectButton() {
        return cy.contains('Add');
    }

    getLastProject() {
        return cy.get(':nth-child(1) > .ConfigurationListHeadWrapper');
    }

    getNewSimulationButton() {
        return cy.contains('new simulation');
    }


}
export default ProjectPage