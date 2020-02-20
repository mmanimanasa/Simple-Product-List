describe("app initialize", () => {
    it.only('loads', () => {
        // cy.server()
        // cy.route('GET', 'http://localhost:3000/' , 'fixture: posts')
        cy.visit('http://localhost:3000/')
        cy.pause()
        cy.get('.top')
        .should('have.length',1)
        cy.get('.hero')
        .should('have.length', 1)
        cy.get('.cta ')
        .should('have.length', 18)
        

    })
})