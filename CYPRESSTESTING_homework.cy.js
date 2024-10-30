describe('Google Search Page', () => {
  it('Should display Google title', () => {
    cy.visit('https://www.google.com/'); 
    cy.title().should('include', 'Google'); // checks, if the title has "Google" in it
  });

  it('Should fail because title contains Bing', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('include', 'Bing'); // checks, if the title has "Bing" in it
  });
});