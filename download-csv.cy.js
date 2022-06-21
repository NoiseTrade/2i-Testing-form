describe('download the CSV file', () => {
  it('Selects the data needed for the form and generates CSV file', () => {
    
    //visit the 2i csv generator page
    cy.visit('http://localhost:3000/')

    //add first name
    cy.get('#select-key-drop-basic').select("firstName")
    cy.get('#btn-add-prop').click()

    //add last name
    cy.get('#select-key-drop-basic').select("lastName")
    cy.get('#btn-add-prop').click()

    //add email
    cy.get('#select-key-drop-basic').select("email")
    cy.get('#btn-add-prop').click()

    //add age and select age range
    cy.get('#select-key-drop-basic').select("age")
    cy.get('#select-key-drop-age').select("31-50")
    cy.get('#btn-add-prop').click()

    //add address
    cy.get('#select-key-drop-basic').select("address")
    cy.get('#btn-add-prop').click()

    //add vehicle and vehicle type
    cy.get('#select-key-drop-basic').select("vehicle")
    cy.get('#select-key-drop-car').select("car")
    cy.get('#btn-add-prop').click()

    //add language
    cy.get('#select-key-drop-basic').select("language")
    cy.get('#btn-add-prop').click()

    //add phone number
    cy.get('#select-key-drop-basic').select("phoneNo")
    cy.get('#btn-add-prop').click()

    //input amount of entries required
    cy.get('#entries-input').type("10")
    
    //generate the csv file

    cy.get('#btn-get-data').click()
    cy.get('#btn-arr-data').click()
    cy.get('#btn-download-data').click()

    

  })
})