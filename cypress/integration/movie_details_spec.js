
describe('Movie Details Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('should have expected FAQ for movie one', () => {
    cy.get('.card').first().click()
    cy.get('.movie-faq p').should('have.length', 6)
    cy.get('.movie-faq p').eq(0).should('have.text', 'Rating: 6.875')
    cy.get('.movie-faq p').eq(1).should('have.text', 'Genre: Action')
    cy.get('.movie-faq p').eq(2).should('have.text', 'Release Date: 2020-09-29')
    cy.get('.movie-faq p').eq(3).should('have.text', 'Runtime: 82')
    cy.get('.movie-faq p').eq(4).should('have.text', 'Budget: 0')
    cy.get('.movie-faq p').eq(5).should('have.text', 'Revenue: 0')
  })

  it('should have expected about for movie one', () => {
    cy.get('.card').first().click()
    cy.get('.about-movie p').should('have.length', 1)
    cy.get('.about-movie h2').eq(0).should('have.text', 'Money Plane')
    cy.get('.about-movie h2').eq(1).should('have.text', 'Overview')
    cy.get('.about-movie p').should('have.text', `A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
  })

  it('should have expected FAQ for movie three', () => {
    cy.get('.card').eq(2).click()
    cy.get('.movie-faq p').should('have.length', 6)
    cy.get('.movie-faq p').eq(0).should('have.text', 'Rating: 7.333333333333333')
    cy.get('.movie-faq p').eq(1).should('have.text', 'Genre: Action')
    cy.get('.movie-faq p').eq(2).should('have.text', 'Release Date: 2020-08-20')
    cy.get('.movie-faq p').eq(3).should('have.text', 'Runtime: 106')
    cy.get('.movie-faq p').eq(4).should('have.text', 'Budget: 0')
    cy.get('.movie-faq p').eq(5).should('have.text', 'Revenue: 0')
  })

  it('should have expected about for movie two', () => {
    cy.get('.card').eq(2).click()
    cy.get('.about-movie h2').eq(0).should('have.text', 'Rogue')
    cy.get('.about-movie h4').should('have.text', 'When the hunter becomes the prey.')
    cy.get('.about-movie h2').eq(1).should('have.text', 'Overview')
    cy.get('.about-movie p').should('have.text', 'Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.')
  })

  it('should have expected FAQ for movie five', () => {
    cy.get('.card').eq(4).click()
    cy.get('.movie-faq p').should('have.length', 6)
    cy.get('.movie-faq p').eq(0).should('have.text', 'Rating: 7.166666666666667')
    cy.get('.movie-faq p').eq(1).should('have.text', 'Genre: ActionHorrorThriller')
    cy.get('.movie-faq p').eq(2).should('have.text', 'Release Date: 2020-07-15')
    cy.get('.movie-faq p').eq(3).should('have.text', 'Runtime: 114')
    cy.get('.movie-faq p').eq(4).should('have.text', 'Budget: 17000000')
    cy.get('.movie-faq p').eq(5).should('have.text', 'Revenue: 35878266')
  })

  it('should have expected about for movie five', () => {
    cy.get('.card').eq(4).click()
    cy.get('.about-movie h2').eq(0).should('have.text', 'Peninsula')
    cy.get('.about-movie h4').should('have.text', 'Escape The Apocalypse')
    cy.get('.about-movie h2').eq(1).should('have.text', 'Overview')
    cy.get('.about-movie p').should('have.text', 'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.')
  })

})