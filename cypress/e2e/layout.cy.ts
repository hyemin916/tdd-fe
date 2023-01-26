context('Layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('상단 bar가 있다', () => {
    cy.getByTestId('app-bar').should('exist');
  });
});
