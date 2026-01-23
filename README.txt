# Palace-minimal wedding website (PL/EN) — 21.08.2026 • Warszawa • Pałac Żółwin

## Co dostajesz
- One-page strona ślubna (mobilna, minimalistyczna, "pałacowa")
- Przełącznik języka PL/EN
- Sekcje: Save the Date, Szczegóły, RSVP (formularz), FAQ, Kontakt
- Odliczanie do daty
- Gotowe do wrzucenia na hosting statyczny (Netlify / Vercel / GitHub Pages)

---

## 1) Uzupełnij konfigurację (2 min)
Otwórz `script.js` i edytuj obiekt `CONFIG`:

- `coupleNamesPL` / `coupleNamesEN` — Wasze imiona
- `monogram` — np. "A × B"
- `mapsUrl` — wklej link z Google Maps do Pałacu Żółwin (Share → Copy link)
- `contactPhone` / `contactEmail`

### RSVP — gdzie mają wpadać odpowiedzi?
Najprościej: **Formspree** (działa bez backendu)
1. Załóż darmowe konto na Formspree
2. Utwórz nowy formularz i skopiuj endpoint (np. `https://formspree.io/f/abcdwxyz`)
3. Wklej go w `CONFIG.formEndpoint`

> Jeśli `formEndpoint` zostawisz puste, strona użyje awaryjnego `mailto:` (mniej wygodne, ale działa).

---

## 2) Publikacja (Netlify — najszybciej)
1. Wejdź na Netlify
2. "Add new site" → "Deploy manually"
3. Przeciągnij folder z plikami (`index.html`, `styles.css`, `script.js`)
4. Gotowe — dostaniesz publiczny link

### Własna domena
W Netlify: Site settings → Domain management → Add domain → podążaj za instrukcją DNS.

---

## 3) Edycja treści
- Teksty są w `script.js` w obiekcie `I18N`.
- FAQ możesz dopisać w `index.html` (sekcja `#faq`).
- Godziny w harmonogramie w `index.html` (lista w `timeline`).

---

## 4) Bezpieczeństwo / prywatność
Strona jest publiczna. Jeśli chcesz wersję "z hasłem", najprościej:
- Netlify: password protection przez Netlify Identity / Basic Auth (lub prosta bramka w JS — mniej bezpieczne)

---

Powodzenia — i niech to będzie najładniejsza strona ślubna w Twoim feedzie.
