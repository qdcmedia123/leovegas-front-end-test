const host = 'http://localhost:3000';

it('visit index page', () => {
 cy.visit(host);
}); 

it('type search string in input box and click the search button', () => {
    cy.get('.search__input').clear().type('fight');
    cy.get('.search__btn').click();
    cy.get('.movies').should('be.visible');
});

it('get the first item and check on favirotes', () => {
    cy.get('.items:nth-child(1) img.review-svg').should('have.class', 'deactive');
    cy.get('.items:nth-child(1) img.review-svg').click();
    cy.get('.items:nth-child(1) img.review-svg').should('have.class', 'active');
});


it('hover the mouse on profile and menu should be visible', () => {
    cy.get('a').contains('Profile').trigger('mouseover');
    cy.get('#navUl').invoke('addClass', 'showMenu');
    cy.get('#navUl').should('be.visible');
    cy.get('a').contains('Favirotes').click();
    cy.url().should('eq', `${host}/favirotes`)
});

it('go to wishlist 1 item only must exists', () => {
    cy.get('.movies').find('.items').should('have.length', 1)
});

it('click to the favirotes icon and it should remove', () => {
    cy.get('.items:nth-child(1) img.review-svg').should('have.class', 'active');
    cy.get('.items:nth-child(1) img.review-svg').click(); 
});

it('if there is no favirotes then no data found message should be shown', () => {
    cy.get('.main-message').should('have.text', 'No data found');
});

it('check to main login, should redirect to main page', () => {
    cy.get('.logo span').click(); 
    cy.url().should('eq', `${host}/`)
});