'use strict';
const DEMO_VEHICLES={
"Citadine":[
{brand:"Toyota",model:"Yaris",year:"2021",km:"38 000 km",fuel:"Essence",gear:"Automatique",price:6900000,description:"Versatile city car, practical in town and comfortable for everyday trips."},
{brand:"Hyundai",model:"i10",year:"2022",km:"29 000 km",fuel:"Essence",gear:"Manuelle",price:5800000,description:"Compact dimensions, easy driving and a cabin designed for urban mobility."},
{brand:"Kia",model:"Picanto",year:"2021",km:"32 000 km",fuel:"Essence",gear:"Manuelle",price:5500000,description:"Agile small city car, designed for easy parking and daily journeys."}],
"Berline":[
{brand:"Toyota",model:"Corolla",year:"2020",km:"54 000 km",fuel:"Essence",gear:"Automatique",price:9800000,description:"Versatile sedan offering comfort, efficiency and space for regular journeys."},
{brand:"Peugeot",model:"508",year:"2019",km:"61 000 km",fuel:"Diesel",gear:"Automatique",price:11200000,description:"Elegant styling, refined presentation and enjoyable road manners."},
{brand:"Hyundai",model:"Elantra",year:"2021",km:"43 000 km",fuel:"Essence",gear:"Automatique",price:8900000,description:"Modern sedan with a good balance of comfort, space and equipment."}],
"SUV / Crossover":[
{brand:"Hyundai",model:"Tucson",year:"2021",km:"48 000 km",fuel:"Diesel",gear:"Automatique",price:14500000,description:"Distinctive family SUV with a raised driving position."},
{brand:"Toyota",model:"RAV4",year:"2020",km:"57 000 km",fuel:"Essence",gear:"Automatique",price:16900000,description:"Versatile SUV with generous space and a design suited to long journeys."},
{brand:"Kia",model:"Sportage",year:"2022",km:"35 000 km",fuel:"Essence",gear:"Automatique",price:15800000,description:"Modern family crossover with a welcoming, flexible cabin."}],
"4×4 / Tout-terrain":[
{brand:"Toyota",model:"Land Cruiser Prado",year:"2018",km:"82 000 km",fuel:"Diesel",gear:"Automatique",price:28500000,description:"Robust 4×4 designed to combine on-road comfort and off-road capability."},
{brand:"Mitsubishi",model:"Pajero Sport",year:"2020",km:"66 000 km",fuel:"Diesel",gear:"Automatique",price:22600000,description:"Versatile off-roader suited to family travel and varied road conditions."},
{brand:"Nissan",model:"Patrol",year:"2017",km:"94 000 km",fuel:"Essence",gear:"Automatique",price:31900000,description:"Large, imposing 4×4 prioritising space, power and comfort."}],
"Utilitaire":[
{brand:"Toyota",model:"Hilux",year:"2021",km:"46 000 km",fuel:"Diesel",gear:"Manuelle",price:17900000,description:"Versatile pickup designed for professional activities and demanding use."},
{brand:"Renault",model:"Trafic",year:"2020",km:"68 000 km",fuel:"Diesel",gear:"Manuelle",price:13200000,description:"Practical van with load space suited to professional needs."},
{brand:"Peugeot",model:"Partner",year:"2022",km:"31 000 km",fuel:"Diesel",gear:"Manuelle",price:10900000,description:"Compact commercial vehicle, easy to handle in town and practical for deliveries."}]};
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
function renderVehicleDemo(family){
 var track=document.getElementById('vehicle-track'),heading=document.getElementById('vehicle-family-title'),items=DEMO_VEHICLES[family];if(!track||!items)return;
 heading.textContent=demoDisplayFamily(family)+' · 3 examples';track.replaceChildren();items.forEach(function(item,index){track.appendChild(demoCard('vehicle',family,item,index));});
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
