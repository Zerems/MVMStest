context('Retracer un parcours d achat',() => {

    before(() => {
        cy.visit("https://www.mavillemonshopping.fr/")
        cy.wait(2000)
    })


    it('Effectuer une recherche de boutiques à proximité',() => {
        cy.title().should('include','Ma Ville Mon Shopping')
        cy.get('[href="/policies/user_terms/cookie/accept"]').click()
        cy.wait(1500)
        cy.get('#address-input').type('109 rue Gustave Carde').should('have.class', 'form-control')
        cy.wait(1000)
        cy.get('#addresses-list > :nth-child(1)').click()
        cy.get('#homepage-address-btn').click()
    })


    it('Mettre le premier produit proposer dans son panier', () => {
       cy.url().should('include', '/bordeaux/boutiques')
       cy.get('#header-shops > div > div > h2').should('contain', 'Bordeaux')
       cy.get('[href="/policies/user_terms/cookie/accept"]').click()
       cy.wait(3000)
       cy.get('.link-filter-search').click()
       cy.get('[class="product-img lazyload no-lazyload"]').eq(0).click()
       cy.get('#add_to_cart').click()
    })

    it('Se connecter ',() => {
            cy.get('.hidden-sm > #sign-in-button').click()
            cy.wait(2500)
            cy.get('#user_email_sign_in').type('master.snoopy@hotmail.fr')
            cy.get('#user_password_sign_in').type('maVillemonShop33!')
            cy.get(':nth-child(7) > .btn').click()
        })
// Lors de la connexion après avoir mis en panier, une fois connecté, le panier disparait, les tests suivants tombent dpnc en échec
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
    })

})
