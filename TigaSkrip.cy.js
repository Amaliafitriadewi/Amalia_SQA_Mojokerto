describe('Verifikasi Form Login Dummy', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5500/login.html')
    })
  
    it('Menampilkan error jika form kosong', () => {
      cy.get('button').click()
      cy.get('#error-msg').should('be.visible')
    })
  
    it('Menampilkan error jika email/password salah', () => {
      cy.get('#email').type('salah@example.com')
      cy.get('#password').type('salah123')
      cy.get('button').click()
      cy.get('#error-msg').should('be.visible')
    })
  
    it('Berhasil login jika email dan password benar', () => {
      cy.get('#email').type('amel@example.com')
      cy.get('#password').type('amel123')
      cy.get('button').click()
      cy.url().should('include', '/dashboard.html')
    })
  })
  