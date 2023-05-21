describe('Test de navegación', () => {
    it('Ingresa a una página específica', () => {
      cy.visit('/');
      cy.contains('Label')
    })
  })
  