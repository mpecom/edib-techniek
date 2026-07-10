import type { ReactNode } from "react";
import BespaarModule from "./BespaarModule";

/* ---------------------------------------------------------------- data --- */

const NAV = [
  { href: "#airco", label: "Airco" },
  { href: "#bespaarmodule", label: "Bespaarcheck" },
  { href: "#warmtepompen", label: "Warmtepompen" },
  { href: "#cv-ketels", label: "CV-ketels" },
  { href: "#onderhoud", label: "Onderhoud" },
  { href: "#contact", label: "Contact" },
];

/* --- Daikin airco-modellen (echte modellen; specs indicatief) ------------ */
const DAIKIN = [
  {
    id: "stylish",
    name: "Daikin Stylish",
    tag: "Design",
    featured: false,
    body: "Compacte designunit met een strak front in wit, zilver of blackwood. Ingebouwde wifi en intelligente sensoren.",
    specs: ["Vanaf 19 dB(A)", "Energielabel tot A+++", "2,0 – 4,2 kW", "Wifi standaard"],
    finish: "from-sky-100 to-white",
  },
  {
    id: "perfera",
    name: "Daikin Perfera",
    tag: "Zuinigst",
    featured: true,
    body: "Onze bestseller. Topefficiëntie, uitstekende verwarmingsprestaties tot -15 °C en fluisterstil dankzij de 3D-luchtstroom.",
    specs: ["Vanaf 19 dB(A)", "Energielabel A+++ / A+++", "2,0 – 7,1 kW", "Verwarmt tot −15 °C"],
    finish: "from-emerald-100 to-white",
  },
  {
    id: "emura",
    name: "Daikin Emura",
    tag: "Premium",
    featured: false,
    body: "Iconisch, in aluminium uitgevoerd design. Een statement aan de muur met de prestaties van Daikin's topklasse.",
    specs: ["Vanaf 19 dB(A)", "Energielabel tot A+++", "2,0 – 5,0 kW", "Aluminium afwerking"],
    finish: "from-slate-100 to-white",
  },
  {
    id: "comfora",
    name: "Daikin Comfora",
    tag: "Comfort",
    featured: false,
    body: "De ideale alrounder voor dagelijks comfort. Betrouwbaar koelen en verwarmen tegen een aantrekkelijke prijs.",
    specs: ["Vanaf 20 dB(A)", "Energielabel tot A++", "2,0 – 6,0 kW", "Wifi optioneel"],
    finish: "from-amber-100 to-white",
  },
  {
    id: "sensira",
    name: "Daikin Sensira",
    tag: "Instapmodel",
    featured: false,
    body: "Scherp geprijsd instapmodel met de betrouwbaarheid van Daikin. Perfect voor een slaapkamer of thuiskantoor.",
    specs: ["Vanaf 20 dB(A)", "Energielabel tot A++", "2,0 – 5,0 kW", "Beste prijs/kwaliteit"],
    finish: "from-indigo-100 to-white",
  },
  {
    id: "multi",
    name: "Daikin Multi-split",
    tag: "Meerdere ruimtes",
    featured: false,
    body: "Eén buitenunit voor meerdere binnenunits. Koel en verwarm woonkamer, slaapkamers en kantoor met één systeem.",
    specs: ["2 tot 5 binnenunits", "Combineer alle modellen", "Ruimtebesparend", "Individueel regelbaar"],
    finish: "from-teal-100 to-white",
  },
];

/* --- Diensten naast airco ------------------------------------------------- */
const SERVICES = [
  {
    id: "warmtepompen",
    icon: "🌡️",
    tag: "Warmtepompen",
    title: "Duurzaam verwarmen zonder gas",
    body: "Hybride of volledig elektrische warmtepompen van Daikin (Altherma). Lagere energierekening, aardgasvrij en klaar voor de toekomst — met advies over de ISDE-subsidie.",
    specs: ["Hybride & all-electric", "Daikin Altherma", "Geschikt voor lage temperatuur", "ISDE-subsidie mogelijk"],
  },
  {
    id: "cv-ketels",
    icon: "🔥",
    tag: "CV-ketels",
    title: "Vervanging & installatie van cv-ketels",
    body: "Toe aan een nieuwe ketel? Wij leveren en plaatsen zuinige HR-ketels van A-merken zoals Remeha, Intergas en Nefit. Snel gepland, netjes afgemonteerd.",
    specs: ["HR-ketels A-merken", "Remeha · Intergas · Nefit", "Snelle plaatsing", "Inclusief inbedrijfstelling"],
  },
  {
    id: "onderhoud",
    icon: "🛠️",
    tag: "Onderhoud & service",
    title: "Onderhoud aan airco, warmtepomp & cv",
    body: "Periodiek onderhoud houdt je installatie zuinig, gezond en storingsvrij. Met een servicecontract regelen wij de jaarlijkse controle automatisch voor je.",
    specs: ["Jaarlijkse controle", "Reiniging & filtercheck", "Storingsdienst", "Servicecontract mogelijk"],
  },
];

/* --- Onderhoudspakketten -------------------------------------------------- */
const PLANS = [
  {
    name: "Airco onderhoud",
    price: "€ 99",
    period: "per beurt",
    body: "Reiniging, filtercontrole, lekdichtheid en prestatiecheck van je airco.",
    points: ["Binnen- & buitenunit gereinigd", "Filter- en koudemiddelcheck", "Prestatie- en lektest"],
    highlight: false,
  },
  {
    name: "Servicecontract",
    price: "€ 12,50",
    period: "per maand",
    body: "Jaarlijks onderhoud automatisch geregeld, met voorrang bij storingen.",
    points: ["Jaarlijkse onderhoudsbeurt", "Voorrang bij storingen", "Korting op onderdelen", "Geen omkijken naar planning"],
    highlight: true,
  },
  {
    name: "CV & warmtepomp",
    price: "€ 119",
    period: "per beurt",
    body: "Onderhoud en veiligheidscontrole van je cv-ketel of warmtepomp.",
    points: ["Volledige inspectie", "Reiniging & afstelling", "Veiligheidscontrole"],
    highlight: false,
  },
];

/* --- Werkwijze ------------------------------------------------------------ */
const STEPS = [
  { n: "01", title: "Vrijblijvend advies", body: "We bespreken je wensen en de ruimte — telefonisch of bij je thuis. Je ontvangt een heldere offerte." },
  { n: "02", title: "Vakkundige installatie", body: "Onze eigen F-gassen gecertificeerde monteurs plaatsen je installatie netjes en op afspraak." },
  { n: "03", title: "Uitleg & oplevering", body: "We stellen alles in, leggen de bediening uit en ruimen netjes op. Klaar voor gebruik." },
  { n: "04", title: "Service & onderhoud", body: "Ook daarna staan we voor je klaar met onderhoud en een storingsdienst waar je op kunt rekenen." },
];

const USPS = [
  "Erkend Daikin-installateur met F-gassen gecertificeerde monteurs",
  "Eigen monteurs — geen onderaannemers",
  "Eén vast aanspreekpunt van offerte tot oplevering",
  "Transparante prijzen, geen verrassingen achteraf",
  "Fabrieksgarantie netjes voor je geregeld",
  "Ook ná de installatie staan we voor je klaar",
];

const FAQ = [
  {
    q: "Welke Daikin airco past bij mij?",
    a: "Dat hangt af van de ruimte, isolatie en jouw wensen op het gebied van design en geluid. Wij adviseren vrijblijvend welk model en vermogen het beste past — van de zuinige Perfera tot de designvolle Stylish.",
  },
  {
    q: "Kan een airco ook verwarmen?",
    a: "Ja. Een moderne Daikin-airco is een lucht-lucht warmtepomp en verwarmt zeer efficiënt, ook bij vriestemperaturen. Zo bespaar je in het tussenseizoen op je gasverbruik.",
  },
  {
    q: "Krijg ik subsidie op een warmtepomp?",
    a: "Voor veel hybride en all-electric warmtepompen geldt de ISDE-subsidie. Wij helpen je bij de modelkeuze en leggen uit waar je op moet letten voor de aanvraag.",
  },
  {
    q: "Hoe vaak moet een airco onderhouden worden?",
    a: "We adviseren jaarlijks onderhoud. Dat houdt je installatie zuinig, hygiënisch en storingsvrij, en behoudt je fabrieksgarantie. Met een servicecontract regelen we dit automatisch.",
  },
];

const STATS = [
  { value: "500+", label: "installaties uitgevoerd" },
  { value: "4,9★", label: "gemiddelde klantbeoordeling" },
  { value: "5 jaar", label: "garantie op installatie" },
];

/* ---------- placeholder contactgegevens — vervang met echte data ---------- */
const CONTACT = {
  phone: "06 12 34 56 78",
  phoneHref: "tel:+31612345678",
  whatsapp: "https://wa.me/31612345678",
  email: "info@edibtechniek.nl",
  address: "Voorbeeldstraat 1, 1234 AB Plaats",
};

/* ---------------------------------------------------------------- atoms --- */

function Check() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none text-emerald-500" fill="currentColor">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.42 0L3.3 9.7a1 1 0 1 1 1.4-1.42l3.07 3.06 6.8-6.79a1 1 0 0 1 1.42 0Z" />
    </svg>
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------- header ---- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">E</span>
          Edib <span className="text-slate-400">Techniek</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className="hidden text-sm font-semibold text-slate-700 transition hover:text-emerald-600 sm:inline-block"
          >
            {CONTACT.phone}
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:inline-block"
          >
            Offerte aanvragen
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-slate-700 [&::-webkit-details-marker]:hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-1 block rounded-lg bg-emerald-500 px-3 py-2 text-center text-sm font-semibold text-white">
                Offerte aanvragen
              </a>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

/* ---------------------------------------------------------------- hero ---- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_-10%,rgba(16,185,129,0.28),transparent)]" />
      <Container className="relative grid gap-12 py-24 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300">
            Erkend Daikin-installateur · eigen monteurs
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Airco laten installeren?<br />Het hele jaar comfortabel.
          </h1>
          <p className="mt-5 max-w-md text-lg text-slate-300">
            Specialist in Daikin airco&apos;s — koelen én verwarmen, fluisterstil en zuinig. Daarnaast warmtepompen, cv-ketels en onderhoud. Vakkundig geïnstalleerd door onze eigen monteurs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#airco">Bekijk Daikin airco&apos;s</PrimaryButton>
            <a
              href="#bespaarmodule"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Bereken je besparing
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Check /> F-gassen gecertificeerd</span>
            <span className="flex items-center gap-2"><Check /> 5 jaar garantie</span>
            <span className="flex items-center gap-2"><Check /> 4,9★ beoordeeld</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-emerald-300">Bestseller</div>
                <div className="mt-1 text-lg font-semibold">Daikin Perfera</div>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">A+++</span>
            </div>
            <div className="mt-5 aspect-[4/3] rounded-xl bg-gradient-to-br from-white/15 to-white/5 p-4">
              <div className="flex h-full flex-col justify-between rounded-lg bg-white/5 p-4">
                <div className="h-2 w-16 rounded-full bg-white/20" />
                <div className="self-end text-right text-4xl">❄️</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-sm font-semibold text-emerald-300">19 dB</div>
                <div className="mt-1 text-[11px] text-slate-400">fluisterstil</div>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-sm font-semibold text-emerald-300">−15 °C</div>
                <div className="mt-1 text-[11px] text-slate-400">verwarmt</div>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-sm font-semibold text-emerald-300">Wifi</div>
                <div className="mt-1 text-[11px] text-slate-400">standaard</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- logos/trust ---- */

function TrustBar() {
  const brands = ["Daikin", "Remeha", "Intergas", "Nefit", "Mitsubishi"];
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-6">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
        <span className="text-xs normal-case tracking-normal text-slate-500">Wij werken met A-merken:</span>
        {brands.map((b) => (
          <span key={b}>{b}</span>
        ))}
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- airco/daikin --- */

function Airco() {
  return (
    <section id="airco" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Daikin airco&apos;s</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Kies jouw Daikin airco
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Van designicoon tot de zuinigste in zijn klasse. Elke Daikin koelt in de zomer én verwarmt in de winter — zuinig en fluisterstil. Wij adviseren welk model en vermogen bij jouw ruimte past.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DAIKIN.map((m) => (
            <div
              key={m.id}
              id={m.id}
              className={`relative flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                m.featured ? "border-emerald-300 ring-1 ring-emerald-200" : "border-slate-200"
              }`}
            >
              {m.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white">
                  Meest gekozen
                </span>
              )}
              <div className={`flex h-28 items-center justify-center rounded-xl bg-gradient-to-br ${m.finish}`}>
                <span className="text-4xl">❄️</span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-emerald-600">{m.tag}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{m.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {m.specs.map((s) => (
                  <li key={s} className="flex gap-2">
                    <Check />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-2">
                <a href="#contact" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  Vraag prijs op →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Ook Mitsubishi Heavy Industries en andere A-merken zijn mogelijk. Twijfel je over de keuze?{" "}
          <a href="#contact" className="font-semibold text-emerald-600 hover:text-emerald-700">
            Vraag gratis advies aan.
          </a>
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ services ---- */

function Services() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Meer dan airco</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Alles voor verwarmen & koelen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Naast airco zijn we ook je specialist voor warmtepompen, cv-ketels en het onderhoud daarvan — onder één dak geregeld.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="flex scroll-mt-20 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">{s.icon}</div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-emerald-600">{s.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {s.specs.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Check />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-2">
                <a href="#contact" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  Meer weten →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- onderhoud ----- */

function Onderhoud() {
  return (
    <section id="onderhoud" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Onderhoud & service</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Houd je installatie zuinig en gezond
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Regelmatig onderhoud voorkomt storingen, verlaagt je verbruik en houdt de lucht schoon. Kies een losse beurt of laat het jaarlijks automatisch regelen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                p.highlight ? "border-emerald-300 bg-slate-900 text-white ring-1 ring-emerald-300" : "border-slate-200 bg-white"
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white">
                  Meest gekozen
                </span>
              )}
              <h3 className={`text-lg font-semibold ${p.highlight ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`text-3xl font-semibold ${p.highlight ? "text-emerald-300" : "text-slate-900"}`}>{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-slate-300" : "text-slate-500"}`}>{p.period}</span>
              </div>
              <p className={`mt-3 text-sm leading-6 ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>{p.body}</p>
              <ul className={`mt-5 space-y-2 text-sm ${p.highlight ? "text-slate-200" : "text-slate-700"}`}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <Check />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Aanvragen
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">Prijzen zijn indicatief en inclusief btw. Exacte prijs op basis van je installatie.</p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ werkwijze --- */

function Werkwijze() {
  return (
    <section id="werkwijze" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Werkwijze</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Zo werken wij</h2>
          <p className="mt-4 text-lg text-slate-600">Van eerste advies tot service achteraf — helder en zonder gedoe.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-emerald-500">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- usps ---- */

function Usps() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Waarom Edib Techniek</h2>
          <p className="mt-4 text-lg text-slate-600">
            Als erkend installateur regelen wij het van begin tot eind. Vakwerk, eerlijke prijzen en service waar je op kunt rekenen.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#contact">Plan een gesprek</PrimaryButton>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {USPS.map((u) => (
            <li key={u} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Check />
              <span className="text-sm font-medium text-slate-800">{u}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- faq ----- */

function Faq() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Veelgestelde vragen</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {FAQ.map((s) => (
            <details key={s.q} className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {s.q}
                <span className="mt-1 text-emerald-500 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- about ---- */

function About() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Over ons</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Jouw specialist in klimaat & comfort</h2>
          <p className="mt-4 text-lg text-slate-300">
            Edib Techniek installeert airco&apos;s, warmtepompen en cv-ketels met eigen, gecertificeerde monteurs — en houdt ze daarna draaiend met onderhoud en service. Persoonlijk advies, strakke planning en werk waar je op kunt rekenen.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-2xl font-semibold text-emerald-300 sm:text-3xl">{s.value}</div>
              <div className="mt-2 text-xs leading-5 text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- contact --- */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Vraag je gratis offerte aan</h2>
              <p className="mt-4 text-lg text-slate-600">
                Benieuwd welke airco, warmtepomp of ketel bij je past? Onze specialisten denken vrijblijvend met je mee — bel, mail of app ons.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={CONTACT.phoneHref}>Bel {CONTACT.phone}</PrimaryButton>
                <a
                  href={CONTACT.whatsapp}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
                >
                  Stuur een WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl bg-white p-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Telefoon</div>
                <a href={CONTACT.phoneHref} className="text-lg font-medium text-slate-900 hover:text-emerald-600">
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">E-mail</div>
                <a href={`mailto:${CONTACT.email}`} className="text-lg font-medium text-slate-900 hover:text-emerald-600">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Adres</div>
                <div className="text-lg font-medium text-slate-900">{CONTACT.address}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- footer --- */

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">E</span>
              Edib Techniek
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Erkend installateur van Daikin airco&apos;s, warmtepompen en cv-ketels. Vakkundig geplaatst en onderhouden door onze eigen monteurs.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Diensten</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#airco" className="hover:text-slate-900">Airco</a></li>
              <li><a href="#warmtepompen" className="hover:text-slate-900">Warmtepompen</a></li>
              <li><a href="#cv-ketels" className="hover:text-slate-900">CV-ketels</a></li>
              <li><a href="#onderhoud" className="hover:text-slate-900">Onderhoud</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Bedrijf</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#werkwijze" className="hover:text-slate-900">Werkwijze</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Offerte aanvragen</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href={CONTACT.phoneHref} className="hover:text-slate-900">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-slate-900">{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Edib Techniek · KvK 00000000 · BTW NL000000000B00</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-slate-900">Privacybeleid</a>
            <a href="#" className="hover:text-slate-900">Algemene voorwaarden</a>
            <a href="#" className="hover:text-slate-900">Cookiebeleid</a>
            <span className="text-slate-300">·</span>
            <a href="#" className="hover:text-slate-900">Instagram</a>
            <a href="#" className="hover:text-slate-900">Facebook</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ----------------------------------------------------------------- page --- */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Airco />
        <BespaarModule />
        <Services />
        <Onderhoud />
        <Werkwijze />
        <Usps />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
