# Chancellor Automobile

Site vitrine et catalogue de demandes pour la vente de véhicules et les pièces détachées automobiles.

## Pages distinctes

- `index.html` : accueil et orientation vers les deux espaces commerciaux.
- `vehicules.html` : vente automobile, catégories de véhicules, sélection marque/modèle/année et formulaire de recherche.
- `pieces.html` : catalogue de familles de pièces, moteur de recherche, outil de compatibilité véhicule et formulaire de demande.
- `styles.css` et `app.js` : ressources communes responsive et interactions.
- `manifest.webmanifest`, `sw.js` et `assets/favicon-192.png` / `assets/favicon-512.png` : PWA installable et cache hors connexion et illustrations vectorielles haute définition.

## Fonctionnalités

- 58 marques et 380 modèles référencés dans les sélecteurs de véhicule.
- Formulaires séparés pour les demandes de véhicules et de pièces.
- Sélecteurs de compatibilité synchronisés sur la page pièces.
- Recherche instantanée par catégorie de pièces.
- Service worker avec cache versionné et suppression des anciennes versions.
- Illustrations SVG vectorielles nettes à toutes les résolutions et sources PNG originales haute définition conservées.
- Animations d'apparition progressives et effets de profondeur, désactivés pour les préférences de mouvement réduit.
- Mise en page adaptée aux mobiles, tablettes et ordinateurs.

## Paramétrage commercial

Dans `app.js`, renseigner `WHATSAPP_NUMBER` avec le numéro WhatsApp officiel au format international, sans `+`, espaces ni tirets. Tant que cette valeur est vide, le formulaire prépare et copie le message au lieu de l'envoyer sur WhatsApp.

Les annonces, stocks, références exactes, prix, coordonnées et horaires ne sont pas inventés. Ils doivent être publiés à partir des données confirmées par l'entreprise.

## GitHub Pages

Activer GitHub Pages sur la branche `main`, dossier `/ (root)`. Le site est statique et fonctionne avec les chemins relatifs adaptés à un dépôt GitHub Pages.
