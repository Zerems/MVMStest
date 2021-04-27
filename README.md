# Ma Ville Mon Shopping tests
- Fonctionnalité :  effectuer un achat sur le site

  - Scenario : Effectuer une recherche de boutique à proximité
      Etant donné que je suis un visiteur du site, et que je suis sur la page d'accueil
      Lorsque je rentre mon adresse et que je clique sur 'Rechercher'
      Alors je suis redirigé sur la page des boutiques/produits à proximités
      
  - Scenario : Mettre un produit dans son panier
      Etant donné que je suis sur la page d'un produit qui m'intérrèsse
      Lorsque je clique sur 'ajouter au panier'
      Alors l'icone représentant mon panier affiche le nombre de produit que je viens d'ajouter
      
  - Scenario : Valider son panier
      Etant donnée que je suis sur la page de mon panier 
      Lorsque je coche sur 'je certifie être majeur'
      ALors le bouton 'Valider mon panier' se dégrise.
      
      
  - Scenario : vouloir se connecter pour valider son panier
      Etant donné que j'ai coché 'je certifie etre majeur'
      Lorsque je clique sur 'Valider mon panier'
      Alors une fenetre de connexion apparait
      
  - Scenario : Entrer ses identifiants de connexion
      Etant donné que je suis sur la fenêtre de connexion
      Lorsque je rentre mes identifiants de connexions
      Alors une pop-up 'connecté' apparait
    
