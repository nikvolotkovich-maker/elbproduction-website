// ============================================================
//  ELBPRODUCTION – WEBSITE KONFIGURATION
//  Hier kannst du ALLES ändern – kein HTML-Wissen nötig!
//  Auf GitHub: Datei öffnen → Stift ✏️ → ändern → "Commit changes"
// ============================================================

let SITE = {

  // ----------------------------------------------------------
  // MARKE & KONTAKT
  // Leeres Telefon ('') = Zeile wird ausgeblendet
  // ----------------------------------------------------------
  brand: {
    name: 'elbproduction',
    tagline: 'Social Media Agentur · Hamburg',
    email: 'info@elbproduction.de',      // ← prüfen
    phone: '',                           // ← z. B. '+49 170 1234567'
    address: 'Hamburg',                  // ← optional: Straße / PLZ
  },

  // ----------------------------------------------------------
  // KONTAKTFORMULAR
  // 1. Kostenlos auf formspree.io registrieren → "New Form"
  // 2. Die ID (z. B. xyzabcd) hier statt DEINE_FORM_ID eintragen
  // ----------------------------------------------------------
  formEndpoint: 'https://formspree.io/f/DEINE_FORM_ID',

  // ----------------------------------------------------------
  // FARBEN  (HEX-Codes)
  // ----------------------------------------------------------
  colors: {
    background: '#0A0A0A',
    card:       '#1A1A1A',
    accent:     '#ff6b00',
    accentLight:'#FF8C00',
    text:       '#FFFFFF',
  },

  // ----------------------------------------------------------
  // HERO-SEKTION
  // ----------------------------------------------------------
  hero: {
    badge:    'Social Media Agentur · Hamburg',
    titleLine1: 'Ihr Auftritt.',
    titleLine2: 'Unsere Mission.',
    subtitle: 'Wir verwandeln Betriebe in starke Marken. Videoproduktion, Content-Strategie und Social-Media-Betreuung für Handwerk und Bau – direkt an der Elbe.',
    btnPrimary:   'Projekt starten',
    btnSecondary: 'Unsere Arbeit',
  },

  // ----------------------------------------------------------
  // STATISTIKEN (Zähler-Animation)
  // Nur echte Zahlen eintragen! Kommazahlen mit Punkt: 3.7
  // ----------------------------------------------------------
  stats: [
    { number: 3.7, suffix: 'M',   label: 'Views auf einem organischen Reel' },
    { number: 2,   suffix: '–4×', label: 'Postings pro Woche' },
    { number: 24,  suffix: 'h',   label: 'Antwortzeit auf Anfragen' },
    { number: 100, suffix: '%',   label: 'Fokus auf Handwerk & Bau' },
  ],

  // ----------------------------------------------------------
  // LAUFBAND unter dem Handy – nur LOGOS (png, jpg oder svg)
  // 1. Logos in den Ordner "logos" hochladen
  // 2. Dateinamen hier eintragen – genau gleich schreiben!
  // Mehr Logos: einfach eine Zeile kopieren.
  // Tipp: PNG/SVG mit transparentem Hintergrund werden einheitlich
  //       hell eingefärbt, JPG bleibt in Originalfarben.
  // Fehlt eine Datei, wird sie einfach weggelassen.
  // ----------------------------------------------------------
  marquee: [
       'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
  ],

  // ----------------------------------------------------------
  // LEISTUNGEN (für spätere Erweiterungen)
  // ----------------------------------------------------------
  services: [
    { title: 'Content Creation', description: 'Fotos, Reels und Videos direkt vor Ort.', tags: ['Fotografie', 'Videoproduktion', 'Reels & Stories'] },
    { title: 'Strategie & Beratung', description: 'Klare Social-Media-Strategie mit messbaren Zielen.', tags: ['Plattformstrategie', 'Analyse & Reporting'] },
    { title: 'Channel Management', description: 'Redaktionsplan, Posting und Community-Betreuung.', tags: ['Redaktionsplan', 'Community Mgmt'] },
    { title: 'Performance & Ads', description: 'Werbekampagnen auf Meta und TikTok.', tags: ['Meta Ads', 'TikTok Ads'] },
  ],

  portfolio: [],

  // ----------------------------------------------------------
  // KUNDENSTIMMEN
  // Die Texte in [eckigen Klammern] durch ECHTE Zitate ersetzen
  // (nur mit Erlaubnis des Kunden). Die Klammern dabei mit löschen.
  // Mehr Karten: einfach einen Block { … }, kopieren.
  // Alle Blöcke löschen  →  testimonials: [],  = Abschnitt unsichtbar.
  // ----------------------------------------------------------
  testimonials: [
    {
      text:     '„[Zitat Kunde 1 – z. B. was sich durch die Zusammenarbeit verändert hat]"',
      name:     '[Vorname Nachname]',
      role:     '[Position, Firma]',
      initials: 'AB',
    },
    {
      text:     '„[Zitat Kunde 2 – z. B. wie die Zusammenarbeit abläuft]"',
      name:     '[Vorname Nachname]',
      role:     '[Position, Firma]',
      initials: 'CD',
    },
    {
      text:     '„[Zitat Kunde 3 – z. B. welches Ergebnis es gab]"',
      name:     '[Vorname Nachname]',
      role:     '[Position, Firma]',
      initials: 'EF',
    },
  ],

  // ----------------------------------------------------------
  // CTA-SEKTION
  // ----------------------------------------------------------
  cta: {
    titleLine1: 'Bereit für Ihren',
    titleLine2: 'nächsten Level?',
    subtitle:   'Lassen Sie uns gemeinsam Ihre Social-Media-Präsenz auf das nächste Level bringen. Kostenloses Erstgespräch in Hamburg.',
    btn: 'Kostenloses Gespräch',
  },

  // ----------------------------------------------------------
  // KONTAKTFORMULAR – Dropdown-Optionen
  // ----------------------------------------------------------
  contactServices: [
    'Content Creation',
    'Strategie & Beratung',
    'Channel Management',
    'Performance & Ads',
    'Alles davon',
  ],

  // ----------------------------------------------------------
  // HANDY-VIDEOS (bis zu 3)
  // Videos in den Ordner "videos" hochladen.
  // likes/views/reach/saved = ECHTE Zahlen des jeweiligen Videos
  // ----------------------------------------------------------
  phoneVideos: [
    { src: 'videos/video1.mp4', title: 'Viral\nContent', tag: 'Instagram Reel', sub: 'Hamburg · #trending', likes: '2.2K', views: '580K', reach: '124K', saved: '1.4K' },
    { src: 'videos/video2.mp4', title: 'Starke\nMarke', tag: 'Brand Growth', sub: 'Wachstum · #branding', likes: '5.8K', views: '210K', reach: '380K', saved: '3.2K' },
    { src: 'videos/video3.mp4', title: 'ROI\noptimiert', tag: 'Paid Ads', sub: 'Meta Ads · #performance', likes: '3.1K', views: '95K', reach: '240K', saved: '2.1K' },
  ],

  beforeAfter: { enabled: false },

  // ----------------------------------------------------------
  // SOCIAL MEDIA LINKS  (leer lassen = versteckt)
  // ----------------------------------------------------------
  social: {
    instagram: 'https://www.instagram.com/elbproduction/',
    tiktok:    '',
    linkedin:  '',
  },

};
