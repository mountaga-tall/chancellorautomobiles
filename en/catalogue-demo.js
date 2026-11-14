'use strict';
const VEHICLE_STOCK = {"SUV / Crossover":[{"brand":"HYUNDAI","model":"TUCSON","year":"2020","mileage":"37 761 km","fuel":"Essence 2.0","transmission":"Boîte automatique","descriptionFr":"SUV essence 2.0 L avec caméra 360°, aides au stationnement et sièges électriques.","descriptionEn":"2.0 L petrol SUV with 360° camera, parking sensors and power seats.","priceXof":6700000,"priceUsd":11260,"featuresFr":["Démarrage Start","Jantes alu","Caméra 360°","Parking sensor","Sièges électriques"],"featuresEn":["Push-button start","Alloy wheels","360° camera","Parking sensors","Power seats"],"photos":["assets/tucson 2020/whatsapp image 2026-11-10 at 23.48.12.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.34.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.35 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.35.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.36.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.37 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.37.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.38.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.39 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.39.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.40 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.40.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.41.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.42 (1).webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.42.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.43.webp","assets/tucson 2020/whatsapp image 2026-11-10 at 23.50.44.webp"]},{"brand":"HYUNDAI","model":"TUCSON","year":"2025","mileage":"0 km","fuel":"Essence 2.5","transmission":"Boîte automatique","descriptionFr":"Tucson 2025 avec toit panoramique, sièges chauffants et volant chauffant.","descriptionEn":"2025 Tucson with panoramic roof, heated seats and heated steering wheel.","priceXof":13000000,"priceUsd":21850,"featuresFr":["Démarrage Start","Jantes alu","Caméra 360°","Parking sensor","Sièges électriques","Sièges chauffants","Volant chauffant","Direction assistée","Toit panoramique"],"featuresEn":["Push-button start","Alloy wheels","360° camera","Parking sensors","Power seats","Heated seats","Heated steering wheel","Power steering","Panoramic roof"],"photos":["assets/tucson2025/whatsapp image 2026-11-10 at 23.59.16.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.17.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.18 (1).webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.18.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.19.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.20 (1).webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.20.webp","assets/tucson2025/whatsapp image 2026-11-10 at 23.59.21.webp"]}],"4×4 / Tout-terrain":[{"brand":"MERCEDES-BENZ","model":"G 63 AMG","year":"2020","mileage":"48 000 km","fuel":"Essence V8","transmission":"Boîte automatique","descriptionFr":"G 63 AMG V8 avec carrosserie noire et intérieur noir. Prix communiqué sur demande via WhatsApp.","descriptionEn":"G 63 AMG V8 with black exterior and black interior. Price available on request via WhatsApp.","priceXof":null,"priceUsd":null,"featuresFr":["Démarrage Start","Jantes alu","Caméra 360°","Parking sensor","Sièges électriques","Sièges chauffants","Volant chauffant","Direction assistée","Toit ouvrant","Carrosserie noire","Intérieur noir"],"featuresEn":["Push-button start","Alloy wheels","360° camera","Parking sensors","Power seats","Heated seats","Heated steering wheel","Power steering","Sunroof","Black exterior","Black interior"],"photos":["assets/g63 amg/whatsapp image 2026-11-11 at 00.05.13.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.14.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.15 (1).webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.15.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.16.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.17 (1).webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.17.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.18 (1).webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.18.webp","assets/g63 amg/whatsapp image 2026-11-11 at 00.05.19.webp"]}]};
const DEMO_PARTS={
"Moteur & filtration":[
{name:"Filtre à huile",detail:"Engine oil filtration; selection depends on the engine specification.",ref:"DEMO-MOT-01",price:6500},
{name:"Filtre à air moteur",detail:"Air intake filter element; fitment must be confirmed for each vehicle.",ref:"DEMO-MOT-02",price:8500},
{name:"Kit de distribution",detail:"Belt and tensioner kit; exact reference depends on the engine code.",ref:"DEMO-MOT-03",price:75000}],
"Freinage":[
{name:"Plaquettes de frein avant",detail:"Front axle brake pad set; shape and dimensions must be checked.",ref:"DEMO-FRE-01",price:24000},
{name:"Disques de frein avant",detail:"Pair of ventilated brake discs; diameter must be confirmed before ordering.",ref:"DEMO-FRE-02",price:68000},
{name:"Kit frein arrière",detail:"Illustrative rear brake kit; configuration depends on the vehicle.",ref:"DEMO-FRE-03",price:45000}],
"Suspension & direction":[
{name:"Amortisseur avant",detail:"Single shock absorber; version and fitment must be checked by chassis.",ref:"DEMO-SUS-01",price:45000},
{name:"Rotule de direction",detail:"Steering joint; side and thread must be checked.",ref:"DEMO-SUS-02",price:12000},
{name:"Triangle de suspension",detail:"Suspension control arm; geometry and side must be confirmed.",ref:"DEMO-SUS-03",price:38000}],
"Électricité & batterie":[
{name:"Batterie 12 V · 65 Ah",detail:"Starter battery; dimensions, polarity and capacity must be validated.",ref:"DEMO-ELE-01",price:85000},
{name:"Alternateur",detail:"Charging alternator; amperage and connectors depend on the vehicle.",ref:"DEMO-ELE-02",price:125000},
{name:"Démarreur",detail:"Starter motor; output and mounting must be confirmed.",ref:"DEMO-ELE-03",price:95000}],
"Embrayage & transmission":[
{name:"Kit d'embrayage",detail:"Pressure plate, clutch disc and release bearing depend on gearbox and engine.",ref:"DEMO-TRA-01",price:150000},
{name:"Cardan de transmission",detail:"Complete drive shaft; side and length must be identified.",ref:"DEMO-TRA-02",price:75000},
{name:"Support de boîte",detail:"Anti-vibration mount; shape and position must be checked.",ref:"DEMO-TRA-03",price:18000}],
"Carrosserie & éclairage":[
{name:"Phare avant",detail:"Headlamp assembly; side, trim and lighting technology must be confirmed.",ref:"DEMO-CAR-01",price:75000},
{name:"Rétroviseur extérieur",detail:"Complete side mirror; side and electrical options must be specified.",ref:"DEMO-CAR-02",price:35000},
{name:"Pare-chocs avant",detail:"Body panel; version and mounting points must be checked.",ref:"DEMO-CAR-03",price:90000}],
"Accessoires & multimédia":[
{name:"Autoradio Bluetooth",detail:"Multimedia unit; format and wiring harness depend on the dashboard.",ref:"DEMO-ACC-01",price:35000},
{name:"Caméra de recul",detail:"Parking camera; viewing angle and display depend on the installation.",ref:"DEMO-ACC-02",price:28000},
{name:"Caméra embarquée",detail:"Driving recorder; power supply and storage must be specified.",ref:"DEMO-ACC-03",price:55000}],
"Pneus & roues":[
{name:"Pneu 205/55 R16",detail:"Demonstration tyre; load and speed ratings must be validated.",ref:"DEMO-ROU-01",price:45000},
{name:"Jante aluminium 16 pouces",detail:"Wheel rim; bolt pattern, offset and centre bore must be checked before fitting.",ref:"DEMO-ROU-02",price:75000},
{name:"Capteur de pression TPMS",detail:"Tyre pressure sensor; frequency and protocol depend on the vehicle.",ref:"DEMO-ROU-03",price:18000}],
"Habitacle & intérieur":[
{name:"Jeu de tapis de sol",detail:"Cabin floor mats; cut and fixing points depend on the model.",ref:"DEMO-HAB-01",price:20000},
{name:"Lève-vitre électrique",detail:"Electric window regulator; door and side must be identified.",ref:"DEMO-HAB-02",price:35000},
{name:"Commande de vitre",detail:"Window switch; button count and connector must be checked.",ref:"DEMO-HAB-03",price:15000}],
"Échappement & capteurs":[
{name:"Sonde lambda",detail:"Emission control sensor; connector and length must be validated.",ref:"DEMO-ECH-01",price:45000},
{name:"Silencieux arrière",detail:"Exhaust silencer; diameter and version depend on the engine.",ref:"DEMO-ECH-02",price:85000},
{name:"Catalyseur",detail:"Emissions-control component; standard and OEM reference must be confirmed.",ref:"DEMO-ECH-03",price:180000}]};
function demoNode(parent,tag,cls,text){var el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;parent.appendChild(el);return el;}
function demoMoney(value){return new Intl.NumberFormat('en-US').format(value)+' FCFA';}
function demoDisplayFamily(family){const labels={"Citadine":"City cars","Berline":"Sedans","SUV / Crossover":"SUVs / Crossovers","4×4 / Tout-terrain":"4×4 / Off-road","Utilitaire":"Commercial vehicles","Moteur & filtration":"Engine & filters","Freinage":"Braking","Suspension & direction":"Suspension & steering","Électricité & batterie":"Electrical & battery","Embrayage & transmission":"Clutch & transmission","Carrosserie & éclairage":"Bodywork & lighting","Accessoires & multimédia":"Accessories & multimedia","Pneus & roues":"Tyres & wheels","Habitacle & intérieur":"Cabin & interior","Échappement & capteurs":"Exhaust & sensors"};return labels[family]||family;}
function demoCard(type,family,item,index){
 var card=document.createElement('article');card.className='catalog-card';
 var top=demoNode(card,'div','catalog-card-top');demoNode(top,'span','fake-tag','FICTIONAL EXAMPLE');demoNode(top,'span','card-family',demoDisplayFamily(family));
 if(type==='vehicle'){
  demoNode(card,'div','catalog-card-brand',item.brand+' · '+item.year);demoNode(card,'h3','',item.model);demoNode(card,'p','catalog-card-description',item.description);
  var specs=demoNode(card,'div','catalog-specs');demoNode(specs,'span','',item.km);demoNode(specs,'span','',item.fuel);demoNode(specs,'span','',item.gear);
 }else{
  top.lastChild.textContent='REF. '+item.ref;demoNode(card,'div','catalog-card-brand','CHANCELLOR · DEMO');demoNode(card,'h3','',item.name);demoNode(card,'p','catalog-card-description',item.detail);
  var partSpecs=demoNode(card,'div','catalog-specs');demoNode(partSpecs,'span','','Compatibility to be checked');demoNode(partSpecs,'span','','Fictional reference');
 }
 var price=demoNode(card,'div','catalog-price-row');var priceText=demoNode(price,'div','');
 demoNode(priceText,'small','','Demo price');demoNode(priceText,'strong','',demoMoney(item.price));demoNode(priceText,'em','','Fictional mock-up price');
 var action=demoNode(card,'button','catalog-card-action',type==='vehicle'?'Ask about this vehicle':'Add to my enquiry');action.type='button';demoNode(action,'span','','↗');
 action.addEventListener('click',function(){if(type==='vehicle')window.chooseVehicleDemo(family,index);else window.choosePartDemo(family,index);});
 return card;
}

function vehicleIsEnglish(){return window.location.pathname.indexOf('/en/')!==-1;}
function vehicleAsset(path){return (vehicleIsEnglish()?'../':'')+path;}
function vehicleWhatsApp(item){
  var english=vehicleIsEnglish();
  var message=english
    ? 'Hello Chancellor Automobile, I would like more information about the '+item.brand+' '+item.model+' ('+item.year+'), located in the United Arab Emirates. Please confirm availability and the conditions. '+(item.priceXof?'Please also confirm the price and shipping cost.':'Please send me your price offer via WhatsApp.')
    : 'Bonjour Chancellor Automobile, je souhaite avoir des informations sur le '+item.brand+' '+item.model+' ('+item.year+'), situé aux Émirats arabes unis. Merci de confirmer la disponibilité et les conditions. '+(item.priceXof?'Merci de confirmer le prix et les frais de transport.':'Merci de me communiquer votre prix via WhatsApp.');
  window.open('https://wa.me/2250757608293?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
}
function createVehicleCard(item){
  var english=vehicleIsEnglish();
  var card=document.createElement('article');card.className='catalog-card vehicle-sale-card';
  var top=demoNode(card,'div','catalog-card-top');
  demoNode(top,'span','fake-tag',english?'AVAILABLE':'DISPONIBLE');
  demoNode(top,'span','card-family',item.brand);
  var gallery=demoNode(card,'div','vehicle-gallery');
  var main=document.createElement('img');main.className='vehicle-photo-main';main.src=vehicleAsset(item.photos[0]);main.alt=item.brand+' '+item.model+' '+item.year;main.loading='lazy';main.decoding='async';gallery.appendChild(main);
  var strip=demoNode(gallery,'div','vehicle-photo-strip');
  item.photos.forEach(function(path,index){
    var thumb=document.createElement('button');thumb.type='button';thumb.className='vehicle-photo-thumb';thumb.setAttribute('aria-label',(english?'View photo ':'Voir la photo ')+(index+1));thumb.setAttribute('aria-pressed',String(index===0));
    var image=document.createElement('img');image.src=vehicleAsset(path);image.alt='';image.loading='lazy';image.decoding='async';thumb.appendChild(image);
    thumb.addEventListener('click',function(){main.src=vehicleAsset(path);main.alt=item.brand+' '+item.model+' '+item.year+' — photo '+(index+1);strip.querySelectorAll('.vehicle-photo-thumb').forEach(function(button){button.setAttribute('aria-pressed','false');});thumb.setAttribute('aria-pressed','true');});
    strip.appendChild(thumb);
  });
  demoNode(card,'div','catalog-card-brand',item.brand+' · '+item.year);
  demoNode(card,'h3','',item.model);
  demoNode(card,'p','catalog-card-description',english?item.descriptionEn:item.descriptionFr);
  var specs=demoNode(card,'div','catalog-specs');
  [item.mileage,item.fuel,item.transmission,english?'United Arab Emirates':'Émirats arabes unis',english?'Shipping excluded':'Transport non inclus'].forEach(function(value){demoNode(specs,'span','',value);});
  var features=demoNode(card,'div','catalog-specs vehicle-features');
  (english?item.featuresEn:item.featuresFr).forEach(function(value){demoNode(features,'span','',value);});
  var price=demoNode(card,'div','catalog-price-row');var priceText=demoNode(price,'div','');
  if(item.priceXof){
    demoNode(priceText,'small','',english?'Indicative price · shipping excluded':'Prix indicatif · hors transport');
    demoNode(priceText,'strong','',new Intl.NumberFormat('fr-FR').format(item.priceXof)+' XOF');
    demoNode(priceText,'em','',(english?'Approx. ':'≈ ')+ '(family){
 var track=document.getElementById('parts-track'),heading=document.getElementById('parts-family-title'),items=DEMO_PARTS[family];if(!track||!items)return;
 heading.textContent=family+' · 3 exemples';track.replaceChildren();items.forEach(function(item,index){track.appendChild(demoCard('part',family,item,index));});
 var view=document.getElementById('parts-viewport');if(view)view.scrollLeft=0;
}

window.chooseVehicleDemo=function(family,index){
  var item=VEHICLE_STOCK[family]&&VEHICLE_STOCK[family][index];if(item)vehicleWhatsApp(item);
};

window.choosePartDemo=function(family,index){
 var item=DEMO_PARTS[family]&&DEMO_PARTS[family][index];if(!item)return;
 var name=document.getElementById('part-name');if(name)name.value=item.name+' — '+item.ref+' (fictional example)';
 var details=document.querySelector('#parts-request-form [name="details"]');if(details)details.value='Category: '+family+'. Fictional example: '+item.detail+' Fictional price: '+demoMoney(item.price)+'. Please identify the actual compatible part reference.';
 document.getElementById('demande-piece')?.scrollIntoView({behavior:'smooth',block:'start'});
 window.setTimeout(function(){if(name)name.focus({preventScroll:true});},450);
 var toast=document.getElementById('site-toast');if(toast){toast.textContent='Fictional example added to your enquiry.';toast.classList.add('is-visible');}
};

window.initDemoVehicleCatalogue=function(){
  var buttons=Array.from(document.querySelectorAll('.vehicle-type'));
  if(!buttons.length)return;
  function activate(family){
    buttons.forEach(function(button){var active=button.dataset.type===family;button.classList.toggle('is-selected',active);button.setAttribute('aria-pressed',String(active));});
    renderVehicleDemo(family);
    var type=document.getElementById('vehicle-type');if(type)type.value=family;
  }
  buttons.forEach(function(button){button.addEventListener('click',function(){var family=button.dataset.type;if(VEHICLE_STOCK[family])activate(family);document.getElementById('catalogue-vehicules')?.scrollIntoView({behavior:'smooth',block:'start'});});});
  var first=buttons.find(function(button){return VEHICLE_STOCK[button.dataset.type];});
  if(first)activate(first.dataset.type);
};

window.initDemoPartsCatalogue=function(){
 var cards=Array.from(document.querySelectorAll('.part-category')),search=document.getElementById('parts-search'),empty=document.getElementById('parts-empty');
 function activate(family){cards.forEach(function(card){var button=card.querySelector('.part-select'),active=button&&button.dataset.part===family;card.classList.toggle('is-selected',Boolean(active));if(button)button.setAttribute('aria-pressed',String(Boolean(active)));});renderPartDemo(family);}
 cards.forEach(function(card){var button=card.querySelector('.part-select');if(button)button.addEventListener('click',function(){activate(button.dataset.part);document.getElementById('pieces-demonstration')?.scrollIntoView({behavior:'smooth',block:'start'});});});
 if(search)search.addEventListener('input',function(){var query=search.value.trim().toLocaleLowerCase('en'),shown=0;cards.forEach(function(card){var match=!query||(card.dataset.search+' '+card.textContent).toLocaleLowerCase('en').includes(query);card.hidden=!match;if(match)shown++;});if(empty)empty.hidden=shown>0;var visible=cards.find(function(card){return !card.hidden;});var button=visible&&visible.querySelector('.part-select');if(button)activate(button.dataset.part);});
 var first=Object.keys(DEMO_PARTS)[0];if(first)activate(first);
};
+new Intl.NumberFormat('en-US').format(item.priceUsd)+' USD');
  }else{
    demoNode(priceText,'small','',english?'Price':'Prix');
    demoNode(priceText,'strong','',english?'On request':'Sur demande');
    demoNode(priceText,'em','',english?'Ask for a quote on WhatsApp':'Demandez le tarif sur WhatsApp');
  }
  var action=demoNode(card,'button','catalog-card-action',item.priceXof?(english?'Contact us on WhatsApp':'Contacter sur WhatsApp'):(english?'Request G 63 price on WhatsApp':'Demander le prix du G 63 sur WhatsApp'));
  action.type='button';demoNode(action,'span','','↗');action.addEventListener('click',function(){vehicleWhatsApp(item);});
  return card;
}
function renderVehicleDemo(family){
  var track=document.getElementById('vehicle-track'),heading=document.getElementById('vehicle-family-title'),items=VEHICLE_STOCK[family];if(!track||!items)return;
  var english=vehicleIsEnglish();
  var label=family==='SUV / Crossover'?'SUV / Crossover':(english?'4×4 / Off-road':'4×4 / Tout-terrain');
  heading.textContent=label+' · '+items.length+' '+(english?(items.length===1?'vehicle':'vehicles'):(items.length===1?'véhicule':'véhicules'));
  track.replaceChildren();items.forEach(function(item){track.appendChild(createVehicleCard(item));});
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
 var details=document.querySelector('#vehicle-request-form [name="details"]');if(details)details.value='Fictional example selected: '+item.brand+' '+item.model+'. To be replaced by an actual vehicle search.';
 var budget=document.querySelector('#vehicle-request-form [name="budget"]');if(budget)budget.value='Indicative budget to be confirmed';
 document.getElementById('demande-vehicule')?.scrollIntoView({behavior:'smooth',block:'start'});
 var toast=document.getElementById('site-toast');if(toast){toast.textContent='Fictional example selected. Confirm your requirements before sending.';toast.classList.add('is-visible');}
};
window.choosePartDemo=function(family,index){
 var item=DEMO_PARTS[family]&&DEMO_PARTS[family][index];if(!item)return;
 var name=document.getElementById('part-name');if(name)name.value=item.name+' — '+item.ref+' (fictional example)';
 var details=document.querySelector('#parts-request-form [name="details"]');if(details)details.value='Category: '+family+'. Fictional example: '+item.detail+' Fictional price: '+demoMoney(item.price)+'. Please identify the actual compatible part reference.';
 document.getElementById('demande-piece')?.scrollIntoView({behavior:'smooth',block:'start'});
 window.setTimeout(function(){if(name)name.focus({preventScroll:true});},450);
 var toast=document.getElementById('site-toast');if(toast){toast.textContent='Fictional example added to your enquiry.';toast.classList.add('is-visible');}
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
 if(search)search.addEventListener('input',function(){var query=search.value.trim().toLocaleLowerCase('en'),shown=0;cards.forEach(function(card){var match=!query||(card.dataset.search+' '+card.textContent).toLocaleLowerCase('en').includes(query);card.hidden=!match;if(match)shown++;});if(empty)empty.hidden=shown>0;var visible=cards.find(function(card){return !card.hidden;});var button=visible&&visible.querySelector('.part-select');if(button)activate(button.dataset.part);});
 var first=Object.keys(DEMO_PARTS)[0];if(first)activate(first);
};
