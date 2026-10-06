(() => {
  const T = {
    fr: {
      nav: ['À propos', 'Menu', 'Galerie', 'Heures', 'Contact'],
      menuBtn: 'Menu',
      kicker: 'Comptoir à thés & fouettés', tagline: 'Votre café de quartier.',
      heroText: 'Méga thés colorés, fouettés généreux et bon café, servis avec le sourire, à deux pas de chez vous.',
      ctaMenu: 'Voir le menu', ctaFind: 'Nous trouver', heroBadge: 'Terrasse ouverte l’été',
      heroAlt: 'Méga thé St-Mos sur la terrasse', aboutAlt: 'Latté glacé',
      aboutKicker: 'Notre histoire', aboutTitle: 'Un petit comptoir, une grande place dans le quartier.',
      about1: 'Le St-Mos, c’est un coin chaleureux où l’on s’arrête pour un méga thé, un fouetté ou un café avant le travail, après l’école ou entre deux courses.',
      about2: 'Derrière le comptoir, une petite équipe d’ici qui prépare chaque boisson à la main, invente de nouvelles saveurs et connaît les habitués par leur prénom.',
      menuKicker: 'Au comptoir', menuTitle: 'Le menu', menuNote: 'Prix en dollars canadiens, taxes en sus. Le menu change au fil des saisons.',
      extras: 'Extras 2 $ : collagène, fibres, électrolytes, probiotiques, protéine, espresso. Combos : 2 méga thés 19,50 $ · 2 fouettés 18,00 $ · méga thé + fouetté 19,50 $.',
      galKicker: 'En images', galTitle: 'La vie au St-Mos', galMore: 'Suivez-nous sur Instagram →',
      gal: ['Méga thé, terrasse', 'Fouetté Oréo', 'Latté glacé', 'Duo de méga thés', 'Fouetté shortcake'],
      hoursKicker: 'Heures & adresse', hoursTitle: 'Venez nous voir',
      transit: 'Stationnement gratuit dans la rue et à l’arrière du bâtiment. Arrêt d’autobus à 2 minutes à pied. Supports à vélo devant la porte.',
      mapLabel: 'Carte', directions: 'Obtenir l’itinéraire',
      contactTitle: 'Une question? Écrivez-nous.', phone: 'Téléphone', email: 'Courriel',
      fName: 'Nom', fEmail: 'Courriel', fMsg: 'Message', fSend: 'Envoyer',
      thanks: 'Merci! Message reçu.', thanksSub: 'On vous répond très vite.', rights: 'Tous droits réservés',
      tabs: ['Méga thés', 'Fouettés', 'Café & viennoiseries', 'Brunch & dîner léger'],
      hours: [['Lundi – mardi', 'Fermé'], ['Mercredi – vendredi', '7 h – 18 h'], ['Samedi', '8 h – 17 h'], ['Dimanche', '9 h – 16 h']],
      title: 'Le St-Mos · Comptoir à thés & fouettés',
    },
    en: {
      nav: ['About', 'Menu', 'Gallery', 'Hours', 'Contact'],
      menuBtn: 'Menu',
      kicker: 'Tea & shake counter', tagline: 'Your neighbourhood café.',
      heroText: 'Colourful mega teas, generous shakes and good coffee, served with a smile, right around the corner.',
      ctaMenu: 'See the menu', ctaFind: 'Find us', heroBadge: 'Patio open all summer',
      heroAlt: 'St-Mos mega tea on the patio', aboutAlt: 'Iced latte',
      aboutKicker: 'Our story', aboutTitle: 'A small counter with a big place in the neighbourhood.',
      about1: 'Le St-Mos is a warm little spot to stop for a mega tea, a shake or a coffee before work, after school or between errands.',
      about2: 'Behind the counter is a small local team that makes every drink by hand, dreams up new flavours and knows the regulars by name.',
      menuKicker: 'At the counter', menuTitle: 'The menu', menuNote: 'Prices in Canadian dollars, taxes extra. The menu changes with the seasons.',
      extras: 'Extras $2: collagen, fibre, electrolytes, probiotics, protein, espresso. Combos: 2 mega teas $19.50 · 2 shakes $18.00 · mega tea + shake $19.50.',
      galKicker: 'In pictures', galTitle: 'Life at St-Mos', galMore: 'Follow us on Instagram →',
      gal: ['Mega tea on the patio', 'Oreo shake', 'Iced latte', 'Mega tea duo', 'Strawberry shortcake shake'],
      hoursKicker: 'Hours & address', hoursTitle: 'Come say hi',
      transit: 'Free street parking and a lot behind the building. Bus stop a 2-minute walk away. Bike racks out front.',
      mapLabel: 'Map', directions: 'Get directions',
      contactTitle: 'A question? Write to us.', phone: 'Phone', email: 'Email',
      fName: 'Name', fEmail: 'Email', fMsg: 'Message', fSend: 'Send',
      thanks: 'Thank you! Message received.', thanksSub: 'We’ll get back to you soon.', rights: 'All rights reserved',
      tabs: ['Mega teas', 'Shakes', 'Coffee & pastries', 'Brunch & light lunch'],
      hours: [['Monday – Tuesday', 'Closed'], ['Wednesday – Friday', '7 am – 6 pm'], ['Saturday', '8 am – 5 pm'], ['Sunday', '9 am – 4 pm']],
      title: 'Le St-Mos · Tea & shake counter',
    },
  };

  // Each item: [name, desc FR, desc EN, price?]. A category-level `price` applies to every item.
  const MENU = [
    { sub: { fr: '24 oz 8,25 $ · 32 oz 11,25 $', en: '24 oz $8.25 · 32 oz $11.25' }, price: [8.25, 11.25], items: [
      ['Fuzzy Peach', 'Aloès, Liftoff, thé · pêche', 'Aloe, Liftoff, tea · peach'],
      ['Pinky Peach', 'Pêche & limonade rose', 'Peach & pink lemonade'],
      ['Cherry Blaster', 'Cerise & lime', 'Cherry & lime'],
      ['Superman', 'Framboise & Mr Freeze bleu', 'Raspberry & blue Mr Freeze'],
      ['Le St-Mos', 'Mr Freeze bleu & pomme verte', 'Blue Mr Freeze & green apple'],
      ['Le Sunset', 'Cerise, fraise & limonade', 'Cherry, strawberry & lemonade'],
      ['Blue Lagoon', 'Mr Freeze bleu & limonade', 'Blue Mr Freeze & lemonade'],
      ['Fraisinette', 'Fraise & pomme verte', 'Strawberry & green apple'],
    ] },
    { sub: { fr: '10,25 $ · 19 g de protéine', en: '$10.25 · 19 g protein' }, price: [10.25], items: [
      ['Bonbon au beurre', 'Caramel au beurre', 'Butterscotch'],
      ['Oréo', 'Biscuits Oréo & chocolat', 'Oreo cookies & chocolate'],
      ['Caramilk', 'Chocolat au lait & caramel', 'Milk chocolate & caramel'],
      ['Skor', 'Caramel croquant', 'Crunchy toffee'],
      ['Tarte aux cerises', 'Cerise & croûte graham', 'Cherry & graham crust'],
      ['Shortcake aux fraises', 'Fraises & biscuit', 'Strawberries & shortbread'],
      ['Pain banane', 'Banane & cannelle', 'Banana & cinnamon'],
      ['Brioche à la cannelle', 'Cannelle & glaçage', 'Cinnamon & icing'],
    ] },
    { sub: { fr: 'Exemples — à confirmer', en: 'Sample items — to confirm' }, items: [
      ['Espresso', 'Simple ou double', 'Single or double', 3.25],
      ['Cappuccino', 'Lait moussé', 'Steamed milk foam', 4.95],
      ['Latté glacé', 'Espresso, lait, glace', 'Espresso, milk, ice', 5.75],
      ['Croissant au beurre', 'Cuit chaque matin', 'Baked every morning', 3.75],
      ['Chocolatine', 'Chocolat noir', 'Dark chocolate', 4.25],
      ['Brioche à la cannelle', 'Glaçage à l’érable', 'Maple glaze', 4.50],
    ] },
    { sub: { fr: 'Exemples — à confirmer', en: 'Sample items — to confirm' }, items: [
      ['Bol yogourt & granola', 'Fruits frais, miel', 'Fresh fruit, honey', 8.95],
      ['Croque-monsieur', 'Jambon, gruyère, béchamel', 'Ham, gruyère, béchamel', 12.50],
      ['Bagel saumon fumé', 'Fromage à la crème, câpres', 'Cream cheese, capers', 13.95],
      ['Sandwich du jour', 'Servi avec salade', 'Served with salad', 11.95],
      ['Soupe maison', 'Selon l’inspiration', 'Chef’s choice', 6.50],
    ] },
  ];

  const fmt = (n, lang) => lang === 'fr' ? n.toFixed(2).replace('.', ',') + ' $' : '$' + n.toFixed(2);

  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };

  const lookup = (t, key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), t);

  let lang = 'fr';
  let tab = 0;

  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.menu-btn');
  const tabsEl = document.querySelector('.tabs');

  function renderMenu() {
    const t = T[lang], c = MENU[tab], i = lang === 'fr' ? 1 : 2;
    tabsEl.replaceChildren(...t.tabs.map((label, k) => {
      const b = el('button', 'tab', label);
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(k === tab));
      b.setAttribute('aria-controls', 'menu-panel');
      b.addEventListener('click', () => { tab = k; renderMenu(); });
      return b;
    }));
    document.getElementById('cat-title').textContent = t.tabs[tab];
    document.getElementById('cat-sub').textContent = c.sub[lang];
    document.getElementById('items').replaceChildren(...c.items.map(it => {
      const li = el('li', 'item');
      const info = el('div', 'stack');
      info.append(el('span', 'item-name', it[0]), el('span', 'item-desc', it[i]));
      const price = c.price ? c.price.map(p => fmt(p, lang)).join(' / ') : fmt(it[3], lang);
      li.append(info, el('span', 'item-price', price));
      return li;
    }));
  }

  function renderHours() {
    document.getElementById('hours-list').replaceChildren(...T[lang].hours.map(([d, h]) => {
      const row = el('div', 'hours-row');
      row.append(el('span', null, d), el('span', null, h));
      return row;
    }));
  }

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'fr';
    const t = T[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelectorAll('[data-i18n]').forEach(n => {
      const v = lookup(t, n.dataset.i18n);
      if (v != null) n.textContent = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(n => {
      const v = lookup(t, n.dataset.i18nAlt);
      if (v != null) n.alt = v;
    });
    document.querySelectorAll('[data-set-lang]').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.setLang === lang));
    });
    menuBtn.textContent = header.classList.contains('open') ? '✕' : t.menuBtn;
    renderMenu();
    renderHours();
    try { localStorage.setItem('stmos-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('[data-set-lang]').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.setLang));
  });

  // Mobile menu
  const toggleMenu = open => {
    header.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '✕' : T[lang].menuBtn;
  };
  menuBtn.addEventListener('click', () => toggleMenu(!header.classList.contains('open')));
  document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });

  // Contact form: no backend yet — show the confirmation state.
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.hidden = true;
    document.getElementById('thanks').hidden = false;
  });

  // Initial language: ?lang=en overrides, then saved choice, else French.
  let initial = 'fr';
  try { initial = localStorage.getItem('stmos-lang') || 'fr'; } catch (e) {}
  const q = new URLSearchParams(location.search).get('lang');
  if (q) initial = q;
  setLang(initial);
})();
