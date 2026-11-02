'use strict';

// Référentiel de marques et modèles transmis pour Chancellor Automobile.
const VEHICLES = {
  'Toyota':['4Runner','Auris','Avensis','Aygo','Camry','Corolla','Fortuner','Hilux','Highlander','Land Cruiser','Land Cruiser Prado','RAV4','Sequoia','Sienna','Tacoma','Tundra','Verso','Yaris'],
  'Nissan':['Almera','Altima','Cabstar','Frontier','Juke','Micra','Navara','NP300','Pathfinder','Patrol','Primera','Qashqai','Terrano','X-Trail'],
  'Honda':['Accord','Civic','CR-V','FR-V','HR-V','Insight','Jazz','Odyssey','Pilot','S2000','Shuttle'],
  'Mitsubishi':['ASX','Colt','Eclipse','Galant','L200','Lancer','Outlander','Pajero','Pajero Sport','Space Star'],
  'Suzuki':['Alto','Baleno','Celerio','Grand Vitara','Jimny','S-Cross','Swift','SX4','Vitara','Wagon R'],
  'Mazda':['Mazda 2','Mazda 3','Mazda 6','CX-3','CX-5','CX-7','CX-9','MX-5'],
  'Subaru':['BRZ','Forester','Impreza','Legacy','Outback','XV'],
  'Lexus':['CT','ES','GS','IS','LX','NX','RX','UX'],
  'Daihatsu':['Boone','Charade','Cuore','Mira','Terios'],
  'Peugeot':['106','107','108','206','207','208','2008','306','307','308','3008','406','407','408','508','5008','Boxer','Expert','Partner','RCZ'],
  'Renault':['Captur','Clio II','Clio III','Clio IV','Clio V','Duster','Espace','Kadjar','Koleos','Laguna','Master','Megane','Sandero','Scenic','Trafic'],
  'Citroën':['Berlingo','C1','C2','C3','C4','C4 Picasso','C5','Dispatch','DS3','DS4','DS5','Saxo','Xsara'],
  'DS':['DS 3','DS 4','DS 7'],
  'Alpine':['A110'],
  'Mercedes-Benz':['Classe A','Classe B','Classe C','Classe E','Classe S','CLA','CLS','GLA','GLB','GLC','GLE','GLS','Vito','Sprinter'],
  'BMW':['Série 1','Série 2','Série 3','Série 4','Série 5','Série 6','Série 7','X1','X2','X3','X4','X5','X6','Z4'],
  'Volkswagen':['Arteon','Beetle','Caddy','Golf IV','Golf V','Golf VI','Golf VII','Golf VIII','Passat','Polo','Sharan','Tiguan','Touareg','Touran','Transporter'],
  'Audi':['A1','A3','A4','A5','A6','A7','A8','Q2','Q3','Q5','Q7','Q8'],
  'Porsche':['911','Cayenne','Macan','Panamera'],
  'Opel':['Astra','Combo','Corsa','Meriva','Mokka','Vivaro','Zafira'],
  'Ford':['Explorer','Fiesta','Focus','Fusion','Kuga','Mondeo','Mustang','Ranger','Transit'],
  'Chevrolet':['Aveo','Captiva','Cruze','Equinox','Spark','Tracker','Trax'],
  'Jeep':['Cherokee','Compass','Grand Cherokee','Renegade','Wrangler'],
  'Tesla':['Model 3','Model S','Model X','Model Y'],
  'Dodge':['Challenger','Charger','Durango'],
  'Cadillac':['CT4','CT5','Escalade','XT4','XT5'],
  'Chrysler':['300','Pacifica'],
  'Hyundai':['Accent','Creta','Elantra','Getz','Grand i10','i10','i20','i30','ix35','Santa Fe','Tucson'],
  'Kia':['Carens','Ceed','Cerato','Picanto','Rio','Sorento','Soul','Sportage','Stonic'],
  'Chery':['Arrizo','Omoda','Tiggo'],
  'Geely':['Coolray','Monjaro','Tugella'],
  'MG':['MG 3','MG 5','MG ZS','HS'],
  'BYD':['Atto 3','Dolphin','Seal','Tang'],
  'Haval':['H6','Jolion'],
  'Changan':['Alsvin','CS35','CS75'],
  'Jetour':['Dashing','X70'],
  'Dongfeng':['AX7','K01'],
  'Fiat':['500','Bravo','Doblo','Fiorino','Panda','Punto','Seicento','Tipo'],
  'Alfa Romeo':['Giulia','Giulietta','Stelvio'],
  'Ferrari':['488','F8','Portofino','Roma'],
  'Lamborghini':['Aventador','Huracan','Urus'],
  'Maserati':['Ghibli','Levante','Quattroporte'],
  'Jaguar':['E-Pace','F-Pace','XE','XF','XJ'],
  'Land Rover':['Defender','Discovery','Range Rover','Range Rover Evoque','Range Rover Sport'],
  'Mini':['Cooper','Countryman'],
  'Bentley':['Bentayga','Continental'],
  'Rolls-Royce':['Cullinan','Ghost','Phantom'],
  'Volvo':['C40','S40','S60','S80','S90','V40','V60','V90','XC40','XC60','XC70','XC90'],
  'Seat':['Arona','Ibiza','Leon','Tarraco','Ateca'],
  'Cupra':['Born','Formentor'],
  'Tata':['Harrier','Nexon','Safari','Tiago'],
  'Mahindra':['Bolero','KUV100','Scorpio','XUV300','XUV700'],
  'VinFast':['VF 5','VF 6','VF 7','VF 8','VF 9'],
  'Lada':['Granta','Niva','Vesta','XRAY'],
  'Škoda':['Fabia','Kamiq','Karoq','Kodiaq','Octavia','Rapid','Superb'],
  'Dacia':['Dokker','Duster','Lodgy','Logan','Sandero','Spring'],
  'Isuzu':['D-Max','M-UX'],
  'Genesis':['G70','G80','GV70','GV80']
};

// Ajouter le numéro WhatsApp officiel au format international, sans + ni espace.
const WHATSAPP_NUMBER = '';

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const makeSelect = $('#make');
const modelSelect = $('#model');
const yearSelect = $('#year');
const vehicleResult = $('#vehicle-result');
const toast = $('#toast');
let selectedVehicle = null;
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 4200);
}
function fillSelect(select, values, placeholder) {
  select.replaceChildren(new Option(placeholder, ''));
  values.forEach(value => select.add(new Option(value, value)));
}
function initVehicleFinder() {
  const makes = Object.keys(VEHICLES);
  const modelCount = Object.values(VEHICLES).reduce((total, models) => total + models.length, 0);
  fillSelect(makeSelect, makes, 'Choisir une marque');
  $('#brand-count').textContent = String(makes.length);
  $('#model-count').textContent = String(modelCount);
  makeSelect.addEventListener('change', () => {
    const make = makeSelect.value;
    fillSelect(modelSelect, make ? VEHICLES[make] : [], make ? 'Choisir un modèle' : "Choisir d'abord une marque");
    modelSelect.disabled = !make;
    fillSelect(yearSelect, [], "Choisir d'abord un modèle");
    yearSelect.disabled = true;
    vehicleResult.hidden = true;
    selectedVehicle = null;
  });
  modelSelect.addEventListener('change', () => {
    const model = modelSelect.value;
    const thisYear = new Date().getFullYear();
    const years = Array.from({ length: thisYear - 1997 }, (_, index) => String(thisYear - index));
    fillSelect(yearSelect, model ? years : [], model ? 'Choisir une année' : "Choisir d'abord un modèle");
    yearSelect.disabled = !model;
    vehicleResult.hidden = true;
    selectedVehicle = null;
  });
  $('#vehicle-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!makeSelect.value || !modelSelect.value || !yearSelect.value) {
      showToast('Veuillez sélectionner la marque, le modèle et l’année.');
      return;
    }
    selectedVehicle = { make: makeSelect.value, model: modelSelect.value, year: yearSelect.value };
    $('#vehicle-summary').textContent = selectedVehicle.make + ' · ' + selectedVehicle.model + ' · ' + selectedVehicle.year;
    vehicleResult.hidden = false;
    vehicleResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  $('#ask-compatible-part').addEventListener('click', () => {
    if (!selectedVehicle) return;
    prefillRequest('Recherche de pièces détachées', 'Véhicule : ' + selectedVehicle.make + ' ' + selectedVehicle.model + ' (' + selectedVehicle.year + ').\nPièce recherchée : ');
  });
}
function initPartsSearch() {
  const search = $('#parts-search');
  const cards = $$('.part-card');
  const empty = $('#parts-empty');
  function filterCards() {
    const term = search.value.trim().toLocaleLowerCase('fr');
    let visible = 0;
    cards.forEach(card => {
      const haystack = (card.dataset.search + ' ' + card.textContent).toLocaleLowerCase('fr');
      const match = !term || haystack.includes(term);
      card.hidden = !match;
      if (match) visible += 1;
    });
    empty.hidden = visible !== 0;
  }
  search.addEventListener('input', filterCards);
  search.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); filterCards(); } });
}
function prefillRequest(type, message) {
  $('#request-type').value = type;
  if (message) $('#request-message').value = message;
  $('#demande').scrollIntoView({ behavior: 'smooth' });
  window.setTimeout(() => $('#customer-name').focus({ preventScroll: true }), 550);
}
function initRequestShortcuts() {
  $$('[data-request]').forEach(element => {
    element.addEventListener('click', event => {
      const type = element.dataset.request;
      if (element.tagName === 'A') event.preventDefault();
      prefillRequest(type, '');
    });
  });
}
function buildRequestMessage(formData) {
  const lines = [
    'Bonjour Chancellor Automobile', '',
    'Je souhaite faire une demande : ' + formData.get('type'),
    'Nom : ' + formData.get('name'),
    'Téléphone : ' + formData.get('phone'),
    selectedVehicle ? 'Véhicule : ' + selectedVehicle.make + ' ' + selectedVehicle.model + ' (' + selectedVehicle.year + ')' : '',
    '', 'Détails :', formData.get('message'), '',
    'Merci de me préciser la disponibilité et les conditions.'
  ];
  return lines.filter(line => line !== '').join('\n');
}
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  return copied;
}
function initInquiryForm() {
  $('#inquiry-form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const message = buildRequestMessage(new FormData(form));
    const feedback = $('#form-feedback');
    if (WHATSAPP_NUMBER) {
      const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener,noreferrer');
      feedback.textContent = 'Votre message est prêt dans WhatsApp. Vérifiez-le puis envoyez-le pour transmettre votre demande.';
      showToast('Votre demande a été préparée dans WhatsApp.');
      return;
    }
    try {
      const copied = await copyText(message);
      if (copied) {
        feedback.textContent = 'Votre message a été copié. Le numéro WhatsApp officiel devra être ajouté pour activer l’envoi direct depuis ce formulaire.';
        showToast('Demande copiée. Vous pouvez la coller dans votre canal de contact.');
      } else {
        feedback.textContent = 'Le canal de réception n’est pas encore configuré. Contactez l’administrateur du site pour ajouter le WhatsApp officiel.';
        showToast('Le canal de contact doit encore être configuré.');
      }
    } catch (error) {
      feedback.textContent = 'Le canal de réception n’est pas encore configuré. Contactez l’administrateur du site pour ajouter le WhatsApp officiel.';
      showToast('Impossible de copier automatiquement. Vérifiez les paramètres du navigateur.');
    }
  });
}
function initMobileMenu() {
  const toggle = $('.menu-toggle');
  const nav = $('#primary-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  $$('#primary-nav a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }));
}
function initMotion() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = $$('.part-card, .service-card, .trust-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(target => observer.observe(target));
}
$('#current-year').textContent = String(new Date().getFullYear());
initVehicleFinder();
initPartsSearch();
initRequestShortcuts();
initInquiryForm();
initMobileMenu();
initMotion();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
