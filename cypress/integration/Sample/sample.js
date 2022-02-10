/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open my application', () => {
  cy.visit('/')
})

Then('I am able to see the welcoming message', () => {
  cy.get('h1').contains('Hello World')
})
