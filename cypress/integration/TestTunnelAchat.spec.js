context('Retracer un parcours d achat',() => {

    before(() => {
        cy.visit("https://www.mavillemonshopping.fr/")
        cy.wait(2000)
    })


    it('Effectuer une recherche de boutiques à proximité',() => {
        cy.title().should('include','Ma Ville Mon Shopping')
        //cy.get('[href="/policies/user_terms/cookie/accept"]').click()
        cy.wait(1500)
        cy.get('#address-input').type('109 rue Gustave Carde').should('have.class', 'form-control')
        cy.wait(1000)
        cy.get('#addresses-list > :nth-child(1)').click()
        cy.get('#homepage-address-btn').click()
    })

    it('Se connecter ',() => {
        cy.url().should('include', '/bordeaux/boutiques')
        cy.get('.hidden-sm > #sign-in-button').click()
        cy.wait(2500)
        cy.get('#user_email_sign_in').type('master.snoopy@hotmail.fr')
        cy.get('#user_password_sign_in').type('maVillemonShop33!')
        cy.get(':nth-child(7) > .btn').click()
        //cy.get('[href="/policies/user_terms/cookie/accept"]').click()
    })

    it('Mettre le premier produit proposer dans son panier', () => {
       cy.url().should('include', '/bordeaux/boutiques')
       cy.get('#header-shops > div > div > h2').should('contain', 'Bordeaux')
       cy.wait(3000)
       cy.get('.link-filter-search').click()
       cy.get('.hidden-sm > #sign-in-button').click()
       cy.wait(2500)
       cy.get('#user_email_sign_in').type('master.snoopy@hotmail.fr')
       cy.get('#user_password_sign_in').type('maVillemonShop33!')
       cy.get(':nth-child(7) > .btn').click()
       cy.get('[class="product-img lazyload no-lazyload"]').eq(0).click()
       cy.get('#add_to_cart').click()
    })
    //Il faut une double connexion pour pouvoir valider son panier

    it('Valider son panier',() => {
        cy.get('#cart-link > i').click()
        cy.get('#checkbox-be-on-age').check({ force: true }).should('be.checked')
        cy.get('#validate-cart').click()
    })

    it('Choix du mode de retrait',() => {
        cy.get('#cardCollapseClickCollect-15320').click()
        cy.get('#click-collect-firstname-15320').type('Rémy')
        cy.get('#click-collect-lastname-15320').type('Albinet')
        cy.get('#click-collect-phone-15320').type('0647166473')
        cy.get('#checkout-button').click({ force: true })
    })

})
