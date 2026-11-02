# Chancellor Automobile

Site responsive et PWA avec deux espaces commerciaux distincts.

- `index.html` : accueil avec la bannière officielle Chancellor.
- `vehicules.html` : recherche et demandes de véhicules. La bannière officielle est utilisée en visuel secondaire.
- `pieces.html` : catalogue de pièces et compatibilité véhicule. Le logo officiel avec pièces est affiché uniquement sur cette page.
- `assets/chancellor-logo-3d.png` : fichier original du logo étincelant, conservé intact.
- `assets/chancellor-logo-3d-transparent.png` : version sans fond blanc utilisée dans l'en-tête et le pied de page.
- `assets/chancellor-banner.png` : bannière officielle.
- `assets/chancellor-logo-original.png` : logo automobile avec pièces, réservé à la page pièces.

## Icônes PWA
La version transparente et les icônes `favicon-48.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` et `favicon.ico` sont générées depuis le logo étincelant officiel par `scripts/generate-pwa-icons.py`. Le workflow GitHub Actions les régénère à partir du PNG source si celui-ci est remplacé.

## Contact
Dans `app.js`, renseigner `WHATSAPP_NUMBER` au format international sans +, espaces ou tirets. Sinon le formulaire copie le message au lieu de l'envoyer.

Aucun stock, tarif ou véhicule non confirmé n'est publié.


## Expérience premium et catalogue de démonstration
- Thème sombre / clair mémorisé entre les pages.
- Polices Barlow Condensed, Manrope et Space Grotesk avec fallback système.
- Carrousels glassmorphism horizontaux utilisables au toucher.
- 5 familles de véhicules avec 3 fiches fictives par famille.
- 10 catégories de pièces avec 3 fiches fictives par catégorie.
- Noms, références, caractéristiques et prix fictifs : ils ne constituent ni stock ni offre réelle.
- Les trois visuels officiels du dépôt restent les seuls médias illustrés utilisés.
