describe('Verifikasi Login Sederhana', () => {
    it('Login berhasil dengan email dan password yang benar', () => {
      cy.visit('http://localhost:5500/login.html')
  
      cy.get('#email').type('test@example.com')
      cy.get('#password').type('amel123')
      cy.get('button').click()
  
      cy.url().should('include', '/dashboard.html')
    })
  })
  