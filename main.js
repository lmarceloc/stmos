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
      perks: [['Fait à la main', 'Chaque boisson préparée sur commande.'], ['Saveurs de saison', 'De nouvelles recettes au fil de l’année.'], ['Terrasse l’été', 'Un coin au soleil pour votre pause.']],
      menuCaps: ['Duo de méga thés', 'Fouetté Oréo', 'Latté glacé', 'Sur la terrasse'],
      extrasTitle: 'Extras', extras: ['Collagène', 'Fibres', 'Électrolytes', 'Probiotiques', 'Protéine', 'Espresso'], extrasEach: 'chacun',
      combosTitle: 'Combos', combosSub: 'Pour partager', combos: ['2 méga thés', '2 fouettés', 'Méga thé + fouetté'],
      openNow: 'Ouvert maintenant · jusqu’à {t}', closedNow: 'Fermé · ouvre {d} à {t}',
      today: 'aujourd’hui', tomorrow: 'demain', days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
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
      perks: [['Made by hand', 'Every drink is made to order.'], ['Seasonal flavours', 'New recipes all year round.'], ['Summer patio', 'A sunny spot for your break.']],
      menuCaps: ['Mega tea duo', 'Oreo shake', 'Iced latte', 'On the patio'],
      extrasTitle: 'Extras', extras: ['Collagen', 'Fibre', 'Electrolytes', 'Probiotics', 'Protein', 'Espresso'], extrasEach: 'each',
      combosTitle: 'Combos', combosSub: 'Made for sharing', combos: ['2 mega teas', '2 shakes', 'Mega tea + shake'],
      openNow: 'Open now · until {t}', closedNow: 'Closed · opens {d} at {t}',
      today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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

  // Placeholder schedule, indexed by weekday (0 = Sunday): [open hour, close hour] or null.
  // Keep in sync with T.*.hours. ROWS maps each displayed hours row to its weekdays.
  const OPEN = [[9, 16], null, null, [7, 18], [7, 18], [7, 18], [8, 17]];
  const ROWS = [[1, 2], [3, 4, 5], [6], [0]];
  const TZ = 'America/Toronto';

  const MENU_IMG = [['images/duo-thes.jpg', 1261], ['images/fouette-oreo.jpg', 1607], ['images/latte-glace.jpg', 1607], ['images/the-terrasse.jpg', 1607]];
  const EXTRA_PRICE = 2;
  const COMBO_PRICES = [19.5, 18, 19.5];

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
    const img = document.getElementById('menu-img');
    if (!img.src.endsWith(MENU_IMG[tab][0])) {
      img.src = MENU_IMG[tab][0];
      img.height = MENU_IMG[tab][1];
    }
    img.alt = t.menuCaps[tab];
    document.getElementById('menu-cap').textContent = t.menuCaps[tab];
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

  function renderAddons() {
    const t = T[lang];
    document.getElementById('extras-price').textContent = `${fmt(EXTRA_PRICE, lang)} ${t.extrasEach}`;
    document.getElementById('extras').replaceChildren(...t.extras.map(x => el('li', 'chip', x)));
    document.getElementById('combos').replaceChildren(...t.combos.map((label, k) => {
      const li = el('li', 'combo');
      li.append(el('span', null, label), el('span', 'combo-price', fmt(COMBO_PRICES[k], lang)));
      return li;
    }));
  }

  // Current weekday and fractional hour at the café.
  function now() {
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
      timeZone: TZ, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
    }).formatToParts(new Date()).map(p => [p.type, p.value]));
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
    return { day, hour: Number(parts.hour) + Number(parts.minute) / 60 };
  }

  const fmtHour = h => lang === 'fr' ? `${h} h` : `${h % 12 || 12} ${h < 12 ? 'am' : 'pm'}`;

  function renderStatus(n) {
    const t = T[lang], today = OPEN[n.day];
    const isOpen = !!today && n.hour >= today[0] && n.hour < today[1];
    let text;
    if (isOpen) {
      text = t.openNow.replace('{t}', fmtHour(today[1]));
    } else {
      for (let k = 0; k < 8; k++) {
        const d = (n.day + k) % 7, o = OPEN[d];
        if (!o || (k === 0 && n.hour >= o[0])) continue;
        const when = k === 0 ? t.today : k === 1 ? t.tomorrow : t.days[d];
        text = t.closedNow.replace('{d}', when).replace('{t}', fmtHour(o[0]));
        break;
      }
    }
    const status = document.getElementById('status');
    status.classList.toggle('is-open', isOpen);
    document.getElementById('status-text').textContent = text;
  }

  function renderHours() {
    const n = now();
    document.getElementById('hours-list').replaceChildren(...T[lang].hours.map(([d, h], k) => {
      const row = el('div', 'hours-row' + (ROWS[k].includes(n.day) ? ' today' : ''));
      row.append(el('span', null, d), el('span', null, h));
      return row;
    }));
    renderStatus(n);
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
    renderAddons();
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

  // Flavour ribbon: drink names from the menu, doubled for a seamless loop.
  const names = [...MENU[0].items, ...MENU[1].items].map(it => it[0]);
  const marquee = document.getElementById('marquee');
  for (let r = 0; r < 2; r++) {
    names.forEach(name => marquee.append(el('span', null, name), el('span', 'star', '✦')));
  }

  // Fade sections in as they scroll into view.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.about .split > *, .menu-head, .menu-body, .addon-card, .gallery > .stack, .bento figure, .hours .split > *, .contact .split > *')
      .forEach(n => { n.classList.add('reveal'); io.observe(n); });
  }

  // Initial language: ?lang=en overrides, then saved choice, else French.
  let initial = 'fr';
  try { initial = localStorage.getItem('stmos-lang') || 'fr'; } catch (e) {}
  const q = new URLSearchParams(location.search).get('lang');
  if (q) initial = q;
  setLang(initial);
})();
