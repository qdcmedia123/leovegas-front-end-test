const host = 'http://localhost:3000';
it('visit index page', () => {
    cy.visit(host);
}); 
   
it('type search string in input box and click the search button', () => {
    cy.get('.search__input').clear().type('fight');
    cy.get('.search__btn').click();
    cy.get('.movies').should('be.visible');
});

it('items length should be 19', ()=> {
    cy.get('.movies').find('.items').should('have.length', 20)
});
it('pagination must be available', () => {
    cy.get('.pagination-3').should('be.visible');
    cy.get('.pagination-3').find('.page-number').should('have.length', 99);
    cy.get('.pagination-3').children().first().should('have.class', 'active')
});

it('Click to 2 pagination item', () => {
    cy.get('.pagination-3 li:nth-child(2)').click();
    cy.get('.pagination-3 li:nth-child(2)').should('have.class', 'active')
});

it('click to prevouse button and shift to first li', () => {
    cy.get('.prev-page').click(); 
    cy.get('.pagination-3 li:nth-child(1)').should('have.class', 'active')
});

it('click to next button and shift to next li', () => {
    cy.get('.next-pagination').click(); 
    cy.get('.pagination-3 li:nth-child(2)').should('have.class', 'active')
});