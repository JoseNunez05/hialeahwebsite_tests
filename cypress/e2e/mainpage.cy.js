describe('functional tests', () => {

  beforeEach('visit site', () => {
    cy.visit('https://www.hialeahfl.gov/')
  })

  it('search tool', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })


    cy.get('#searchField5d09d55e-942c-48bf-a4c8-780dc919d78c').click().type('Construction').type('{enter}');

    // searching for construction and maintenance
    cy.get('div.cp-search-resultHeader > div.cp-search-resultTitle > h3').each((title, index, titles) => {
      if(title.text()){
        cy.log('results shown: ' + title.text());
      }

    })
  })
})