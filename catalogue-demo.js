'use strict';
const DEMO_VEHICLES={
"Citadine":[
{brand:"Toyota",model:"Yaris",year:"2021",km:"38 000 km",fuel:"Essence",gear:"Automatique",price:6900000,description:"Citadine polyvalente, pratique en ville et agréable sur les trajets quotidiens."},
{brand:"Hyundai",model:"i10",year:"2022",km:"29 000 km",fuel:"Essence",gear:"Manuelle",price:5800000,description:"Format compact, conduite facile et habitacle optimisé pour la mobilité urbaine."},
{brand:"Kia",model:"Picanto",year:"2021",km:"32 000 km",fuel:"Essence",gear:"Manuelle",price:5500000,description:"Petite citadine agile, pensée pour le stationnement et les déplacements quotidiens."}],
"Berline":[
{brand:"Toyota",model:"Corolla",year:"2020",km:"54 000 km",fuel:"Essence",gear:"Automatique",price:9800000,description:"Berline polyvalente offrant confort, sobriété et espace pour les déplacements réguliers."},
{brand:"Peugeot",model:"508",year:"2019",km:"61 000 km",fuel:"Diesel",gear:"Automatique",price:11200000,description:"Silhouette élégante, présentation soignée et agrément de conduite sur route."},
{brand:"Hyundai",model:"Elantra",year:"2021",km:"43 000 km",fuel:"Essence",gear:"Automatique",price:8900000,description:"Berline moderne avec un bon équilibre entre confort, espace et équipements."}],
"SUV / Crossover":[
{brand:"Hyundai",model:"Tucson",year:"2021",km:"48 000 km",fuel:"Diesel",gear:"Automatique",price:14500000,description:"SUV familial au style affirmé, avec une position de conduite surélevée."},
{brand:"Toyota",model:"RAV4",year:"2020",km:"57 000 km",fuel:"Essence",gear:"Automatique",price:16900000,description:"SUV polyvalent, espace généreux et conception adaptée aux longs trajets."},
{brand:"Kia",model:"Sportage",year:"2022",km:"35 000 km",fuel:"Essence",gear:"Automatique",price:15800000,description:"Crossover familial moderne, avec un habitacle accueillant et modulable."}],
"4×4 / Tout-terrain":[
{brand:"Toyota",model:"Land Cruiser Prado",year:"2018",km:"82 000 km",fuel:"Diesel",gear:"Automatique",price:28500000,description:"4×4 robuste conçu pour associer confort routier et capacités tout-terrain."},
{brand:"Mitsubishi",model:"Pajero Sport",year:"2020",km:"66 000 km",fuel:"Diesel",gear:"Automatique",price:22600000,description:"Tout-terrain polyvalent, adapté aux déplacements familiaux et aux routes variées."},
{brand:"Nissan",model:"Patrol",year:"2017",km:"94 000 km",fuel:"Essence",gear:"Automatique",price:31900000,description:"Grand 4×4 à la présence marquée, privilégiant espace, puissance et confort."}],
"Utilitaire":[
{brand:"Toyota",model:"Hilux",year:"2021",km:"46 000 km",fuel:"Diesel",gear:"Manuelle",price:17900000,description:"Pick-up polyvalent destiné aux activités professionnelles et aux usages exigeants."},
{brand:"Renault",model:"Trafic",year:"2020",km:"68 000 km",fuel:"Diesel",gear:"Manuelle",price:13200000,description:"Fourgon pratique avec un volume de chargement adapté aux besoins professionnels."},
{brand:"Peugeot",model:"Partner",year:"2022",km:"31 000 km",fuel:"Diesel",gear:"Manuelle",price:10900000,description:"Utilitaire compact, maniable en ville et fonctionnel pour les livraisons."}]};
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
function demoNode(parent,tag,cls,text){var el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;parent.appendChild(el);return el;}
function demoMoney(value){return new Intl.NumberFormat('fr-FR').format(value)+' FCFA';}
function demoCard(type,family,item,index){
 var card=document.createElement('article');card.className='catalog-card';
 var top=demoNode(card,'div','catalog-card-top');demoNode(top,'span','fake-tag','EXEMPLE FICTIF');demoNode(top,'span','card-family',family);
 if(type==='vehicle'){
  demoNode(card,'div','catalog-card-brand',item.brand+' · '+item.year);demoNode(card,'h3','',item.model);demoNode(card,'p','catalog-card-description',item.description);
  var specs=demoNode(card,'div','catalog-specs');demoNode(specs,'span','',item.km);demoNode(specs,'span','',item.fuel);demoNode(specs,'span','',item.gear);
 }else{
  top.lastChild.textContent='REF. '+item.ref;demoNode(card,'div','catalog-card-brand','CHANCELLOR · DÉMONSTRATION');demoNode(card,'h3','',item.name);demoNode(card,'p','catalog-card-description',item.detail);
  var partSpecs=demoNode(card,'div','catalog-specs');demoNode(partSpecs,'span','','Compatibilité à vérifier');demoNode(partSpecs,'span','','Référence fictive');
 }
 var price=demoNode(card,'div','catalog-price-row');var priceText=demoNode(price,'div','');
 demoNode(priceText,'small','','Prix de démonstration');demoNode(priceText,'strong','',demoMoney(item.price));demoNode(priceText,'em','','Tarif inventé pour la maquette');
 var action=demoNode(card,'button','catalog-card-action',type==='vehicle'?'Demander ce modèle':'Ajouter à ma demande');action.type='button';demoNode(action,'span','','↗');
 action.addEventListener('click',function(){if(type==='vehicle')window.chooseVehicleDemo(family,index);else window.choosePartDemo(family,index);});
 return card;
}
function renderVehicleDemo(family){
 var track=document.getElementById('vehicle-track'),heading=document.getElementById('vehicle-family-title'),items=DEMO_VEHICLES[family];if(!track||!items)return;
 heading.textContent=family+' · 3 exemples';track.replaceChildren();items.forEach(function(item,index){track.appendChild(demoCard('vehicle',family,item,index));});
 var view=document.getElementById('vehicle-viewport');if(view)view.scrollLeft=0;
}
function renderPartDemo(family){
 var track=document.getElementById('parts-track'),heading=document.getElementById('parts-family-title'),items=DEMO_PARTS[family];if(!track||!items)return;
 heading.textContent=family+' · 3 exemples';track.replaceChildren();items.forEach(function(item,index){track.appendChild(demoCard('part',family,item,index));});
 var view=document.getElementById('parts-viewport');if(view)view.scrollLeft=0;
}
window.chooseVehicleDemo=function(family,index){
 var item=DEMO_VEHICLES[family]&&DEMO_VEHICLES[family][index];if(!item)return;
 var type=document.getElementById('vehicle-type');if(type)type.value=family;
 var make=document.getElementById('vehicle-make'),model=document.getElementById('vehicle-model'),year=document.getElementById('vehicle-year');
 if(make&&model&&year){make.value=item.brand;make.dispatchEvent(new Event('change',{bubbles:true}));model.value=item.model;model.dispatchEvent(new Event('change',{bubbles:true}));year.value=item.year;}
 var details=document.querySelector('#vehicle-request-form [name="details"]');if(details)details.value='Exemple fictif choisi : '+item.brand+' '+item.model+'. À remplacer par une recherche réelle.';
 var budget=document.querySelector('#vehicle-request-form [name="budget"]');if(budget)budget.value='Budget indicatif à confirmer';
 document.getElementById('demande-vehicule')?.scrollIntoView({behavior:'smooth',block:'start'});
 var toast=document.getElementById('site-toast');if(toast){toast.textContent='Exemple fictif sélectionné. Confirmez les critères avant envoi.';toast.classList.add('is-visible');}
};
window.choosePartDemo=function(family,index){
 var item=DEMO_PARTS[family]&&DEMO_PARTS[family][index];if(!item)return;
 var name=document.getElementById('part-name');if(name)name.value=item.name+' — '+item.ref+' (exemple fictif)';
 var details=document.querySelector('#parts-request-form [name="details"]');if(details)details.value='Catégorie : '+family+'. Exemple fictif : '+item.detail+' Tarif fictif : '+demoMoney(item.price)+'. Merci d’identifier la référence réelle compatible.';
 document.getElementById('demande-piece')?.scrollIntoView({behavior:'smooth',block:'start'});
 window.setTimeout(function(){if(name)name.focus({preventScroll:true});},450);
 var toast=document.getElementById('site-toast');if(toast){toast.textContent='Exemple fictif ajouté à votre demande.';toast.classList.add('is-visible');}
};
window.initDemoVehicleCatalogue=function(){
 var buttons=Array.from(document.querySelectorAll('.vehicle-type'));
 function activate(family){buttons.forEach(function(button){var active=button.dataset.type===family;button.classList.toggle('is-selected',active);button.setAttribute('aria-pressed',String(active));});renderVehicleDemo(family);}
 buttons.forEach(function(button){button.addEventListener('click',function(){var family=button.dataset.type;var type=document.getElementById('vehicle-type');if(type)type.value=family;activate(family);document.getElementById('catalogue-vehicules')?.scrollIntoView({behavior:'smooth',block:'start'});});});
 var first=Object.keys(DEMO_VEHICLES)[0];if(first)activate(first);
};
window.initDemoPartsCatalogue=function(){
 var cards=Array.from(document.querySelectorAll('.part-category')),search=document.getElementById('parts-search'),empty=document.getElementById('parts-empty');
 function activate(family){cards.forEach(function(card){var button=card.querySelector('.part-select'),active=button&&button.dataset.part===family;card.classList.toggle('is-selected',Boolean(active));if(button)button.setAttribute('aria-pressed',String(Boolean(active)));});renderPartDemo(family);}
 cards.forEach(function(card){var button=card.querySelector('.part-select');if(button)button.addEventListener('click',function(){activate(button.dataset.part);document.getElementById('pieces-demonstration')?.scrollIntoView({behavior:'smooth',block:'start'});});});
 if(search)search.addEventListener('input',function(){var query=search.value.trim().toLocaleLowerCase('fr'),shown=0;cards.forEach(function(card){var match=!query||(card.dataset.search+' '+card.textContent).toLocaleLowerCase('fr').includes(query);card.hidden=!match;if(match)shown++;});if(empty)empty.hidden=shown>0;var visible=cards.find(function(card){return !card.hidden;});var button=visible&&visible.querySelector('.part-select');if(button)activate(button.dataset.part);});
 var first=Object.keys(DEMO_PARTS)[0];if(first)activate(first);
};
