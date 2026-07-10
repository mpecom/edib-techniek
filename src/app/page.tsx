import type { ReactNode } from "react";
import BespaarModule from "./BespaarModule";
import AircoUnit from "./AircoUnit";
import AircoSlider from "./AircoSlider";

/* ---------------------------------------------------------------- data --- */

const NAV = [
  { href: "#airco", label: "Daikin airco" },
  { href: "#bespaarmodule", label: "Bespaarcheck" },
  { href: "#diensten", label: "Diensten" },
  { href: "#onderhoud", label: "Onderhoud" },
  { href: "#contact", label: "Contact" },
];

/* --- Diensten naast airco ------------------------------------------------- */
const SERVICES = [
  {
    id: "warmtepompen",
    tag: "Warmtepompen",
    title: "Duurzaam verwarmen zonder gas",
    body: "Hybride of volledig elektrische Daikin Altherma warmtepompen. Lagere energierekening, aardgasvrij en klaar voor de toekomst — met advies over de ISDE-subsidie.",
    specs: ["Hybride & all-electric", "Daikin Altherma", "Lage-temperatuur geschikt", "ISDE-subsidie mogelijk"],
  },
  {
    id: "cv-ketels",
    tag: "CV-ketels",
    title: "Vervanging & installatie van cv-ketels",
    body: "Toe aan een nieuwe ketel? Wij leveren en plaatsen zuinige HR-ketels van A-merken zoals Remeha, Intergas en Nefit. Snel gepland, netjes afgemonteerd.",
    specs: ["HR-ketels A-merken", "Remeha · Intergas · Nefit", "Snelle plaatsing", "Incl. inbedrijfstelling"],
  },
  {
    id: "onderhoud-dienst",
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

/* --- Werkwijze (echte volgorde: proces van 4 stappen) --------------------- */
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
    a: "Dat hangt af van de ruimte, isolatie en jouw wensen op het gebied van design en geluid. Wij adviseren vrijblijvend welk model en vermogen het beste past — van de zuinige Perfera tot de designvolle Emura.",
  },
  {
    q: "Kan een airco ook verwarmen?",
    a: "Ja. Een moderne Daikin-airco is een lucht-lucht warmtepomp en verwarmt zeer efficiënt, ook bij vriestemperaturen — de Perfera zelfs tot −20 °C. Zo bespaar je flink op je gasverbruik.",
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

function Check({ className = "text-teal" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={`mt-0.5 h-4.5 w-4.5 flex-none ${className}`} fill="currentColor">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.42 0L3.3 9.7a1 1 0 1 1 1.4-1.42l3.07 3.06 6.8-6.79a1 1 0 0 1 1.42 0Z" />
    </svg>
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${dark ? "text-teal-bright" : "text-teal"}`}>
      {children}
    </p>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------- header ---- */

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight ${onDark ? "text-white" : "text-ink"}`}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal font-mono text-sm font-medium text-white">E</span>
      Edib <span className={onDark ? "text-white/40" : "text-muted"}>Techniek</span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={CONTACT.phoneHref} className="hidden font-mono text-sm font-medium text-ink transition hover:text-teal sm:inline-block">
            {CONTACT.phone}
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-bright sm:inline-block"
          >
            Offerte aanvragen
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line text-ink [&::-webkit-details-marker]:hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-line bg-card p-2 shadow-lg">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paper">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-1 block rounded-lg bg-teal px-3 py-2 text-center text-sm font-semibold text-white">
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
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* koel → warm klimaatmotief */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_78%_-5%,rgba(20,184,166,0.30),transparent),radial-gradient(50%_50%_at_10%_110%,rgba(245,158,11,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-bright/60 to-transparent" />
      <Container className="relative grid gap-14 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs tracking-wide text-teal-bright">
            Erkend Daikin-installateur
          </span>
          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Koelen én verwarmen.<br />
            <span className="text-teal-bright">Het hele jaar door.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Specialist in Daikin airco&apos;s — fluisterstil, zuinig en verwarmen tot −20 °C. Daarnaast warmtepompen, cv-ketels en onderhoud, geplaatst door onze eigen monteurs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#airco">Bekijk Daikin-modellen</PrimaryButton>
            <a
              href="#bespaarmodule"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Bereken je besparing
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-2"><Check className="text-teal-bright" /> F-gassen gecertificeerd</span>
            <span className="flex items-center gap-2"><Check className="text-teal-bright" /> 5 jaar garantie</span>
            <span className="flex items-center gap-2"><Check className="text-teal-bright" /> 4,9★ beoordeeld</span>
          </div>
        </div>

        {/* productkaart: Emura render als statement */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-teal-bright">Design-icoon</div>
                <div className="mt-1 font-display text-xl font-semibold">Daikin Emura</div>
              </div>
              <span className="rounded-full bg-teal/20 px-3 py-1 font-mono text-xs font-medium text-teal-bright">A+++</span>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-white/12 to-white/[0.03] p-6">
              <AircoUnit tone="silver" sculpted className="w-full drop-shadow-xl" />
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[
                ["19 dB", "fluisterstil"],
                ["−20 °C", "verwarmt"],
                ["Wifi", "Onecta-app"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white/5 py-3">
                  <dt className="font-mono text-sm font-medium text-teal-bright">{v}</dt>
                  <dd className="mt-1 text-[11px] text-white/50">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- logos/trust ---- */

function TrustBar() {
  const brands = ["Daikin", "Remeha", "Intergas", "Nefit", "Mitsubishi Heavy"];
  return (
    <section className="border-b border-line bg-card">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
        <span className="text-xs text-muted">Wij werken met A-merken</span>
        {brands.map((b) => (
          <span key={b} className="font-display text-sm font-semibold tracking-tight text-ink/40">
            {b}
          </span>
        ))}
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- airco/daikin --- */

function Airco() {
  return (
    <section id="airco" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Daikin airco&apos;s</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
              Het volledige Daikin-assortiment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Van het designicoon Emura tot de zuinige Perfera. Elke Daikin koelt in de zomer én verwarmt in de winter. Wij adviseren welk model, vermogen en afwerking bij jouw ruimte past.
            </p>
          </div>
          <div className="flex gap-6 font-mono text-sm text-muted">
            <div>
              <span className="block font-display text-2xl font-semibold text-ink">A+++</span>
              top-energielabel
            </div>
            <div>
              <span className="block font-display text-2xl font-semibold text-ink">19 dB</span>
              fluisterstil
            </div>
          </div>
        </div>

        <div className="mt-12">
          <AircoSlider />
        </div>

        <p className="mt-8 text-sm text-muted">
          Specs gelden voor de kleinste capaciteitsklasse; grotere modellen kunnen afwijken. Ook Mitsubishi Heavy Industries is mogelijk.{" "}
          <a href="#contact" className="font-semibold text-teal hover:text-teal-bright">
            Vraag gratis advies aan →
          </a>
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ services ---- */

function Services() {
  return (
    <section id="diensten" className="scroll-mt-16 bg-card py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Meer dan airco</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            Alles voor verwarmen &amp; koelen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Naast airco zijn we ook je specialist voor warmtepompen, cv-ketels en het onderhoud daarvan — onder één dak geregeld.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="flex scroll-mt-16 flex-col rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(11,21,38,0.3)]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-teal">{s.tag}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/80">
                {s.specs.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Check />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 text-sm font-semibold text-teal hover:text-teal-bright">
                Meer weten →
              </a>
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
    <section id="onderhoud" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Onderhoud &amp; service</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            Houd je installatie zuinig en gezond
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Regelmatig onderhoud voorkomt storingen, verlaagt je verbruik en houdt de lucht schoon. Kies een losse beurt of laat het jaarlijks automatisch regelen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                p.highlight ? "border-teal/40 bg-ink text-white ring-1 ring-teal/30" : "border-line bg-card"
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-teal px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white">
                  Meest gekozen
                </span>
              )}
              <h3 className={`font-display text-lg font-semibold ${p.highlight ? "text-white" : "text-ink"}`}>{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className={`font-display text-3xl font-semibold ${p.highlight ? "text-teal-bright" : "text-ink"}`}>{p.price}</span>
                <span className={`font-mono text-sm ${p.highlight ? "text-white/60" : "text-muted"}`}>{p.period}</span>
              </div>
              <p className={`mt-3 text-sm leading-6 ${p.highlight ? "text-white/70" : "text-muted"}`}>{p.body}</p>
              <ul className={`mt-5 space-y-2 text-sm ${p.highlight ? "text-white/90" : "text-ink/80"}`}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <Check className={p.highlight ? "text-teal-bright" : "text-teal"} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  p.highlight ? "bg-teal text-white hover:bg-teal-bright" : "border border-line text-ink hover:border-teal hover:text-teal"
                }`}
              >
                Aanvragen
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-muted">Prijzen zijn indicatief en inclusief btw. Exacte prijs op basis van je installatie.</p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ werkwijze --- */

function Werkwijze() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Werkwijze</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">Zo werken wij</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">Van eerste advies tot service achteraf — helder en zonder gedoe.</p>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-line bg-paper p-6">
              <div className="font-mono text-sm font-medium text-teal">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- usps ---- */

function Usps() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>Waarom Edib Techniek</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            Vakwerk waar je op kunt rekenen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Als erkend installateur regelen wij het van begin tot eind. Eerlijke prijzen, eigen monteurs en service ook ná de installatie.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#contact">Plan een gesprek</PrimaryButton>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {USPS.map((u) => (
            <li key={u} className="flex gap-3 rounded-xl border border-line bg-card p-4">
              <Check />
              <span className="text-sm font-medium text-ink/90">{u}</span>
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
    <section className="bg-card py-20 sm:py-28">
      <Container>
        <Eyebrow>Veelgestelde vragen</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">Goed om te weten</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {FAQ.map((s) => (
            <details key={s.q} className="group rounded-2xl border border-line bg-paper p-6 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-display text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {s.q}
                <span className="mt-0.5 font-mono text-teal transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{s.a}</p>
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
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_0%,rgba(20,184,166,0.22),transparent)]" />
      <Container className="relative grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow dark>Over ons</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Jouw specialist in klimaat &amp; comfort</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Edib Techniek installeert Daikin airco&apos;s, warmtepompen en cv-ketels met eigen, gecertificeerde monteurs — en houdt ze daarna draaiend met onderhoud en service. Persoonlijk advies, strakke planning en werk waar je op kunt rekenen.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="font-display text-2xl font-semibold text-teal-bright sm:text-3xl">{s.value}</div>
              <div className="mt-2 text-xs leading-5 text-white/60">{s.label}</div>
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
    <section id="contact" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-card">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">Vraag je gratis offerte aan</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Benieuwd welke airco, warmtepomp of ketel bij je past? Onze specialisten denken vrijblijvend met je mee — bel, mail of app ons.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={CONTACT.phoneHref}>Bel {CONTACT.phone}</PrimaryButton>
                <a
                  href={CONTACT.whatsapp}
                  className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
                >
                  Stuur een WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-5 border-t border-line bg-paper p-8 sm:p-12 md:border-l md:border-t-0">
              {[
                ["Telefoon", CONTACT.phone, CONTACT.phoneHref],
                ["E-mail", CONTACT.email, `mailto:${CONTACT.email}`],
                ["Adres", CONTACT.address, null],
              ].map(([label, value, href]) => (
                <div key={label as string}>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</div>
                  {href ? (
                    <a href={href as string} className="font-display text-lg font-medium text-ink transition hover:text-teal">
                      {value}
                    </a>
                  ) : (
                    <div className="font-display text-lg font-medium text-ink">{value}</div>
                  )}
                </div>
              ))}
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
    <footer className="border-t border-line bg-card py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Erkend installateur van Daikin airco&apos;s, warmtepompen en cv-ketels. Vakkundig geplaatst en onderhouden door onze eigen monteurs.
            </p>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-ink">Diensten</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href="#airco" className="hover:text-ink">Daikin airco</a></li>
              <li><a href="#warmtepompen" className="hover:text-ink">Warmtepompen</a></li>
              <li><a href="#cv-ketels" className="hover:text-ink">CV-ketels</a></li>
              <li><a href="#onderhoud" className="hover:text-ink">Onderhoud</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-ink">Bedrijf</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href="#bespaarmodule" className="hover:text-ink">Bespaarcheck</a></li>
              <li><a href="#contact" className="hover:text-ink">Contact</a></li>
              <li><a href="#contact" className="hover:text-ink">Offerte aanvragen</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-ink">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href={CONTACT.phoneHref} className="font-mono hover:text-ink">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-ink">{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs">© 2026 Edib Techniek · KvK 00000000 · BTW NL000000000B00</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-ink">Privacybeleid</a>
            <a href="#" className="hover:text-ink">Algemene voorwaarden</a>
            <a href="#" className="hover:text-ink">Instagram</a>
            <a href="#" className="hover:text-ink">Facebook</a>
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
