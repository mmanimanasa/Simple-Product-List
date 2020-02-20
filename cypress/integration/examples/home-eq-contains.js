describe("app initialize", () => {
    it.only('loads', () => {
        // cy.server()
        // cy.route('GET', 'http://localhost:3000/' , 'fixture: posts')
        cy.visit('http://localhost:3000/')
        cy.pause()
        cy.get('.cta').find('h3').should('have.text','TITLE: Pretty Girls Code TeeTITLE: Ruby SisTITLE: Holographic Dark Moon NecklaceTITLE: Floppy CropTITLE: A beautiful switch-on book lightTITLE: Bling your Laptop with an Internet-Connected Light Show')
        cy.get('.cta').find('p')
        .should('have.text', 'DESCRIPTION: Everyones favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.DESCRIPTION: Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!DESCRIPTION: Not sure if Ill be making more, get it while I have it in the store.DESCRIPTION: Used up the Diskette fabric today to make 2 of these crops.DESCRIPTION: Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.DESCRIPTION: Create a web-connected light-strip API controllable from your website, using the Particle.io.')

    })
})