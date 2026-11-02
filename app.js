'use strict';

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

const WHATSAPP_NUMBER = ''; // Numéro officiel au format international, sans +, espace ni tiret.
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
let toastTimer;
let installPrompt = null;

function notify(message) {
  const element = $('#site-toast');
  if (!element) return;
  element.textContent = message;
  element.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('is-visible'), 4500);
}

function fillSelect(select, values, placeholder) {
  if (!select) return;
  select.replaceChildren(new Option(placeholder, ''));
  values.forEach(value => select.add(new Option(value, value)));
}

function bindVehicleSelector(prefix) {
  const make = $('#' + prefix + '-make');
  const model = $('#' + prefix + '-model');
  const year = $('#' + prefix + '-year');
  if (!make || !model || !year) return;
  fillSelect(make, Object.keys(VEHICLES), 'Toutes les marques');
  make.addEventListener('change', () => {
    const models = make.value ? VEHICLES[make.value] : [];
    fillSelect(model, models, make.value ? 'Choisir un modèle' : 'Toutes les marques');
    model.disabled = !make.value;
    fillSelect(year, [], 'Choisir un modèle avant l’année');
    year.disabled = true;
  });
  model.addEventListener('change', () => {
    const now = new Date().getFullYear();
    const years = Array.from({length: now - 1997}, (_, i) => String(now - i));
    fillSelect(year, model.value ? years : [], 'Toutes les années');
    year.disabled = !model.value;
  });
}

function selectedVehicle(prefix) {
  const make = $('#' + prefix + '-make');
  const model = $('#' + prefix + '-model');
  const year = $('#' + prefix + '-year');
  return make && model && year ? [make.value, model.value, year.value].filter(Boolean).join(' ') : '';
}

function requestMessage(title, form, vehicle) {
  const data = new FormData(form);
  const lines = [
    'Bonjour Chancellor Automobile,', '',
    'DEMANDE : ' + title,
    'Nom : ' + (data.get('name') || ''),
    'Téléphone : ' + (data.get('phone') || ''),
    vehicle ? 'Véhicule : ' + vehicle : '',
    data.get('budget') ? 'Budget indicatif : ' + data.get('budget') : '',
    data.get('type') && title.includes('véhicule') ? 'Type : ' + data.get('type') : '',
    '', 'Détails :', data.get('details') || '',
    '', 'Merci de me confirmer les références, la disponibilité et les conditions.'
  ];
  return lines.filter((line, index) => line !== '' || (index > 0 && lines[index - 1] !== '')).join('\n');
}

async function copyMessage(message) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(message);
    return true;
  }
  const helper = document.createElement('textarea');
  helper.value = message;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.opacity = '0';
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand('copy');
  helper.remove();
  return copied;
}

async function submitRequest(form, title, vehicle, feedback) {
  if (!form.reportValidity()) return;
  const message = requestMessage(title, form, vehicle);
  if (WHATSAPP_NUMBER) {
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) notify('Autorisez les fenêtres externes pour ouvrir WhatsApp.');
    if (feedback) feedback.textContent = 'Votre demande a été préparée dans WhatsApp. Vérifiez le message puis envoyez-le.';
    return;
  }
  try {
    const copied = await copyMessage(message);
    if (feedback) feedback.textContent = copied
      ? 'Votre message est copié. Collez-le dans votre application de messagerie pour l’envoyer.'
      : 'Le canal de réception devra être configuré par Chancellor Automobile.';
    notify(copied ? 'Demande copiée : prête à être envoyée.' : 'Canal de contact à configurer.');
  } catch (error) {
    if (feedback) feedback.textContent = 'Le numéro WhatsApp officiel n’est pas encore configuré sur ce site.';
    notify('Impossible de copier le message automatiquement.');
  }
}

function initVehiclePage() {
  bindVehicleSelector('vehicle');
  const form = $('#vehicle-request-form');
  if (!form) return;
  $$('.vehicle-type').forEach(button => button.addEventListener('click', () => {
    const select = $('#vehicle-type');
    if (select) select.value = button.dataset.type || '';
    $$('.vehicle-type').forEach(item => item.classList.toggle('is-selected', item === button));
    $('#demande-vehicule')?.scrollIntoView({behavior:'smooth', block:'start'});
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    submitRequest(form, 'Recherche / achat d’un véhicule', selectedVehicle('vehicle'), $('#vehicle-feedback'));
  });
}

function mirrorVehicleSelectors(first, second) {
  let syncing = false;
  ['make', 'model', 'year'].forEach(suffix => {
    const left = $('#' + first + '-' + suffix);
    const right = $('#' + second + '-' + suffix);
    if (!left || !right) return;
    const mirror = (source, target) => {
      if (syncing) return;
      syncing = true;
      target.value = source.value;
      target.dispatchEvent(new Event('change', {bubbles:true}));
      syncing = false;
    };
    left.addEventListener('change', () => mirror(left, right));
    right.addEventListener('change', () => mirror(right, left));
  });
}

function initPartsPage() {
  bindVehicleSelector('part');
  bindVehicleSelector('part-form');
  mirrorVehicleSelectors('part', 'part-form');
  const search = $('#parts-search');
  const cards = $$('.part-category');
  const empty = $('#parts-empty');
  if (search) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('fr');
      let shown = 0;
      cards.forEach(card => {
        const match = !query || (card.dataset.search + ' ' + card.textContent).toLocaleLowerCase('fr').includes(query);
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  }
  $$('.part-select').forEach(button => button.addEventListener('click', () => {
    const name = $('#part-name');
    if (name) name.value = button.dataset.part || button.closest('.part-category')?.querySelector('h3')?.textContent || '';
    $('#demande-piece')?.scrollIntoView({behavior:'smooth', block:'start'});
    setTimeout(() => name?.focus({preventScroll:true}), 450);
  }));
  const form = $('#parts-request-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    submitRequest(form, 'Recherche de pièce détachée : ' + ($('#part-name')?.value || 'Pièce à identifier'), selectedVehicle('part-form'), $('#parts-feedback'));
  });
}

function initNavigation() {
  const toggle = $('.nav-toggle');
  const nav = $('#main-nav');
  const header = $('.site-header');
  if (!toggle || !nav || !header) return;

  function setOpen(open, returnFocus = false) {
    nav.hidden = !open;
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    if (returnFocus) toggle.focus();
  }

  setOpen(false);
  toggle.addEventListener('click', () => setOpen(nav.hidden));

  // Close after navigating to another page or an in-page section.
  $$('a', nav).forEach(link => link.addEventListener('click', () => setOpen(false)));

  // Close on outside interaction and Escape; return focus to the hamburger on Escape.
  document.addEventListener('pointerdown', event => {
    if (!nav.hidden && !header.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !nav.hidden) {
      setOpen(false, true);
    }
  });
}

function initInstallPrompt() {
  const button = $('#install-app');
  if (!button) return;
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    button.hidden = false;
  });
  button.addEventListener('click', async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    button.hidden = true;
  });
  window.addEventListener('appinstalled', () => {
    button.hidden = true;
    notify('Chancellor Automobile est installé sur votre appareil.');
  });
}

function initPWA() {
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
}

const yearLabel = $('#current-year');
if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());
initNavigation();
initInstallPrompt();
initVehiclePage();
initPartsPage();
initPWA();

 // Reveal effects are progressive: content remains visible if the observer is unavailable.
function initRevealEffects() {
  const targets = $$('.choice-card, .values-grid > div, .vehicle-type, .part-category, .request-step, .request-card, .compatibility-card');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {threshold:0.12, rootMargin:'0px 0px -35px 0px'});
  targets.forEach((item,index) => {
    item.classList.add('reveal');
    item.style.transitionDelay = (Math.min(index % 5, 4) * 55) + 'ms';
    observer.observe(item);
  });
}
initRevealEffects();
