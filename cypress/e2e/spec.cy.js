describe('Google Search Page', () => {
  it('Should display Google title', () => {
    cy.visit('https://www.google.com/'); // Külastab Google'i lehte
    cy.title().should('include', 'Google'); // Kontrollib, kas pealkiri sisaldab "Google"
  });

  it('Should fail because title contains Bing', () => {
    cy.visit('https://www.google.com/'); // Külastab Google'i lehte
    cy.title().should('include', 'Bing'); // Kontrollib, kas pealkiri sisaldab "Bing"
  });
});