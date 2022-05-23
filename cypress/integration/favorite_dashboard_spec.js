
describe('Favorite Details Flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.fixture('movies.json').then((json) => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', json)
    })
  })

  it('should see a message on favorites page if non are added', () => {
    cy.get('.navbar .favorites').click()
    cy.get('.no-favs p').first().should('have.text', 'Please add some favorite movies to see them here!')
  })

  it('should see the card one added to favorites', () => {
    cy.get('.card').first().click()
    cy.wait(1500)
    cy.get('.favorite-button').should('have.text', 'Add to Favorites')
    // cy.intercept('POST', 'http://localhost:3001/api/v1/user/favorites', {
    //   statusCode: 201,
    //   body: {
    //     id: 694919,
    //     poster_path: 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
    //     backdrop_path: 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
    //     title: 'Money Plane',
    //     average_rating: 6.875,
    //     release_date: '2020-09-29'
    //   }
    // })
    cy.get('.favorite-button').click()
    cy.get('.favorite-button').should('have.text', 'In Your Favorites!')
    cy.get('.navbar .favorites').click()
    cy.get('.card h2').first().should('have.text', 'Money Plane')
  })

  it('should see the card two added to favorites', () => {
    cy.get('.card').eq(3).click()
    cy.wait(1500)
    cy.get('.favorite-button').should('have.text', 'Add to Favorites')
    cy.get('.favorite-button').click()
    cy.get('.favorite-button').should('have.text', 'In Your Favorites!')
    cy.get('.navbar .favorites').click()
    cy.get('.card h2').eq(1).should('have.text', 'Ava')
  })

  it('should test the first GET request in ViewAllFavorites', ()=> {
    cy.fixture('first-GET-request.json').then((json) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/user/favorites', json)
    })
    cy.get('.navbar .favorites').click()
    cy.get('.card h2').first().should('have.text', 'Money Plane')
  })

  it('should test the second GET request in ViewAllFavorites', ()=> {
    cy.fixture('second-GET-request.json').then((json) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/user/favorites', json)
    })
    cy.get('.navbar .favorites').click()
    cy.get('.card h2').eq(1).should('have.text', 'Ava')
  })

})