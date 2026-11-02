function initTheme(){
  const root=document.documentElement,buttons=$$('[data-theme-toggle]'),meta=$('meta[name="theme-color"]');
  function apply(theme,persist){
    const value=theme==='light'?'light':'dark';root.dataset.theme=value;root.style.colorScheme=value;
    if(persist){try{localStorage.setItem('chancellor-theme',value);}catch(error){}}
    buttons.forEach(button=>{
      const light=value==='light';button.setAttribute('aria-pressed',String(light));
      button.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');
      const label=$('.theme-toggle-label',button),icon=$('.theme-toggle-icon',button);
      if(label)label.textContent=light?'Dark':'Light';if(icon)icon.textContent=light?'☾':'☼';
    });
    if(meta)meta.content=value==='light'?'#f3f6fb':'#07152d';
  }
  apply(root.dataset.theme||'dark',false);
  buttons.forEach(button=>button.addEventListener('click',()=>apply(root.dataset.theme==='light'?'dark':'light',true)));
}
function bindCatalogArrows(){
  document.querySelectorAll('[data-scroll-target][data-direction]').forEach(button=>button.addEventListener('click',()=>{
    const viewport=document.getElementById(button.dataset.scrollTarget);if(!viewport)return;
    const card=viewport.querySelector('.catalog-card');
    const amount=card?card.getBoundingClientRect().width+15:viewport.clientWidth*.8;
    viewport.scrollBy({left:Number(button.dataset.direction)*amount,behavior:'smooth'});
  }));
}

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

const WHATSAPP_NUMBER = '2250757608293'; // Numéro officiel au format international, sans +, espace ni tiret.
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
  fillSelect(make, Object.keys(VEHICLES), 'All makes');
  make.addEventListener('change', () => {
    const models = make.value ? VEHICLES[make.value] : [];
    fillSelect(model, models, make.value ? 'Choose a model' : 'All makes');
    model.disabled = !make.value;
    fillSelect(year, [], 'Choose a model first');
    year.disabled = true;
  });
  model.addEventListener('change', () => {
    const now = new Date().getFullYear();
    const years = Array.from({length: now - 1997}, (_, i) => String(now - i));
    fillSelect(year, model.value ? years : [], 'Any year');
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
    'Hello Chancellor Automobile,', '',
    'ENQUIRY: ' + title,
    'Name: ' + (data.get('name') || ''),
    'Phone: ' + (data.get('phone') || ''),
    vehicle ? 'Vehicle: ' + vehicle : '',
    data.get('budget') ? 'Indicative budget: ' + data.get('budget') : '',
    data.get('type') && (title.includes('véhicule') || title.toLowerCase().includes('vehicle')) ? 'Type: ' + data.get('type') : '',
    '', 'Details:', data.get('details') || '',
    '', 'Please confirm the references, availability and terms.'
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
    if (!opened) notify('Allow pop-ups to open WhatsApp.');
    if (feedback) feedback.textContent = 'Your enquiry has been prepared in WhatsApp. Review the message and send it.';
    return;
  }
  try {
    const copied = await copyMessage(message);
    if (feedback) feedback.textContent = copied
      ? 'Your message has been copied. Paste it into your messaging app to send it.'
      : 'The message destination needs to be configured by Chancellor Automobile.';
    notify(copied ? 'Enquiry copied and ready to send.' : 'Contact channel needs to be configured.');
  } catch (error) {
    if (feedback) feedback.textContent = 'The official WhatsApp number is not configured on this website yet.';
    notify('The message could not be copied automatically.');
  }
}

function initVehiclePage(){
  bindVehicleSelector('vehicle');
  if(window.initDemoVehicleCatalogue)window.initDemoVehicleCatalogue();
  const form=$('#vehicle-request-form');
  if(form)form.addEventListener('submit',event=>{event.preventDefault();submitRequest(form,'Vehicle search / purchase',selectedVehicle('vehicle'),$('#vehicle-feedback'));});
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

function initPartsPage(){
  bindVehicleSelector('part');
  bindVehicleSelector('part-form');
  mirrorVehicleSelectors('part','part-form');
  if(window.initDemoPartsCatalogue)window.initDemoPartsCatalogue();
  const form=$('#parts-request-form');
  if(form)form.addEventListener('submit',event=>{event.preventDefault();submitRequest(form,'Auto parts enquiry: '+($('#part-name')?.value||'Part to identify'),selectedVehicle('part-form'),$('#parts-feedback'));});
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
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
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
  const popup = $('#install-popover');
  const closeButton = $('#install-popup-close');
  const laterButton = $('#install-popup-later');
  const actionButton = $('#install-popup-action');
  const helpPanel = $('#install-popup-help');
  const helpTitle = $('#install-help-title');
  const helpSteps = $('#install-help-steps');
  const navButton = $('#install-app');
  if (!popup || !actionButton) return;

  const DISMISSED_KEY = 'chancellor-install-dismissed-at';
  const DISMISS_FOR = 7 * 24 * 60 * 60 * 1000;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isStandalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    navigator.standalone === true;

  let helpOpen = false;
  let promptInProgress = false;

  function wasDismissedRecently() {
    try {
      const time = Number(localStorage.getItem(DISMISSED_KEY) || 0);
      return time > 0 && Date.now() - time < DISMISS_FOR;
    } catch (error) {
      return false;
    }
  }

  function rememberDismissal() {
    try { localStorage.setItem(DISMISSED_KEY, String(Date.now())); } catch (error) {}
  }

  function closePopup(remember = true) {
    popup.hidden = true;
    popup.classList.remove('is-visible');
    if (remember) rememberDismissal();
  }

  function setHelp(title, steps) {
    helpTitle.textContent = title;
    helpSteps.replaceChildren();
    steps.forEach(step => {
      const item = document.createElement('li');
      item.textContent = step;
      helpSteps.appendChild(item);
    });
    helpPanel.hidden = false;
    helpOpen = true;
    actionButton.textContent = 'Got it';
    actionButton.dataset.mode = 'close-help';
  }

  function showManualInstructions() {
    if (isIOS) {
      setHelp('On iPhone or iPad', [
        'Open this page in Safari.',
        'Tap the Share button at the bottom of the screen.',
        'Choose “Add to Home Screen”.',
        'Confirm by tapping “Add”.'
      ]);
      return;
    }
    const isAndroid = /android/i.test(navigator.userAgent);
    if (isAndroid) {
      setHelp('On Android', [
        'Open your browser menu ⋮.',
        'Choose “Install app” or “Add to Home screen”.',
        'Confirm the installation.'
      ]);
      return;
    }
    setHelp('On desktop', [
      'In Chrome or Edge, use the Install icon in the address bar, if available.',
      'You can also open the browser menu and select “Install Chancellor Automobile”.'
    ]);
  }

  function updateActions() {
    if (installPrompt) {
      actionButton.hidden = false;
      actionButton.textContent = 'Install the app';
      actionButton.dataset.mode = 'install';
    } else {
      actionButton.hidden = false;
      actionButton.textContent = isIOS ? 'How to install' : 'See installation instructions';
      actionButton.dataset.mode = 'help';
    }
    if (navButton) navButton.hidden = false;
  }

  function openPopup() {
    if (isStandalone()) return;
    popup.hidden = false;
    requestAnimationFrame(() => popup.classList.add('is-visible'));
    helpPanel.hidden = true;
    helpOpen = false;
    updateActions();
  }

  async function runNativePrompt() {
    if (!installPrompt || promptInProgress) {
      showManualInstructions();
      return;
    }
    promptInProgress = true;
    const promptEvent = installPrompt;
    installPrompt = null;
    actionButton.disabled = true;
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice && choice.outcome === 'accepted') {
        closePopup(false);
      } else {
        actionButton.disabled = false;
        showManualInstructions();
      }
    } catch (error) {
      actionButton.disabled = false;
      showManualInstructions();
    } finally {
      promptInProgress = false;
      updateActions();
      actionButton.disabled = false;
    }
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    updateActions();
    if (!isStandalone() && !wasDismissedRecently()) openPopup();
  });

  actionButton.addEventListener('click', () => {
    if (actionButton.dataset.mode === 'close-help') {
      closePopup(true);
      return;
    }
    if (installPrompt) {
      runNativePrompt();
      return;
    }
    showManualInstructions();
  });

  if (navButton) {
    navButton.hidden = false;
    navButton.addEventListener('click', () => {
      if (installPrompt) runNativePrompt();
      else openPopup();
    });
  }

  if (closeButton) closeButton.addEventListener('click', () => closePopup(true));
  if (laterButton) laterButton.addEventListener('click', () => closePopup(true));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !popup.hidden) closePopup(true);
  });

  window.addEventListener('appinstalled', () => {
    closePopup(false);
    if (navButton) navButton.hidden = true;
    notify('Chancellor Automobile is installed on your device.');
  });

  if (!isStandalone() && !wasDismissedRecently()) {
    window.setTimeout(openPopup, 1400);
  } else if (navButton) {
    navButton.hidden = isStandalone();
  }
}

function initPWA() {
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('../sw.js').catch(() => {}));
  }
}

const yearLabel = $('#current-year');
if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());
initTheme();
initNavigation();
bindCatalogArrows();
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
