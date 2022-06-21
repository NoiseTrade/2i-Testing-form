//loads the json data set

const data = require('C:/Users/david/Desktop/industry led/generatedJSON.json');


describe ('Automation Test Form Demo', function() {

    //reset the form before each test
    this.beforeEach(function(){

        cy.visit('http://localhost/input-form.html');

    });

    //array of all the keys in the json data set to iterate through
    data.forEach(test => {

        
it('It runs the json data through the form', function(){

    //data set is loaded into the form
    cy.get('[data-cy="first_name"]').type(test.firstName);
    cy.get('[data-cy="last_name"]').type(test.lastName);
    cy.get('[data-cy="email"]').type(test.email);
    cy.get('[data-cy="age"]').type(test.age);
    cy.get('[data-cy="address"]').type(test.address);
    cy.get('[data-cy="vehicle"]').type(test.vehicle);
    cy.get('[data-cy="language"]').type(test.language);
    cy.get('[data-cy="phone_no"]').type(test.phoneNo);

    //submit the form and display the results
    cy.get('[data-cy="submit"]').click();

    //check if #display contains the data set
    cy.get('#display').should('contain', test.firstName);
    cy.get('#display').should('contain', test.lastName);
    cy.get('#display').should('contain', test.email);
    cy.get('#display').should('contain', test.age);
    cy.get('#display').should('contain', test.address);
    cy.get('#display').should('contain', test.vehicle);
    cy.get('#display').should('contain', test.language);
    cy.get('#display').should('contain', test.phoneNo);

    
 });
});
});
