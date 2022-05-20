
describe('Dashboard Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.fixture('movies.json').then((json) => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', json)
    })
  })

  it('displays a title of Rancid Tomatillos', () => {
    cy.get('h1').first().should('have.text', 'Rancid Tomatillos')
  })

  it('displays a button that links to home', () => {
    cy.get('a').first().should('have.attr', 'href')
    .should('include', '/')
  })

  it('displays a list of cards with a length of 5', () => {
    cy.get('.card').should('have.length', 5)
  })

  it('displays a title for each movie card', () => {
    cy.get('.card h2').first().should('have.text', 'Money Plane')
    cy.get('.card h2').eq(1).should('have.text', 'Mulan')
    cy.get('.card h2').eq(2).should('have.text', 'Rogue')
  })

  it('movie card should display a rating', () => {
    cy.get('.card h3').first().should('have.text', 'Rating: 6.88')
    cy.get('.card h3').eq(1).should('have.text', 'Rating: 5.10')
    cy.get('.card h3').eq(2).should('have.text', 'Rating: 7.33')
  })

  it('movie card should display a release date', () => {
    cy.get('.card h4').first().should('have.text', 'Release Date: 2020-09-29')
    cy.get('.card h4').eq(1).should('have.text', 'Release Date: 2020-09-04')
    cy.get('.card h4').eq(2).should('have.text', 'Release Date: 2020-08-20')
  })

  it('movie card should display an image', () => {
    cy.get('.card .poster-card').first().should('have.attr', 'src')
    .should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    cy.get('.card .poster-card').eq(1).should('have.attr', 'src')
    .should('include', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
    cy.get('.card .poster-card').eq(2).should('have.attr', 'src')
    .should('include', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
  })

  it('Anchor tag has an expected link', () => {
    cy.get('.card').first().click()
    cy.get('.view-movie-info p').should('have.length', 7)
  })

  it('should return an error message if a network request fails', () => {
    cy.visit('http://localhost:3000/')
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404,
        body: {
          error: 'Cannot GET /api/v2/movies'
        }
      })
      .get('p').first().should('have.text', 'Sorry something went wrong, please try again later')
  })

})
