// dashboard_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Dashboard Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays a title of Rancid Tomatillos', () => {
    cy.get('h1').first().should('have.text', 'Rancid Tomatillos')
  })

  it('displays a list of cards with a length of 40', () => {
    cy.get('.card').should('have.length', 40)
  })

  it('displays a title for each movie card', () => {
    cy.get('.card h2').first().should('have.text', 'Money Plane')
    cy.get('.card h2').eq(1).should('have.text', 'Mulan')
    cy.get('.card h2').eq(2).should('have.text', 'Rogue')
  })

  it('Anchor tag has an expected link', () => {
    cy.get('.card').first().click()
    cy.get('.view-movie-info p').should('have.length', 7)
  })

  // it('displays an image for a movie card', () => {
  //   cy.get('.card h2').first().should('have.text', 'Money Plane')
  // })
})
