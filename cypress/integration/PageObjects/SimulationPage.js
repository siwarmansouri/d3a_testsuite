class SimulationPage {

    getSimulationName() {
        return cy.get('#input-field-name');
    }

    getNextButton() {
        return cy.contains('Next');
    }

}
export default SimulationPage