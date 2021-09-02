class HomePage {

    getProjectsIcon() {
        return cy.get('.side-nav__main__item__icon button').eq(1);
    }

    getNewProjectButton() {
        return cy.contains('new project');
    }

}
export default HomePage