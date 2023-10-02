describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('/')
    //Verificar o título da aplicação na aba do navegador
    cy.title()
      .should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
  })
})