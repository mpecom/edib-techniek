import type { ReactNode } from "react";

/* ---------------------------------------------------------------- data --- */

const NAV = [
  { href: "#airco", label: "Airco" },
  { href: "#laadpaal", label: "Laadpaal" },
  { href: "#thuisbatterij", label: "Thuisbatterij" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

const PRODUCTS = [
  {
    id: "airco",
    tag: "Airco",
    icon: "❄️",
    title: "Koelen en verwarmen in één",
    body: "A-merken zoals Daikin en Mitsubishi Heavy Industries. Het hele jaar comfortabel, fluisterstil en zuinig.",
    specs: ["2–7 kW vermogen", "Koelen én verwarmen", "Geluid vanaf 19 dB", "Energielabel tot A+++"],
  },
  {
    id: "laadpaal",
    tag: "Laadpaal",
    icon: "🔌",
    title: "Laad slimmer, rij verder",
    body: "Zaptec laadpalen — Go, Go 2 en Pro — met slim laden en load balancing. Klaar voor de toekomst.",
    specs: ["Tot 22 kW laadvermogen", "Type 2 aansluiting", "Load balancing", "Voorbereid op V2G"],
  },
  {
    id: "thuisbatterij",
    tag: "Thuisbatterij",
    icon: "🔋",
    title: "Bewaar je eigen stroom",
    body: "Sigenergy thuisbatterijen in 1- en 3-fase. Gebruik je zonne-energie van overdag 's avonds.",
    specs: ["6–54 kWh capaciteit", "1- en 3-fase modellen", "Uitbreidbare modules", "Klaar voor het einde van salderen"],
  },
];

const USPS = [
  "A-merken, vakkundig geplaatst door onze eigen monteurs",
  "Eén vast aanspreekpunt van offerte tot oplevering",
  "Transparante prijzen, geen verrassingen achteraf",
  "Fabrieksgarantie netjes voor je geregeld",
  "Ook ná de installatie staan we voor je klaar",
];

const STORIES = [
  {
    q: "Salderen stopt in 2027 — en nu?",
    a: "Vanaf 2027 verdwijnt de salderingsregeling. Met een thuisbatterij bewaar je je eigen stroom en blijf je profiteren van je zonnepanelen.",
  },
  {
    q: "Eigen monteurs, geen onderaannemers",
    a: "Alles wordt geïnstalleerd door onze eigen, gecertificeerde monteurs. Zo houden we kwaliteit en planning volledig in eigen hand.",
  },
  {
    q: "Overdag opladen op je eigen stroom",
    a: "Combineer zonnepanelen, een thuisbatterij en een slimme laadpaal en laad je auto met je eigen opgewekte energie.",
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

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:inline-block"
          >
            Offerte aanvragen
          </a>

          <details className="relative md:hidden">
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
            Eigen monteurs · bij jou in de buurt
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Slimmer wonen met je eigen energie
          </h1>
          <p className="mt-5 max-w-md text-lg text-slate-300">
            Bewaar de zon voor 's avonds en houd grip op je verbruik én je rekening. Airco's, laadpalen en thuisbatterijen — vakkundig geïnstalleerd.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#diensten">Bekijk producten</PrimaryButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-3 gap-3">
              {PRODUCTS.map((p) => (
                <div key={p.id} className="rounded-xl bg-white/5 p-4 text-center">
                  <div className="text-2xl">{p.icon}</div>
                  <div className="mt-2 text-xs font-medium text-slate-300">{p.tag}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-500/15 px-4 py-3 text-sm">
              <span className="text-slate-200">Eigen opgewekte stroom</span>
              <span className="font-semibold text-emerald-300">tot 70% besparing</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ products ---- */

function Products() {
  return (
    <section id="diensten" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Onze producten</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Alles voor je eigen energie, onder één dak
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Van advies tot installatie en service — wij regelen het volledig voor je.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="flex scroll-mt-24 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">{p.icon}</div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-emerald-600">{p.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{p.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {p.specs.map((s) => (
                  <li key={s} className="flex gap-2">
                    <Check />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  Ontdek {p.tag.toLowerCase()} →
                </a>
              </div>
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
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Wij houden het simpel</h2>
          <p className="mt-4 text-lg text-slate-600">
            Geen technisch verhaal en geen gedoe. Eén partij die het van begin tot eind voor je regelt.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#contact">Plan een gesprek</PrimaryButton>
          </div>
        </div>
        <ul className="space-y-4">
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

/* ------------------------------------------------------------- stories ---- */

function Stories() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Verhalen die je verder brengen</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STORIES.map((s) => (
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

/* -------------------------------------------------------------- over-ons -- */

function About() {
  return (
    <section id="over-ons" className="scroll-mt-24 bg-slate-900 py-20 text-white sm:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Over ons</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Jouw specialist in eigen energie
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Edib Techniek installeert airco's, laadpalen en thuisbatterijen met eigen, gecertificeerde monteurs. Persoonlijk advies, strakke planning en service waar je op kunt rekenen.
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
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Liever direct contact?</h2>
              <p className="mt-4 text-lg text-slate-600">
                Even sparren voordat je beslist? Onze specialisten denken vrijblijvend met je mee — bel, mail of app ons.
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
              Airco's, laadpalen en thuisbatterijen, vakkundig geplaatst door onze eigen monteurs bij jou in de buurt.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Diensten</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#airco" className="hover:text-slate-900">Airco</a></li>
              <li><a href="#laadpaal" className="hover:text-slate-900">Laadpaal</a></li>
              <li><a href="#thuisbatterij" className="hover:text-slate-900">Thuisbatterij</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Bedrijf</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#over-ons" className="hover:text-slate-900">Over ons</a></li>
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
            <a href="#" className="hover:text-slate-900">TikTok</a>
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
        <Products />
        <Usps />
        <Stories />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
