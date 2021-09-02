class LoginPage {


    getEmail() {
        return cy.get('#email');
    }

    getPassword() {
        return cy.get('#password');
    }

    getRegisterButton() {
        return cy.get('.authForm .form__element button');
    }

}
export default LoginPage