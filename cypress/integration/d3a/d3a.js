import {
  Given,
  And,
  Then,
  When
} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../PageObjects/HomePage';
import LoginPage from '../PageObjects/LoginPage';
import ProjectPage from '../PageObjects/ProjectPage';
import SimulationPage from '../PageObjects/SimulationPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const projectPage = new ProjectPage();
const simulationPage = new SimulationPage();
let faker = require("faker");

let projectName_auto = faker.lorem.word(5)+"_delete_me";
let user;

before(function() {
  cy.fixture('d3a_user.json').then(function(data) {
      user = data
  })
})


Given('I open Login page', () => {
  cy.visit('https://www.d3a.io/login', {
      timeout: 100000
  });
})


And('I login with my user by entering email address and password of precreated user', () => {
  loginPage.getEmail().type(user.email);
  loginPage.getPassword().type(user.password);
})

And('I do click on Login Button', () => {
  loginPage.getRegisterButton().click();
})


Then('Validate that a precreated user is able to login to d3a.io', () => {
  cy.contains('Home');
})

Given('I open Projects page', () => {
  cy.visit('https://www.d3a.io/projects', {
      timeout: 100000
  });
})

And('I am on Projects Page', () => {
  cy.contains('Projects');
})

And('I click on New Project Button', () => {
  homePage.getNewProjectButton().click();
})


And('I type Project Name and Description', () => {
  projectPage.getProjectName().type(projectName_auto);
  projectPage.getProjectDesc().type(projectName_auto);
})

And('I click on Add Button', () => {
  projectPage.getAddProjectButton().click();
})

Then('I can see that the project is listed correctly after being created', () => {
  cy.contains(projectName_auto);
})

When('I click on Project icon', () => {
  homePage.getProjectsIcon().click();
})

And('I click on previously added Project', () => {
  cy.wait(5000);
  projectPage.getLastProject().click();
})

And('I click on Add Simulation Button', () => {
  projectPage.getNewSimulationButton().click();
})

And('I click on Next Button', () => {
  cy.wait(5000);
  simulationPage.getNextButton().click();
})

Then('I can see that the simulation as {string} is listed correctly', (Name) => {
  cy.contains(Name);
})