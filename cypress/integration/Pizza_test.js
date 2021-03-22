describe('Pizza App', () => {
  const nameInput = () => cy.get('[name="name"]')
  const dropdown =() => cy.get('select')
  const checkbox_1 = () => cy.get(':nth-child(8) > input')
  const checkbox_2 = () => cy.get(':nth-child(9) > input')
  const submitButton =() => cy.get('button')
    
  const testName = 'JohnSmith42'
    beforeEach(() => {
        cy.visit('http://localhost:3000')
      })
    it('test form input', ()=>{
      submitButton().click()

      nameInput()
      .should('have.value', '')
      .type(testName)
      .should('have.value', testName)

      submitButton()
      .should('be.disabled')

      dropdown().select('Small') 

      checkbox_1()
      .should('not.be.checked')
      .check()
      .should('be.checked')

      checkbox_2()
      .should('not.be.checked')
      .check()
      .should('be.checked')

      submitButton()
      .should('be.not.disabled')
      .click()


    })

})