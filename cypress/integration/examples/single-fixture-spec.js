describe('Loading single fixture', () => {
    it(' title loads', () => {
        cy.visit('http://localhost:3000/')
      cy.fixture('title').should('deep.equal',
       { 
       name2: 'Ruby sis',  
       name1: 'Pretty Girls Code Tee',
       name3: "Holographic Dark Moon Necklace",
       name4: "Floppy Crop",
       name5: "A beautiful switch-on book light",
       name6: "Bling your Laptop with an Internet-Connected Light Show" })
    })
    it('description loads', () => {
        cy.fixture('desc').should('deep.equal',
        {
            Description1: "Everyones favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.",
            Description2: "Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!",
            Description3: "Not sure if Ill be making more, get it while I have it in the store.",
            Description4: "Used up the Diskette fabric today to make 2 of these crops.",
            Description5: "Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.",
            Description6: "Create a web-connected light-strip API controllable from your website, using the Particle.io."
        })
    })
    it('image loads', () => {
        cy.fixture('img').should('deep.equal',
        {
            img1: "https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png",
            img2: "https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png",
            img3: "https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png",
            img4: "https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png",
            img5: "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
            img6: "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png"
        })
    })
  })
  