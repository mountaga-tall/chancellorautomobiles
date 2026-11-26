'use strict';
const VEHICLE_STOCK = {"SUV / Crossover":[{"brand":"HYUNDAI","model":"TUCSON","year":"2020","mileage":"37 761 km","fuel":"Essence 2.0","transmission":"Boîte automatique","descriptionFr":"SUV essence 2.0 L avec caméra 360°, aides au stationnement et sièges électriques.","descriptionEn":"2.0 L petrol SUV with 360° camera, parking sensors and power seats.","priceXof":6700000,"priceUsd":11260,"featuresFr":["Démarrage Start","Jantes alu","Caméra 360°","Parking sensor","Sièges électriques"],"featuresEn":["Push-button start","Alloy wheels","360° camera","Parking sensors","Power seats"],"photos":["assets/tucson 2020/whatsapp image 2026-11-10 at 23.48.12.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.34.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.35 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.35.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.36.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.37 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.37.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.38.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.39 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.39.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.40 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.40.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.41.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.42 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.42.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.43.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.44.webp"]},{"brand":"HYUNDAI","model":"TUCSON","year":"2025","mileage":"0 km","fuel":"Essence 2.5","transmission":"Boîte automatique","descriptionFr":"Tucson 2025 avec toit panoramique, sièges chauffants et volant chauffant.","descriptionEn":"2025 Tucson with panoramic roof, heated seats and heated steering wheel.","priceXof":13000000,"priceUsd":21850,"featuresFr":["Démarrage Start","Jantes alu","Caméra 360°","Parking sensor","Sièges électriques","Sièges chauffants","Volant chauffant","Direction assistée","Toit panoramique"],"featuresEn":["Push-button start","Alloy wheels","360° camera","Parking sensors","Power seats","Heated seats","Heated steering wheel","Power steering","Panoramic roof"],"photos":["assets/tucson2025/whatsapp image 2026-11-10 at 23.59.16.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.17.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.18 (1).webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.18.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.19.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.20 (1).webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.20.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.21.webp"]}],"4×4 / Tout-terrain":[{"brand":"MERCEDES-BENZ","model":"G 63 AMG","year":"2020","mileage":"48 000 km","fuel":"Essence V8","transmission":"Boîte automatique","descriptionFr":"G 63 AMG V8 avec carrosserie noire et intérieur noir. Prix communiqué sur demande via WhatsApp.","descriptionEn":"G 63 AMG V8 with black exterior and black interior. Price available on request via WhatsApp.","priceXof":null,"priceUsd":null,"featuresFr":["Démarrage Start","Jantes alu","Caméra 360°","Parking sensor","Sièges électriques","Sièges chauffants","Volant chauffant","Direction assistée","Toit ouvrant","Carrosserie noire","Intérieur noir"],"featuresEn":["Push-button start","Alloy wheels","360° camera","Parking sensors","Power seats","Heated seats","Heated steering wheel","Power steering","Sunroof","Black exterior","Black interior"],"photos":["assets/g63 amg/whatsapp image 2026-11-11 at 00.05.13.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.14.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.15 (1).webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.15.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.16.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.17 (1).webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.17.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.18 (1).webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.18.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.19.webp"]}]};
const DEMO_PARTS={
"Moteur & filtration":[
{name:"Filtre à huile",detail:"Filtration du circuit d'huile moteur, à sélectionner selon la motorisation.",ref:"DEMO-MOT-01",price:6500},
{name:"Filtre à air moteur",detail:"Élément filtrant pour l'admission d'air, format à confirmer par véhicule.",ref:"DEMO-MOT-02",price:8500},
{name:"Kit de distribution",detail:"Kit courroie et galets, référence exacte selon code moteur.",ref:"DEMO-MOT-03",price:75000}],
"Freinage":[
{name:"Plaquettes de frein avant",detail:"Jeu de plaquettes pour essieu avant, forme et dimensions à vérifier.",ref:"DEMO-FRE-01",price:24000},
{name:"Disques de frein avant",detail:"Paire de disques ventilés, diamètre à confirmer avant commande.",ref:"DEMO-FRE-02",price:68000},
{name:"Kit frein arrière",detail:"Ensemble indicatif pour freinage arrière, configuration selon modèle.",ref:"DEMO-FRE-03",price:45000}],
"Suspension & direction":[
{name:"Amortisseur avant",detail:"Amortisseur à l'unité, version et montage à confirmer par châssis.",ref:"DEMO-SUS-01",price:45000},
{name:"Rotule de direction",detail:"Articulation de direction, côté et filetage à vérifier.",ref:"DEMO-SUS-02",price:12000},
{name:"Triangle de suspension",detail:"Bras de suspension, géométrie et côté à confirmer.",ref:"DEMO-SUS-03",price:38000}],
"Électricité & batterie":[
{name:"Batterie 12 V · 65 Ah",detail:"Batterie de démarrage, dimensions, polarité et capacité à valider.",ref:"DEMO-ELE-01",price:85000},
{name:"Alternateur",detail:"Alternateur de charge, ampérage et connectique selon véhicule.",ref:"DEMO-ELE-02",price:125000},
{name:"Démarreur",detail:"Moteur de démarrage, puissance et fixation à confirmer.",ref:"DEMO-ELE-03",price:95000}],
"Embrayage & transmission":[
{name:"Kit d'embrayage",detail:"Mécanisme, disque et butée selon la boîte et la motorisation.",ref:"DEMO-TRA-01",price:150000},
{name:"Cardan de transmission",detail:"Transmission complète, côté et longueur à identifier.",ref:"DEMO-TRA-02",price:75000},
{name:"Support de boîte",detail:"Support antivibratoire, forme et position à contrôler.",ref:"DEMO-TRA-03",price:18000}],
"Carrosserie & éclairage":[
{name:"Phare avant",detail:"Bloc optique, côté, finition et technologie à confirmer.",ref:"DEMO-CAR-01",price:75000},
{name:"Rétroviseur extérieur",detail:"Rétroviseur complet, côté et options électriques à préciser.",ref:"DEMO-CAR-02",price:35000},
{name:"Pare-chocs avant",detail:"Élément de carrosserie, version et points de fixation à vérifier.",ref:"DEMO-CAR-03",price:90000}],
"Accessoires & multimédia":[
{name:"Autoradio Bluetooth",detail:"Unité multimédia, format et faisceau à confirmer selon tableau de bord.",ref:"DEMO-ACC-01",price:35000},
{name:"Caméra de recul",detail:"Caméra de stationnement, angle et affichage selon installation.",ref:"DEMO-ACC-02",price:28000},
{name:"Caméra embarquée",detail:"Enregistreur de conduite, alimentation et stockage à préciser.",ref:"DEMO-ACC-03",price:55000}],
"Pneus & roues":[
{name:"Pneu 205/55 R16",detail:"Pneumatique de démonstration, indice de charge et vitesse à valider.",ref:"DEMO-ROU-01",price:45000},
{name:"Jante aluminium 16 pouces",detail:"Jante, entraxe, déport et alésage à vérifier avant montage.",ref:"DEMO-ROU-02",price:75000},
{name:"Capteur de pression TPMS",detail:"Capteur de pression, fréquence et protocole selon véhicule.",ref:"DEMO-ROU-03",price:18000}],
"Habitacle & intérieur":[
{name:"Jeu de tapis de sol",detail:"Tapis d'habitacle, découpe et points d'ancrage selon modèle.",ref:"DEMO-HAB-01",price:20000},
{name:"Lève-vitre électrique",detail:"Mécanisme de lève-vitre, porte et côté à identifier.",ref:"DEMO-HAB-02",price:35000},
{name:"Commande de vitre",detail:"Interrupteur de commande, nombre de boutons et connecteur à vérifier.",ref:"DEMO-HAB-03",price:15000}],
"Échappement & capteurs":[
{name:"Sonde lambda",detail:"Sonde de contrôle des gaz, connectique et longueur à valider.",ref:"DEMO-ECH-01",price:45000},
{name:"Silencieux arrière",detail:"Silencieux d'échappement, diamètre et version selon motorisation.",ref:"DEMO-ECH-02",price:85000},
{name:"Catalyseur",detail:"Élément de dépollution, norme et référence constructeur à confirmer.",ref:"DEMO-ECH-03",price:180000}]};

const DEMO_PARTS_EN = {"DEMO-MOT-01":["Oil filter","Filters the engine oil circuit; choose the correct specification for the engine."],"DEMO-MOT-02":["Engine air filter","Air intake filter element; exact fitment must be checked for the vehicle."],"DEMO-MOT-03":["Timing belt kit","Belt and pulley kit; the exact reference depends on the engine code."],"DEMO-FRE-01":["Front brake pads","Front axle brake pad set; shape and dimensions must be checked."],"DEMO-FRE-02":["Front brake discs","Pair of ventilated discs; confirm the diameter before ordering."],"DEMO-FRE-03":["Rear brake kit","Indicative rear braking kit; configuration depends on the vehicle."],"DEMO-SUS-01":["Front shock absorber","Single shock absorber; version and mounting must be confirmed by vehicle."],"DEMO-SUS-02":["Steering ball joint","Steering joint; side and thread must be checked."],"DEMO-SUS-03":["Suspension control arm","Control arm; geometry and side must be confirmed."],"DEMO-ELE-01":["12 V · 65 Ah battery","Starter battery; dimensions, polarity and capacity must be verified."],"DEMO-ELE-02":["Alternator","Charging alternator; output rating and connector depend on the vehicle."],"DEMO-ELE-03":["Starter motor","Starter motor; power rating and mounting must be confirmed."],"DEMO-TRA-01":["Clutch kit","Clutch cover, friction disc and release bearing; fitment depends on gearbox and engine."],"DEMO-TRA-02":["Drive shaft","Complete drive shaft; side and length must be identified."],"DEMO-TRA-03":["Gearbox mount","Anti-vibration mount; shape and position must be checked."],"DEMO-CAR-01":["Headlamp","Headlamp assembly; side, trim and lighting technology must be confirmed."],"DEMO-CAR-02":["Exterior mirror","Complete wing mirror; side and electrical options must be specified."],"DEMO-CAR-03":["Front bumper","Body panel; version and mounting points must be checked."],"DEMO-ACC-01":["Bluetooth car stereo","Multimedia head unit; size and wiring harness must be confirmed for the dashboard."],"DEMO-ACC-02":["Reversing camera","Parking camera; viewing angle and display depend on the installation."],"DEMO-ACC-03":["Dash camera","Driving recorder; power supply and storage requirements must be specified."],"DEMO-ROU-01":["205/55 R16 tyre","Illustrative tyre size; load and speed ratings must be verified."],"DEMO-ROU-02":["16-inch alloy wheel","Wheel fitment; bolt pattern, offset and centre bore must be checked."],"DEMO-ROU-03":["TPMS pressure sensor","Tyre pressure sensor; frequency and protocol depend on the vehicle."],"DEMO-HAB-01":["Floor mat set","Cabin floor mats; shape and fixing points depend on the model."],"DEMO-HAB-02":["Electric window regulator","Window regulator mechanism; door and side must be identified."],"DEMO-HAB-03":["Window switch","Window control switch; button layout and connector must be checked."],"DEMO-ECH-01":["Oxygen sensor","Exhaust gas sensor; connector and cable length must be verified."],"DEMO-ECH-02":["Rear muffler","Rear silencer; diameter and version depend on the engine."],"DEMO-ECH-03":["Catalytic converter","Emissions component; standard and manufacturer reference must be confirmed."]};
const DEMO_PART_FAMILIES_EN = {"Moteur & filtration":"Engine & filters","Freinage":"Braking","Suspension & direction":"Suspension & steering","Électricité & batterie":"Electrical & battery","Embrayage & transmission":"Clutch & transmission","Carrosserie & éclairage":"Bodywork & lighting","Accessoires & multimédia":"Accessories & multimedia","Pneus & roues":"Tyres & wheels","Habitacle & intérieur":"Cabin & interior","Échappement & capteurs":"Exhaust & sensors"};

function displayPartItem(item) {
  if (!vehicleIsEnglish()) return item;
  var translated = DEMO_PARTS_EN[item.ref];
  return translated ? Object.assign({}, item, {name: translated[0], detail: translated[1]}) : item;
}

function demoNode(parent, tag, cls, text) {
  var element = document.createElement(tag);
  if (cls) element.className = cls;
  if (text !== undefined) element.textContent = text;
  parent.appendChild(element);
  return element;
}

function demoMoney(value) {
  var english = vehicleIsEnglish();
  return new Intl.NumberFormat(english ? 'en-US' : 'fr-FR').format(value) + (english ? ' XOF' : ' FCFA');
}

function vehicleIsEnglish() {
  return window.location.pathname.indexOf('/en/') !== -1;
}

function vehicleAsset(path) {
  return (vehicleIsEnglish() ? '../' : '') + path;
}

function vehicleWhatsApp(item) {
  var english = vehicleIsEnglish();
  var message = english
    ? 'Hello Chancellor Automobile, I am interested in the ' + item.brand + ' ' + item.model + ' (' + item.year + '), located in the United Arab Emirates. Please confirm availability, your best price and shipping conditions.'
    : 'Bonjour Chancellor Automobile, je suis intéressé(e) par le/la ' + item.brand + ' ' + item.model + ' (' + item.year + '), situé(e) aux Émirats arabes unis. Merci de confirmer la disponibilité, votre meilleur prix et les conditions de transport.';
  window.open('https://wa.me/2250757608293?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
}

function createVehicleCard(item, compact) {
  var english = vehicleIsEnglish();
  var card = document.createElement('article');
  card.className = 'catalog-card vehicle-sale-card';

  var top = demoNode(card, 'div', 'catalog-card-top');
  demoNode(top, 'span', 'fake-tag', english ? 'AVAILABLE' : 'DISPONIBLE');
  demoNode(top, 'span', 'card-family', item.brand);

  var gallery = demoNode(card, 'div', 'vehicle-gallery');
  var main = document.createElement('img');
  main.className = 'vehicle-photo-main';
  main.src = vehicleAsset(item.photos[0]);
  main.alt = item.brand + ' ' + item.model + ' ' + item.year;
  main.loading = 'lazy';
  main.decoding = 'async';
  gallery.appendChild(main);

  var strip = demoNode(gallery, 'div', 'vehicle-photo-strip');
  (compact ? item.photos.slice(0, 4) : item.photos).forEach(function(path, index) {
    var thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'vehicle-photo-thumb';
    thumb.setAttribute('aria-label', (english ? 'View photo ' : 'Voir la photo ') + (index + 1));
    thumb.setAttribute('aria-pressed', String(index === 0));

    var image = document.createElement('img');
    image.src = vehicleAsset(path);
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    thumb.appendChild(image);

    thumb.addEventListener('click', function() {
      main.src = vehicleAsset(path);
      main.alt = item.brand + ' ' + item.model + ' ' + item.year + ' — photo ' + (index + 1);
      strip.querySelectorAll('.vehicle-photo-thumb').forEach(function(button) {
        button.setAttribute('aria-pressed', 'false');
      });
      thumb.setAttribute('aria-pressed', 'true');
    });
    strip.appendChild(thumb);
  });

  demoNode(card, 'div', 'catalog-card-brand', item.brand + ' · ' + item.year);
  demoNode(card, 'h3', '', item.model);
  demoNode(card, 'p', 'catalog-card-description', english ? item.descriptionEn : item.descriptionFr);

  var fuel = item.fuel;
  var transmission = item.transmission;
  if (english) {
    fuel = fuel.replace(/^Essence/, 'Petrol');
    transmission = transmission.replace(/^Boîte automatique$/, 'Automatic transmission');
  }
  var specs = demoNode(card, 'div', 'catalog-specs');
  [
    item.mileage,
    fuel,
    transmission,
    english ? 'United Arab Emirates' : 'Émirats arabes unis',
    english ? 'Shipping excluded' : 'Transport non inclus'
  ].forEach(function(value) {
    demoNode(specs, 'span', '', value);
  });

  var features = demoNode(card, 'div', 'catalog-specs vehicle-features');
  (english ? item.featuresEn : item.featuresFr).forEach(function(value) {
    demoNode(features, 'span', '', value);
  });

  var price = demoNode(card, 'div', 'catalog-price-row');
  var priceText = demoNode(price, 'div', '');
  if (item.priceXof) {
    demoNode(priceText, 'small', '', english ? 'Indicative price · shipping excluded' : 'Prix indicatif · hors transport');
    demoNode(priceText, 'strong', '', new Intl.NumberFormat(english ? 'en-US' : 'fr-FR').format(item.priceXof) + ' XOF');
    demoNode(priceText, 'em', '', (english ? 'Approx. ' : '≈ ') + new Intl.NumberFormat('en-US').format(item.priceUsd) + ' USD');
  } else {
    demoNode(priceText, 'small', '', english ? 'Price' : 'Prix');
    demoNode(priceText, 'strong', '', english ? 'On request' : 'Sur demande');
    demoNode(priceText, 'em', '', english ? 'Ask for a quote on WhatsApp' : 'Demandez le tarif sur WhatsApp');
  }

  var actionLabel = item.priceXof
    ? (english ? 'Contact us on WhatsApp' : 'Contacter sur WhatsApp')
    : (english ? 'Request G 63 price on WhatsApp' : 'Demander le prix du G 63 sur WhatsApp');
  var action = demoNode(card, 'button', 'catalog-card-action', actionLabel);
  action.type = 'button';
  demoNode(action, 'span', '', '↗');
  action.addEventListener('click', function() { vehicleWhatsApp(item); });

  return card;
}

function renderVehicleDemo(family) {
  var track = document.getElementById('vehicle-track');
  var heading = document.getElementById('vehicle-family-title');
  var items = VEHICLE_STOCK[family];
  if (!track || !heading || !items) return;

  var english = vehicleIsEnglish();
  var label = family === 'SUV / Crossover'
    ? 'SUV / Crossover'
    : (english ? '4×4 / Off-road' : '4×4 / Tout-terrain');
  heading.textContent = label + ' · ' + items.length + ' ' +
    (english ? (items.length === 1 ? 'vehicle' : 'vehicles') : (items.length === 1 ? 'véhicule' : 'véhicules'));

  track.replaceChildren();
  items.forEach(function(item) {
    track.appendChild(createVehicleCard(item));
  });
  var viewport = document.getElementById('vehicle-viewport');
  if (viewport) viewport.scrollLeft = 0;
}

function renderHomeFeaturedVehicles() {
  var grid = document.getElementById('home-featured-vehicle-grid');
  if (!grid) return;
  var items = Object.keys(VEHICLE_STOCK).reduce(function(all, family) {
    return all.concat(VEHICLE_STOCK[family]);
  }, []);
  grid.replaceChildren();
  items.forEach(function(item) {
    grid.appendChild(createVehicleCard(item, true));
  });
  var count = document.getElementById('home-vehicle-count');
  if (count) count.textContent = items.length + ' ' + (vehicleIsEnglish() ? 'VEHICLES' : 'VÉHICULES');
}

function demoCard(type, family, item, index) {
  var english = vehicleIsEnglish();
  var displayItem = displayPartItem(item);
  var card = document.createElement('article');
  card.className = 'catalog-card';
  var top = demoNode(card, 'div', 'catalog-card-top');
  demoNode(top, 'span', 'fake-tag', english ? 'FICTIONAL DEMO' : 'EXEMPLE FICTIF');
  demoNode(top, 'span', 'card-family', english ? (DEMO_PART_FAMILIES_EN[family] || family) : family);
  demoNode(card, 'div', 'catalog-card-brand', english ? 'CHANCELLOR · DEMO' : 'CHANCELLOR · DÉMONSTRATION');
  demoNode(card, 'h3', '', displayItem.name);
  demoNode(card, 'p', 'catalog-card-description', displayItem.detail);

  var specs = demoNode(card, 'div', 'catalog-specs');
  demoNode(specs, 'span', '', english ? 'Fitment to be confirmed' : 'Compatibilité à vérifier');
  demoNode(specs, 'span', '', english ? 'Illustrative reference' : 'Référence fictive');

  var price = demoNode(card, 'div', 'catalog-price-row');
  var priceText = demoNode(price, 'div', '');
  demoNode(priceText, 'small', '', english ? 'Demonstration price' : 'Prix de démonstration');
  demoNode(priceText, 'strong', '', demoMoney(item.price));
  demoNode(priceText, 'em', '', english ? 'Fictional reference price' : 'Tarif inventé pour la maquette');

  var action = demoNode(card, 'button', 'catalog-card-action', english ? 'Add to my enquiry' : 'Ajouter à ma demande');
  action.type = 'button';
  demoNode(action, 'span', '', '↗');
  action.addEventListener('click', function() { window.choosePartDemo(family, index); });
  return card;
}

function renderPartDemo(family) {
  var track = document.getElementById('parts-track');
  var heading = document.getElementById('parts-family-title');
  var items = DEMO_PARTS[family];
  if (!track || !heading || !items) return;
  var english = vehicleIsEnglish();
  var familyLabel = english ? (DEMO_PART_FAMILIES_EN[family] || family) : family;
  heading.textContent = familyLabel + (english ? ' · 3 examples' : ' · 3 exemples');
  track.replaceChildren();
  items.forEach(function(item, index) {
    track.appendChild(demoCard('part', family, item, index));
  });
  var viewport = document.getElementById('parts-viewport');
  if (viewport) viewport.scrollLeft = 0;
}

window.chooseVehicleDemo = function(family, index) {
  var item = VEHICLE_STOCK[family] && VEHICLE_STOCK[family][index];
  if (item) vehicleWhatsApp(item);
};

window.choosePartDemo = function(family, index) {
  var item = DEMO_PARTS[family] && DEMO_PARTS[family][index];
  if (!item) return;
  var english = vehicleIsEnglish();
  var displayItem = displayPartItem(item);
  var familyLabel = english ? (DEMO_PART_FAMILIES_EN[family] || family) : family;
  var name = document.getElementById('part-name');
  if (name) name.value = displayItem.name + ' — ' + item.ref + (english ? ' (fictional example)' : ' (exemple fictif)');
  var details = document.querySelector('#parts-request-form [name="details"]');
  if (details) {
    details.value = (english ? 'Category: ' : 'Catégorie : ') + familyLabel + '. ' +
      (english ? 'Illustrative example: ' : 'Exemple fictif : ') + displayItem.detail +
      (english ? ' Fictional price: ' : ' Tarif fictif : ') + demoMoney(item.price) +
      (english ? '. Please confirm the correct compatible reference.' : '. Merci d’identifier la référence réelle compatible.');
  }
  document.getElementById('demande-piece')?.scrollIntoView({behavior:'smooth', block:'start'});
  window.setTimeout(function() {
    if (name) name.focus({preventScroll:true});
  }, 450);
  var toast = document.getElementById('site-toast');
  if (toast) {
    toast.textContent = english ? 'Fictional example added to your enquiry.' : 'Exemple fictif ajouté à votre demande.';
    toast.classList.add('is-visible');
    window.setTimeout(function(){ toast.classList.remove('is-visible'); },4500);
  }
};

window.initDemoVehicleCatalogue = function() {
  var buttons = Array.from(document.querySelectorAll('.vehicle-type'));
  if (!buttons.length) return;

  function activate(family) {
    buttons.forEach(function(button) {
      var active = button.dataset.type === family;
      button.classList.toggle('is-selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderVehicleDemo(family);
    var type = document.getElementById('vehicle-type');
    if (type) type.value = family;
  }

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var family = button.dataset.type;
      if (VEHICLE_STOCK[family]) activate(family);
      document.getElementById('catalogue-vehicules')?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  var first = buttons.find(function(button) { return VEHICLE_STOCK[button.dataset.type]; });
  if (first) activate(first.dataset.type);
};

window.initDemoPartsCatalogue = function() {
  var cards = Array.from(document.querySelectorAll('.part-category'));
  var search = document.getElementById('parts-search');
  var empty = document.getElementById('parts-empty');

  function activate(family) {
    cards.forEach(function(card) {
      var button = card.querySelector('.part-select');
      var active = button && button.dataset.part === family;
      card.classList.toggle('is-selected', Boolean(active));
      if (button) button.setAttribute('aria-pressed', String(Boolean(active)));
    });
    renderPartDemo(family);
  }

  cards.forEach(function(card) {
    var button = card.querySelector('.part-select');
    if (button) {
      button.addEventListener('click', function() {
        activate(button.dataset.part);
        document.getElementById('pieces-demonstration')?.scrollIntoView({behavior:'smooth', block:'start'});
      });
    }
  });

  if (search) {
    search.addEventListener('input', function() {
      var locale = vehicleIsEnglish() ? 'en' : 'fr';
      var query = search.value.trim().toLocaleLowerCase(locale);
      var shown = 0;
      cards.forEach(function(card) {
        var match = !query || (card.dataset.search + ' ' + card.textContent).toLocaleLowerCase(locale).includes(query);
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
      var visible = cards.find(function(card) { return !card.hidden; });
      var button = visible && visible.querySelector('.part-select');
      if (button) activate(button.dataset.part);
    });
  }

  var first = Object.keys(DEMO_PARTS)[0];
  if (first) activate(first);
};

/* Homepage featured inventory */
if (document.getElementById("home-featured-vehicle-grid")) renderHomeFeaturedVehicles();
