describe('functional tests', () => {

  beforeEach('visit site', () => {
    cy.visit('https://www.hialeahfl.gov/')
  })

  it.skip('search tool', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })

    cy.get('#searchField5d09d55e-942c-48bf-a4c8-780dc919d78c').click().type('Construction').type('{enter}');

    // making sure results show up.
    cy.get('div.cp-search-resultHeader > div.cp-search-resultTitle > h3').each((title, index, titles) => {

      // if a result is shown, log the title.
      if(title.text()){
        cy.log('results shown: ' + title.text());
      }
    })
  })

  it('milander center', () => {

    //click the milander section
    cy.get('#widgetQuicklinkf125a684-bb78-40cc-872a-1dbb88613df2 > .widgetBody > .row > :nth-child(2) > .semanticList > .widgetItem > .widgetDesc').click();
    
    // should be redirected to milander page
    cy.url().should('eq', 'https://www.hialeahfl.gov/1029/Milander-Center');
  })
})