context('Retracer un parcours d achat',() => {

    before(() => {
        cy.visit("https://www.mavillemonshopping.fr/")
        cy.wait(2000)

    })
    it('Effectuer une recherche de boutique à proximité',() => {
        cy.title().should('include','Ma Ville Mon Shopping')
        cy.get('[href="/policies/user_terms/cookie/accept"]').click()
        cy.wait(1500)
        cy.get('#address-input').type('109 rue Gustave Carde').should('have.class', 'form-control')
        cy.wait(1000)
        cy.get('#addresses-list > :nth-child(1)').click()
        cy.get('#homepage-address-btn').click()
    })

    it('Choisir une boutique',() => {
        cy.url().should('include', '/bordeaux/boutiques')
        cy.get('#header-shops > div > div > h2').should('contain', 'Bordeaux')
        cy.get('[href="/policies/user_terms/cookie/accept"]').click()
        cy.wait(3000)
        cy.get('.input-group-btn > .btn > .icons8').click()
        cy.get('#search-bar > .col-xs-12 > form').click().type('Gecko&Ginko').should('have.type','text')
        cy.get('#form-filter-products-770').check({ force: true }).should('be.checked')
        cy.wait(2000)
        cy.url().should('include','boutiques?q=Gecko%26Ginko')
        cy.get('#catalogue-in-city-part > div > div > div > div > div.box-infos').click()
    })

    it('Mettre un produit dans son panier',() => {
        cy.get('#header_shop > div > div.box > div.col-xs-12.col-sm-6.no-float > div > div.shop-name > h1').should('contain','Gecko&amp;Ginko')
        cy.get('#form-filter-products-770').click()
        cy.get('[href="/policies/user_terms/cookie/accept"]').click()
        cy.get('#add_to_cart').click()
        cy.get('#notices')
    })

    it('Valider son panier',() => {
    })

    it('Se connecter pour valider son panier',() => {
    })

    it('Entrer ses identifiants de connexion',() => {
    })

    it('Passer la validation',() => {
    });

    it('Passer la validation',() => {
    })

    it('Choix du mode de retrait',() => {
    })
})
