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
  // Option A (recommended): Formspree endpoint, e.g. https://formspree.io/f/xxxxxx
  // Option B: leave empty to use mailto fallback (not great)
  formEndpoint: "https://docs.google.com/forms/d/e/1FAIpQLSeGYa9gmN_GSebEiDDc6zKzihukNHNKvgRi-ztL_CwnSXbI3w/formResponse",
  contactPhone: "+48 515 754 720",
  contactEmail: "Mucha.evelina@gmail.com"
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
    hero_note: "To strona publiczna — podeślij link rodzinie i znajomym.",

    details_title: "Szczegóły",
    details_lead: "Najważniejsze informacje w jednym miejscu — a my będziemy aktualizować stronę, gdy pojawią się nowe szczegóły.",
    details_when_title: "Kiedy",
    details_when_text: "Zapiszcie datę — plan dnia podeślemy bliżej wydarzenia.",
    details_where_title: "Gdzie",
    details_where_text: "Warszawa i okolice. Dokładne wskazówki dojazdu uzupełnimy wkrótce.",
    details_where_map: "Otwórz mapę →",
    details_stay_title: "Noclegi",
    details_stay_text: "Polecane hotele / opcje noclegu dodamy tu w kolejnych miesiącach.",

    details_schedule_title: "Plan (wstępnie)",
    schedule_1: "Zbiórka / przyjazd gości",
    schedule_2: "Ceremonia",
    schedule_3: "Toast + życzenia",
    schedule_4: "Kolacja",
    schedule_5: "Tort + zabawa",
    details_schedule_note: "Godziny są orientacyjne — potwierdzimy finalną rozpiskę bliżej terminu.",

    details_dresscode_title: "Dress code",
    details_dresscode_text: "Pałacowo-minimalistycznie: klasyka, stonowane kolory, eleganckie detale.",
    details_gifts_title: "Prezenty",
    details_gifts_text: "Dodamy informację bliżej wydarzenia (jeśli wolicie: lista, koperta, czy coś charytatywnego).",

    rsvp_title: "RSVP",
    rsvp_lead: "Dajcie znać, czy będziecie — zajmie to mniej niż minutę.",
    form_name: "Imię i nazwisko",
    form_email: "E-mail (opcjonalnie)",
    form_phone: "Telefon (opcjonalnie)",
    form_attendance: "Obecność",
    form_choose: "Wybierz…",
    form_yes: "Będę",
    form_no: "Nie dam rady",
    form_guests: "Liczba osób (łącznie)",
    form_diet: "Dieta / alergie",
    form_notes: "Uwagi",
    form_submit: "Wyślij RSVP",
    form_privacy: "Dane tylko do organizacji wesela. Nie spamujemy.",
    rsvp_side_title: "Szybkie info",
    rsvp_side_1: "Jeśli zmienią się plany — wypełnij formularz ponownie (nadpiszemy).",
    rsvp_side_2: "Jeśli ktoś z Was ma specjalne potrzeby — wpisz w „Uwagi”.",
    rsvp_side_3: "Na ostatnią chwilę podeślemy plan dnia i detale dojazdu.",
    contacts_title: "Kontakt",
    contacts_text: "Wstawcie tu numer/WhatsApp lub mail do szybkich pytań.",
    contacts_k1: "Telefon:",
    contacts_k2: "E-mail:",

    faq_title: "FAQ",
    faq_lead: "Najczęstsze pytania. Krótko i konkretnie.",
    faq_1_q: "Czy będą dzieci?",
    faq_1_a: "Wpiszcie w RSVP liczbę osób i uwagi — damy znać, jak planujemy logistykę.",
    faq_2_q: "Czy jest parking?",
    faq_2_a: "Tak — dodamy dokładne wskazówki dojazdu i info o parkingu bliżej terminu.",
    faq_3_q: "Czy będzie transport?",
    faq_3_a: "Rozważamy zorganizowany transport — damy znać na stronie, jeśli potwierdzimy.",
    faq_4_q: "Do kiedy RSVP?",
    faq_4_a: "Na teraz prosimy o wstępne potwierdzenie. Finalny termin podamy później.",

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
    hero_note: "Public page — share the link with family and friends.",

    details_title: "Details",
    details_lead: "All key information in one place — we’ll keep this page updated as new details are confirmed.",
    details_when_title: "When",
    details_when_text: "Save the date — we’ll share the final timeline closer to the wedding.",
    details_where_title: "Where",
    details_where_text: "Warsaw area. We’ll add precise directions soon.",
    details_where_map: "Open map →",
    details_stay_title: "Accommodation",
    details_stay_text: "Recommended hotels / stay options will be added in the coming months.",

    details_schedule_title: "Draft timeline",
    schedule_1: "Guests arrival",
    schedule_2: "Ceremony",
    schedule_3: "Toast & wishes",
    schedule_4: "Dinner",
    schedule_5: "Cake & party",
    details_schedule_note: "Times are approximate — the final schedule will be confirmed closer to the date.",

    details_dresscode_title: "Dress code",
    details_dresscode_text: "Palace-minimal: classic silhouettes, muted tones, elegant details.",
    details_gifts_title: "Gifts",
    details_gifts_text: "We’ll share gift preferences closer to the date (wishlist / envelope / charity option).",

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
    form_diet: "Dietary / allergies",
    form_notes: "Notes",
    form_submit: "Send RSVP",
    form_privacy: "Used only for wedding planning. No spam.",
    rsvp_side_title: "Quick notes",
    rsvp_side_1: "Plans changed? Submit the form again (we’ll overwrite).",
    rsvp_side_2: "Any special needs? Put them in “Notes”.",
    rsvp_side_3: "We’ll share final directions and timeline closer to the wedding.",
    contacts_title: "Contact",
    contacts_text: "Add a phone/WhatsApp or email for quick questions.",
    contacts_k1: "Phone:",
    contacts_k2: "Email:",

    faq_title: "FAQ",
    faq_lead: "Most common questions — short and clear.",
    faq_1_q: "Will children be welcome?",
    faq_1_a: "Please include the total number of guests and any notes in the RSVP — we’ll confirm logistics.",
    faq_2_q: "Is there parking?",
    faq_2_a: "Yes — we’ll share detailed directions and parking info closer to the date.",
    faq_3_q: "Will there be transportation?",
    faq_3_a: "We are considering organized transport — we’ll update the page if confirmed.",
    faq_4_q: "RSVP deadline?",
    faq_4_a: "For now, we’d like an initial confirmation. We’ll set a final deadline later.",

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
  $("#mapsLink").href = CONFIG.mapsUrl;

  // contacts
  setText("contactPhone", CONFIG.contactPhone);
  setText("contactEmail", CONFIG.contactEmail);

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
    notes.placeholder = lang === "pl" ? "Np. potrzeba noclegu, wózek dziecięcy itd." : "E.g. accommodation needed, stroller access, etc.";
  }
  const diet = document.querySelector('input[name="diet"]');
  if(diet){
    diet.placeholder = lang === "pl" ? "np. wege, bez glutenu…" : "e.g. vegetarian, gluten-free…";
  }
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

async function handleRSVP(){
  // attendance buttons behavior
  $$(".rsvp-btn").forEach(btn => btn.addEventListener('click', ()=>{
    const v = btn.dataset.value;
    const hf = document.getElementById('attendanceField'); if(hf) hf.value = v;
    $$(".rsvp-btn").forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }));

  const form = $("#rsvpForm");
  const status = $("#formStatus");
  if(!form || !status) return;

  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form__status";
      status.textContent = "";

      const lang = currentLang();
      const okMsg = lang==="pl" ? "Dzięki! RSVP zapisane." : "Thank you — your RSVP is recorded.";
      const okMsg_both = "Dzięki! RSVP zapisane. / Thank you — your RSVP is recorded.";
      const errMsg = lang==="pl" ? "Coś nie poszło. Spróbuj ponownie lub skontaktuj się z nami." : "Something went wrong. Please try again or contact us.";

      // Prepare mapping for Google Forms entries
      const mapping = {"name": "entry.1057752695", "attendance": "entry.98626208", "guests_adults": "entry.898899753", "guests_children": "entry.633681487", "diet": "entry.681235079", "notes": "entry.678744193"};

      // build payload
      const formData = new FormData(form);
      const payload = new URLSearchParams();
      for (const [k, v] of formData.entries()) {
        if (mapping[k]) payload.append(mapping[k], v);
      }

      // include hidden event info
      const evDate = form.querySelector('input[name="event_date"]') ? form.querySelector('input[name="event_date"]').value : "";
      const evCity = form.querySelector('input[name="event_city"]') ? form.querySelector('input[name="event_city"]').value : "";
      const evVenue = form.querySelector('input[name="event_venue"]') ? form.querySelector('input[name="event_venue"]').value : "";
      if(evDate) payload.append("entry.event_date", evDate);
      if(evCity) payload.append("entry.event_city", evCity);
      if(evVenue) payload.append("entry.event_venue", evVenue);

      // Send to Google Forms (no-cors)
      try {
        await fetch("https://docs.google.com/forms/d/e/1FAIpQLSeGYa9gmN_GSebEiDDc6zKzihukNHNKvgRi-ztL_CwnSXbI3w/formResponse", {
          method: "POST",
          mode: "no-cors",
          body: payload
        });
        form.reset();
        $("#langField").value = lang;
        status.classList.add("ok");
        status.textContent = okMsg_both;
      } catch (err) {
        // fallback: save locally and offer CSV download
        const data = Object.fromEntries(new FormData(form).entries());
        const key = "rsvp_submissions";
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        prev.push(data);
        localStorage.setItem(key, JSON.stringify(prev));
        status.classList.add("err");
        status.textContent = "Problem z wysłaniem — odpowiedź zapisana lokalnie. / Submission saved locally due to network issue.";
      }
    });


      if(res.ok){
        form.reset();
        $("#langField").value = lang;
        status.classList.add("ok");
        status.textContent = okMsg_both;
      }else{
        status.classList.add("err");
        status.textContent = errMsg;
      }
    }catch(_){
      status.classList.add("err");
      status.textContent = errMsg;
    }
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
}

document.addEventListener("DOMContentLoaded", init);
