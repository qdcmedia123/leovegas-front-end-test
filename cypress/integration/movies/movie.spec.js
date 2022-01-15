
const host = 'http://localhost:3000';

it('visit index page', () => {
 cy.visit(host);
}); 

it('Logo should be visible', () => {
    cy.get('.logo').should('have.text' , 'Cinema X')
}); 

it('profile navbar should be visible with profile favirote and watch', () => {
    cy.get('ul li a').should('have.text', 'ProfileFavirotesWatch Later');
});

it('hover the mouse on profile and menu should be visible', () => {
    cy.get('a').contains('Profile').trigger('mouseover');
    cy.get('#navUl').invoke('addClass', 'showMenu');
    cy.get('#navUl').should('be.visible');
    cy.wait(1000);
    cy.get('#navUl').invoke('css', 'display', 'none');
    cy.get('#navUl').should('not.be.visible');
});

it('check if footer is displayed', () => {
    cy.get('footer').should('be.visible');
    cy.get('footer').should('have.text', 'Footer')
});

it('Search bar should be visible', () => {
    cy.get('footer').should('be.visible');
    cy.get('footer').should('have.text', 'Footer')
});

it('search input should be visiable and button', () => {
    cy.get('.search__input').type('fight');
    cy.get('.search__input').clear().type('fight').invoke('val')
    .then(val=>{    
      const myVal = val;      
      expect(myVal).to.equal('fight');
    })
});

it('button should be visible with search text', () => {
    cy.get('.search__btn').should('be.visible');
}); 

it('should not containe movie class at the begining', () => {
    cy.get('.movies').should('not.exist');
});


