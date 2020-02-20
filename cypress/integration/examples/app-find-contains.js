describe("app initialize", () => {
    it.only('loads', () => {
        // cy.server()
        // cy.route('GET', 'http://localhost:3000/' , 'fixture: posts')
        cy.visit('http://localhost:3000/')
        cy.get('.top')
        cy.pause()
        cy.get('.cta').find('h3')
        .contains("TITLE")
        cy.get('.cta').find('p')
        .contains('DESCRIPTION')

    })
})