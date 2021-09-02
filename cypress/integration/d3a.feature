Feature: D3A

Background: Login testCase before every scenario

Given I open Login page
And I login with my user by entering email address and password of precreated user
And I do click on Login Button
Then Validate that a precreated user is able to login to d3a.io

@project_tag
Scenario: Project testCase

Given I open Projects page
And I am on Projects Page
And I click on New Project Button
And I type Project Name and Description
And I click on Add Button
Then I can see that the project is listed correctly after being created

@simulation_tag
Scenario: Simulation testCase

When I click on Project icon
And I click on previously added Project
And I click on Add Simulation Button
And I click on Next Button
Given I open Projects page
And I am on Projects Page
And I click on previously added Project
Then I can see that the simulation as "default simulation" is listed correctly