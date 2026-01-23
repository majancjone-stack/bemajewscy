// ====== CONFIG (edit these) ======
const CONFIG = {
  coupleNamesPL: "Bartek & Ewelina",
  coupleNamesEN: "Bartek & Ewelina",
  monogram: "B.M × E.M",
  dateISO: "2026-08-21T16:00:00+02:00", // Europe/Warsaw (CEST in Aug)
  dateShort: "21.08.2026",
  dateLongPL: "21 sierpnia 2026",
  dateLongEN: "21 August 2026",
  cityPL: "Warszawa",
  cityEN: "Warsaw",
  venuePL: "Pałac Żółwin",
  venueEN: "Żółwin Palace",
  // Paste a Google Maps link to the venue here (share link):
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pa%C5%82ac%20%C5%BB%C3%B3%C5%82win",
  // RSVP backend:
  // We'll direct guests to a prefilled Google Forms view. The base of this URL
  // (without query parameters) is used in handleRSVP to assemble the final link.
  formEndpoint: "https://docs.google.com/forms/d/e/1FAIpQLSeGYa9gmN_GSebEiDDc6zKzihukNHNKvgRi-ztL_CwnSXbI3w/viewform",
  contactPhone: "Ewelina: +48 515 754 720 · Bartek: +48 784 032 813",
  contactEmail: "BEMajewscy@gmail.com"
};

// ====== i18n strings ======
const I18N = {
  pl: {
    nav_details: "Szczegóły",
    nav_rsvp: "RSVP",
    nav_faq: "FAQ",
    hero_eyebrow: "SAVE THE DATE",
    hero_date_long: CONFIG.dateLongPL,
    hero_city: CONFIG.cityPL,
    hero_venue: CONFIG.venuePL,
    cd_days: "dni",
    cd_hours: "godz.",
    cd_mins: "min",
    cta_rsvp: "Potwierdź obecność",
    cta_details: "Zobacz szczegóły",
    // hero_note removed (not used in markup)

    details_title: "Szczegóły",
    // details_lead removed (not used in markup)
    details_when_title: "Kiedy",
    // updated to emphasise ceremony time at the palace
    // Invite guests to a garden ceremony at the palace at 16:00
    details_when_text: "Zapraszamy na Ceremonię w ogrodzie Pałacu o godzinie 16:00",
    details_where_title: "Gdzie",
    // updated description of the venue
    details_where_text: "XIX-wieczny późnoklasycystyczny pałac ok. 30 minut od Warszawy.",
    // Keep translation for map link though it is no longer displayed in the UI
    // Unused keys removed to keep the dictionary clean

    // remove provisional note from the schedule title
    details_schedule_title: "Plan",
    // Each schedule item now only contains the name of the activity. The times
    // are defined in the markup itself for better styling and separation.
    schedule_1: "Przyjazd gości",
    schedule_2: "Ceremonia",
    schedule_3: "Toast & Życzenia",
    schedule_4: "Kolacja & Przemowy",
    schedule_5: "Zabawa",
    details_schedule_note: "Godziny są orientacyjne — potwierdzimy finalną rozpiskę bliżej terminu.",

    details_dresscode_title: "Dress code",
    // Dress code emphasises a palace‑garden vibe: classic, muted colours, elegant details — imagine a garden party with a hint of British elegance. Hats welcome.
    details_dresscode_text: "Pałacowo-ogrodowy: klasyka, stonowane kolory, eleganckie detale. Wyobraźcie sobie garden party z nutą brytyjskiej elegancji — kapelusze mile widziane.",
    details_gifts_title: "Prezenty",
    // Updated gifts text: kindly ask guests to bring an envelope instead of flowers
    details_gifts_text: "Ucieszymy się z koperty zamiast kwiatów — tradycyjne bukiety nie są potrzebne.",

    // map card title
    details_map_title: "Mapa",

    rsvp_title: "RSVP",
    rsvp_lead: "Dajcie znać, czy będziecie — zajmie to mniej niż minutę.",
    form_name: "Imię i nazwisko",
    form_email: "E-mail (opcjonalnie)",
    form_phone: "Telefon (opcjonalnie)",
    form_attendance: "Obecność",
    form_choose: "Wybierz…",
    form_yes: "Będę",
    form_no: "Nie będzie mnie",
    form_guests: "Liczba osób (łącznie)",
    // New labels for adults and children counts
    form_guests_adults: "Łącznie dorosłych",
    form_guests_children: "Łącznie dzieci",
    form_diet: "Dieta / alergie",
    form_diet2: "Dieta (osoby towarzyszącej)",
    form_notes: "Uwagi",
    form_submit: "Wyślij RSVP",
    // form_privacy removed (not used in markup)
    rsvp_side_title: "Szybkie info",
    rsvp_side_1: "Prosimy o odpowiedź do 28 lutego 2026.",
    // New quick info explaining that guests should confirm attendance for themselves and their families
    rsvp_side_add: "Prosimy o potwierdzenie obecności w swoim imieniu oraz osoby towarzyszącej/ rodziny, poprzez wskazanie ilości osób dorosłych oraz dzieci.",
    // Quick info: third point instructs guests to list allergies, special needs as well as children's age and diet in the notes
    rsvp_side_2: "Alergie, specjalne potrzeby, wiek i dieta dzieci prosimy wpisać w “Uwagi”.",
    // Fourth point encourages an adults‑only celebration
    rsvp_side_3: "Zachęcamy do przybycia bez dzieci i dzikiej zabawy z nami do białego rana, decyzja należy do Was.",
    contacts_title: "Kontakt",
    // contacts_text removed (not used in markup)
    contacts_k1: "Telefon:",
    contacts_k2: "E-mail:",

    faq_title: "FAQ",
    // faq_lead removed (not used in markup)
    faq_1_q: "Czy będą dzieci?",
    // Encourage guests to come without children and party with us till morning
    faq_1_a: "Zachęcamy do przybycia bez dzieci i dzikiej zabawy z nami do białego rana, decyzja należy do Was.",
    faq_2_q: "Czy jest parking?",
    faq_2_a: "Tak — dodamy dokładne wskazówki dojazdu i info o parkingu bliżej terminu.",
    // The third FAQ slot is unused; we omit it to avoid old text resurfacing
    faq_3_q: "",
    faq_3_a: "",
    // RSVP deadline question and answer
    faq_4_q: "Do kiedy RSVP?",
    faq_4_a: "Prosimy o potwierdzenie obecności do 28 lutego 2026.",

    footer_made: "Widzimy się"
  },

  en: {
    nav_details: "Details",
    nav_rsvp: "RSVP",
    nav_faq: "FAQ",
    hero_eyebrow: "SAVE THE DATE",
    hero_date_long: CONFIG.dateLongEN,
    hero_city: CONFIG.cityEN,
    hero_venue: CONFIG.venueEN,
    cd_days: "days",
    cd_hours: "hrs",
    cd_mins: "min",
    cta_rsvp: "RSVP now",
    cta_details: "View details",
    // hero_note removed (not used in markup)

    details_title: "Details",
    // details_lead removed (not used in markup)
    details_when_title: "When",
    // Invite guests to a garden ceremony at the palace at 16:00
    details_when_text: "Join us for a garden ceremony at the Palace at 16:00",
    details_where_title: "Where",
    // updated description of the venue in English
    details_where_text: "A 19th‑century late‑Classicist palace about 30 minutes from Warsaw.",
    // Unused key removed to keep dictionary clean
    // Unused keys removed to keep the dictionary clean

    // shorten to simply "Timeline" in English
    details_schedule_title: "Timeline",
    // Each schedule item now only contains the name of the activity. The times
    // are defined in the markup itself for better styling and separation.
    schedule_1: "Guests arrival",
    schedule_2: "Ceremony",
    schedule_3: "Toast & wishes",
    schedule_4: "Dinner & speeches",
    schedule_5: "Party",
    details_schedule_note: "Times are approximate — the final schedule will be confirmed closer to the date.",

    details_dresscode_title: "Dress code",
    // Dress code emphasises a palace‑garden vibe: classic silhouettes, muted tones, elegant details — imagine a garden party with a hint of British elegance. Hats welcome.
    details_dresscode_text: "Palace‑garden: classic silhouettes, muted tones, elegant details. Imagine a garden party with a touch of British elegance — hats welcome.",
    details_gifts_title: "Gifts",
    // Updated gifts text: we would appreciate an envelope instead of flowers
    details_gifts_text: "We’d appreciate an envelope instead of flowers — traditional bouquets aren’t necessary.",

    // map card title
    details_map_title: "Map",

    rsvp_title: "RSVP",
    rsvp_lead: "Please let us know if you can make it — it takes less than a minute.",
    form_name: "Full name",
    form_email: "Email (optional)",
    form_phone: "Phone (optional)",
    form_attendance: "Attendance",
    form_choose: "Choose…",
    form_yes: "Yes, I will attend",
    form_no: "Sorry, I can't",
    form_guests: "Number of guests (total)",
    // New labels for adults and children counts
    form_guests_adults: "Adults (total)",
    form_guests_children: "Children (total)",
    form_diet: "Dietary / allergies",
    form_diet2: "Dietary (plus-one)",
    form_notes: "Notes",
    form_submit: "Send RSVP",
    // form_privacy removed (not used in markup)
    rsvp_side_title: "Quick notes",
    rsvp_side_1: "Please RSVP by 28 February 2026.",
    // Third point instructs guests to list allergies, special needs and children's age and diet in the notes
    rsvp_side_2: "Please include any allergies, special needs, children's ages and diet in “Notes”.",
    // Fourth point encourages an adults‑only celebration
    rsvp_side_3: "We encourage an adults-only celebration and a long night of dancing — the decision is yours.",
    // New quick info explaining that guests should confirm numbers of adults and children
    rsvp_side_add: "Please confirm your attendance for yourself and your plus‑one/family by indicating the number of adults and children.",
    contacts_title: "Contact",
    // contacts_text removed (not used in markup)
    contacts_k1: "Phone:",
    contacts_k2: "Email:",

    faq_title: "FAQ",
    // faq_lead removed (not used in markup)
    faq_1_q: "Will children be welcome?",
    faq_1_a: "We encourage you to come without children and party with us till morning — the decision is yours.",
    faq_2_q: "Is there parking?",
    faq_2_a: "Yes — we’ll share detailed directions and parking info closer to the date.",
    // The third FAQ slot is unused; leaving it blank to avoid old content
    faq_3_q: "",
    faq_3_a: "",
    faq_4_q: "RSVP deadline?",
    faq_4_a: "Please RSVP by 28 February 2026.",

    footer_made: "See you on"
  }
};

// ====== helpers ======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function setText(id, text){ const el = document.getElementById(id); if(el) el.textContent = text; }

function applyConfig(){
  setText("coupleNames", I18N[currentLang()].hero_eyebrow ? (currentLang()==="pl" ? CONFIG.coupleNamesPL : CONFIG.coupleNamesEN) : CONFIG.coupleNamesPL);
  setText("monogram", CONFIG.monogram);
  setText("dateShort", CONFIG.dateShort);
  setText("footerDate", CONFIG.dateShort);

  // venue/city
  setText("footerVenue", currentLang()==="pl" ? CONFIG.venuePL : CONFIG.venueEN);
  // Only set the map link href if the element exists. The link has been removed from the UI.
  const mapsLinkEl = document.getElementById('mapsLink');
  if(mapsLinkEl) mapsLinkEl.href = CONFIG.mapsUrl;

  // contacts
  setText("contactPhone", CONFIG.contactPhone);
  setText("contactEmail", CONFIG.contactEmail);
  const ce = document.getElementById("contactEmail");
  if(ce && ce.tagName === "A") ce.href = "mailto:" + CONFIG.contactEmail;

  // form endpoint
  const form = $("#rsvpForm");
  if(CONFIG.formEndpoint && form) form.action = CONFIG.formEndpoint;
}

function currentLang(){
  return (localStorage.getItem("lang") || document.documentElement.lang || "pl").toLowerCase().startsWith("en") ? "en" : "pl";
}

function setLang(lang){
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  $("#langField").value = lang;

  // toggle buttons state
  $$(".lang__btn").forEach(btn => btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false"));

  // translate texts
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[lang][key];
    if(typeof val === "string") el.textContent = val;
  });

  // dynamic labels (names)
  setText("coupleNames", lang === "pl" ? CONFIG.coupleNamesPL : CONFIG.coupleNamesEN);
  setText("dateLong", lang === "pl" ? CONFIG.dateLongPL : CONFIG.dateLongEN);
  setText("city", lang === "pl" ? CONFIG.cityPL : CONFIG.cityEN);
  setText("venue", lang === "pl" ? CONFIG.venuePL : CONFIG.venueEN);
  setText("footerVenue", lang === "pl" ? CONFIG.venuePL : CONFIG.venueEN);

  // update placeholders
  const notes = document.querySelector('textarea[name="notes"]');
  if(notes){
    // Provide a language‑specific placeholder instructing guests to list any allergies, children's age and diet (if applicable) and special requirements.
    if(lang === 'pl'){
      notes.placeholder = "Prosimy o wypisanie alergii, wieku oraz diety dzieci (jeśli dotyczy) oraz ewentualnych specjalnych potrzeb";
    } else {
      notes.placeholder = "Please list any allergies, children's age and diet (if applicable) and any special requirements";
    }
  }
  // Diet fields are selects now, so no placeholders are set

  // The timeline items are specified in the HTML with separate time and text spans. The names
  // translate automatically via data‑i18n attributes.

  // update attendance button labels based on language
  $$('.rsvp-btn').forEach(btn => {
    if(btn.dataset.value === 'yes'){
      btn.textContent = I18N[lang].form_yes;
    } else if(btn.dataset.value === 'no'){
      btn.textContent = I18N[lang].form_no;
    }
  });
}

function pad(n){ return String(n).padStart(2,"0"); }

function updateCountdown(){
  const target = new Date(CONFIG.dateISO).getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000*60*60*24));
  diff -= days * (1000*60*60*24);
  const hours = Math.floor(diff / (1000*60*60));
  diff -= hours * (1000*60*60);
  const mins = Math.floor(diff / (1000*60));

  setText("cd_days", String(days));
  setText("cd_hours", pad(hours));
  setText("cd_mins", pad(mins));
}

function handleRSVP(){
  // toggle attendance buttons to fill hidden field
  $$(".rsvp-btn").forEach(btn => btn.addEventListener('click', () => {
    const value = btn.dataset.value;
    const hidden = document.getElementById('attendanceField');
    if(hidden) hidden.value = value;
    $$(".rsvp-btn").forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }));

  const form = $("#rsvpForm");
  const status = $("#formStatus");
  if(!form) return;

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Build a prefilled URL for the Google Form. We map our local form
    // fields to the corresponding Google Forms entry identifiers. We also
    // convert certain values to human‑readable labels matching the sample
    // given by the couple (e.g. attendance options, diet names).
    const mapping = {
      name: 'entry.1057752695',
      attendance: 'entry.98626208',
      guests_adults: 'entry.898899753',
      guests_children: 'entry.633681487',
      diet: 'entry.681235079',
      diet2: 'entry.2116388700',
      notes: 'entry.678744193'
    };
    const fd = new FormData(form);
    const params = new URLSearchParams();
    for(const [key, val] of fd.entries()){
      if(!mapping[key]) continue;
      let out = val;
      // Convert boolean values to strings used in the Google Form
      if(key === 'attendance'){
        out = (val === 'yes') ? 'Tak, będę / Yes, I will attend' : 'Nie będzie mnie / No, I cannot attend';
      } else if(key === 'diet' || key === 'diet2'){
        if(val === 'standard') out = 'Standard';
        else if(val === 'wege') out = 'Wege';
        else if(val === 'vegan') out = 'Vegan';
      }
      params.append(mapping[key], out);
    }
    // Compose the final URL for the form response (not the viewform) and send
    // the RSVP via a background request. This avoids redirecting the user to
    // Google Forms while still submitting the data. We cannot fetch
    // cross-origin resources with CORS, but posting with "no-cors" mode
    // allows the request to succeed silently.
    const base = (form.action || CONFIG.formEndpoint).replace('/viewform','/formResponse');
    const submitUrl = base;
    fetch(submitUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    }).catch(() => {/* ignore errors due to no-cors */});

    // Display a success message to the user and reset the form. We cannot
    // detect an actual response due to no-cors restrictions, so we assume
    // success.
    if(status){
      status.className = 'form__status ok';
      status.textContent = currentLang() === 'pl' ?
        'Dziękujemy! Twoje zgłoszenie zostało zapisane.' :
        'Thank you! Your RSVP has been recorded.';
    }
    // Reset the form to its initial state. This clears input values but does
    // not automatically update the active state of the attendance buttons.
    form.reset();
    // Remove any active classes from the attendance buttons so no option
    // appears selected after resetting the form. Guests will need to re‑select
    // their attendance when submitting a new RSVP.
    $$('.rsvp-btn').forEach(b => b.classList.remove('active'));
  });
}

function init(){
  // lang buttons
  $$(".lang__btn").forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.lang)));

  // apply lang + config
  const lang = currentLang();
  setLang(lang);
  applyConfig();

  // countdown
  updateCountdown();
  setInterval(updateCountdown, 20_000);

  // RSVP
  handleRSVP();

  // Mobile menu toggle: clicking the hamburger button will toggle
  // the visibility of the nav on small screens. The nav element
  // gains a `.show` class to override its default display:none style
  // defined in the CSS media query. This ensures accessibility
  // across devices while keeping the header clean on desktop.
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.topnav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
