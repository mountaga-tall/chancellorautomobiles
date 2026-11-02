# Chancellor Automobile

Site vitrine et catalogue de demandes pour la vente automobile, les pièces détachées, l'entretien et le conseil automobile.

## Fonctionnalités

- Présentation responsive avec les visuels de marque fournis.
- Référentiel de 58 marques et 380 modèles pour identifier un véhicule (marque, modèle, année).
- Recherche textuelle par famille de pièces.
- Formulaire de demande qui génère un message récapitulatif.
- PWA légère avec cache versionné et mise à jour automatique du cache.

## Paramétrage avant mise en production

Dans `app.js`, renseigner `WHATSAPP_NUMBER` avec le numéro WhatsApp officiel au format international, sans `+`, espaces ou tirets. Tant que ce paramètre est vide, le formulaire copie le message au lieu de l'envoyer.

Les annonces de véhicules, références de pièces, prix, coordonnées, adresse et horaires ne sont pas préremplis : ils devront être ajoutés à partir des données confirmées par l'entreprise. Le site ne prétend pas qu'un produit est en stock.

## Déploiement GitHub Pages

Le site est statique. Dans GitHub, activer Pages sur la branche `main`, dossier `/ (root)`. Le service worker et le manifeste sont servis automatiquement sur GitHub Pages en HTTPS.
