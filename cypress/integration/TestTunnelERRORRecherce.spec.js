context('Retracer un parcours d achat',() => {

    before(() => {
        cy.visit("https://www.mavillemonshopping.fr/")
        cy.wait(2000)
    })

    /*it('Se connecter ',() => {
            cy.get('.hidden-sm > #sign-in-button').click()
            //cy.get('[href="/policies/user_terms/cookie/accept"]').click()
            cy.wait(2500)
            cy.get('#user_email_sign_in').type('master.snoopy@hotmail.fr',{ force: true })
            cy.get('#user_password_sign_in').type('maVillemonShop33!', { force: true })
            cy.get(':nth-child(7) > .btn').click()
        })*/

    it('Effectuer une recherche de boutiques à proximité',() => {
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
        cy.get('.show_by > [href="/fr/bordeaux/boutiques"]').click
        cy.get('.input-group-btn > .btn > .icons8').click()
        cy.wait(2000)
        cy.get('#q').click().type('Gecko&Ginko')
        cy.get('#form-filter-products-770').check({ force: true }).should('be.checked')
        cy.wait(2000)
        cy.url().should('include','boutiques?q=Gecko%26Ginko')
        cy.get('#catalogue-in-city-part > div > div > div > div > div.box-infos').click()
    })
/* l'élément de barre de recherche sur la page produit est en erreur, donc on ne peut poursuivre ce parcours, malgré plusieurs tentative de corrections:

        it('Mettre un produit dans son panier',() => {
            cy.get('#header_shop > div > div.box > div.col-xs-12.col-sm-6.no-float > div > div.shop-name > h1').should('contain','Gecko&amp;Ginko')
            cy.get('#form-filter-products-770').click()
            cy.get('[href="/policies/user_terms/cookie/accept"]').click()
            cy.get('#add_to_cart').click()
            cy.get('#notices')
        })

    it('Valider son panier',() => {
        cy.get('#cart-link > i').click()
        cy.get('#checkbox-be-on-age').check({ force: true }).should('be.checked')
        cy.get('#validate-cart').click()
    })

    it('Entrer ses identifiants de connexion',() => {
    })

    it('Passer la validation',() => {
    });

    it('Passer la validation',() => {
    })

    it('Choix du mode de retrait',() => {
    })*/

})
