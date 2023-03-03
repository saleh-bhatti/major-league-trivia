describe('Smoke Test - Back and Forth bw Tabs', () => {
  it('cy.go() - go back and forth between tabs', () => {
    cy.visit('/');
    cy.go('back')
    cy.go('forward')
    cy.visit('/NBA');
    cy.go('back')
    cy.go('forward')
    cy.visit('/NFL');
    cy.go('back')
    cy.go('forward')
    cy.visit('/Preimer League');
    cy.go('back')
    cy.go('forward')
  });


})


describe('Smoke Test - NBA Page', () => {
  it('can view the NBA page', () => {
    cy.visit('/NBA');
  });
});


describe('Smoke Test - NFL Page', () => {
  it('can view the NFL page', () => {
    cy.visit('/NFL');
  });
});


describe('Smoke Test - EPL Page', () => {
  it('can view the NFL page', () => {
    cy.visit('/Premier League');
  });
});
