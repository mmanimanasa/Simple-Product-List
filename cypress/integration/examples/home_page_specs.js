describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('http://localhost:3000/')

        // cy.readFile('posts.json').then((json) => {
        //     expect(json).to.be.an('object')
        //   })
        cy.pause()
            cy.get('.button').click({multiple : true})
    })
})

