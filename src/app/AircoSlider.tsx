"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AircoUnit from "./AircoUnit";

/* --- Echte Daikin wandmodellen (specs indicatief, kleinste klasse) -------- */
type Finish = "white" | "silver" | "black" | "blackwood";
type Model = {
  id: string;
  name: string;
  code: string;
  position: string;
  tone: "white" | "silver" | "graphite";
  sculpted?: boolean;
  featured?: boolean;
  blurb: string;
  finishes: Finish[];
  specs: [string, string][];
};

const DAIKIN: Model[] = [
  {
    id: "perfera",
    name: "Perfera",
    code: "FTXM-A",
    position: "Beste voor verwarmen",
    tone: "white",
    featured: true,
    blurb:
      "De all-rounder voor het hele jaar. Verwarmt betrouwbaar tot −20 °C met 3D-luchtstroom en Heat Boost — gemaakt voor Nederlandse winters.",
    finishes: ["white", "black"],
    specs: [
      ["Vermogen", "2,0–7,1 kW"],
      ["Energielabel", "A+++ / A+++"],
      ["SEER / SCOP", "8,65 / 5,10"],
      ["Geluid", "19 dB(A)"],
      ["Wifi", "standaard"],
    ],
  },
  {
    id: "emura",
    name: "Emura",
    code: "FTXJ-A",
    position: "Design-icoon",
    tone: "silver",
    sculpted: true,
    blurb:
      "Sculpturaal, gebogen aluminium front. Een statement aan de muur, met ingebouwde aanwezigheidssensor en Onecta-bediening.",
    finishes: ["white", "silver", "black"],
    specs: [
      ["Vermogen", "2,0–5,0 kW"],
      ["Energielabel", "A+++ / A+++"],
      ["SEER / SCOP", "8,75 / 5,15"],
      ["Geluid", "19 dB(A)"],
      ["Wifi", "standaard"],
    ],
  },
  {
    id: "stylish",
    name: "Stylish",
    code: "FTXA-A",
    position: "Slankst · 189 mm",
    tone: "graphite",
    blurb:
      "Ultravlak, slechts 189 mm diep, met Flash Streamer luchtreiniging. In vier afwerkingen — óók blackwood.",
    finishes: ["white", "silver", "black", "blackwood"],
    specs: [
      ["Vermogen", "2,0–5,0 kW"],
      ["Energielabel", "A+++ / A+++"],
      ["SEER / SCOP", "8,75 / 5,15"],
      ["Geluid", "19 dB(A)"],
      ["Wifi", "standaard"],
    ],
  },
  {
    id: "comfora",
    name: "Comfora",
    code: "FTXP-M",
    position: "Prijs-kwaliteit",
    tone: "white",
    blurb:
      "Betrouwbaar comfort zonder franje. Stil en zuinig — een uitstekende keuze voor slaapkamer of thuiskantoor.",
    finishes: ["white"],
    specs: [
      ["Vermogen", "2,0–7,1 kW"],
      ["Energielabel", "A++ / A++"],
      ["SEER / SCOP", "7,3 / 4,6"],
      ["Geluid", "19–20 dB(A)"],
      ["Wifi", "optioneel"],
    ],
  },
  {
    id: "sensira",
    name: "Sensira",
    code: "FTXF-D",
    position: "Instapmodel",
    tone: "white",
    blurb:
      "Scherp geprijsd instapmodel met de betrouwbaarheid van Daikin. Voor kostenbewuste installaties zonder concessies aan kwaliteit.",
    finishes: ["white"],
    specs: [
      ["Vermogen", "2,0–7,1 kW"],
      ["Energielabel", "A++ / A+"],
      ["SEER / SCOP", "6,5 / 4,3"],
      ["Geluid", "vanaf 20 dB(A)"],
      ["Wifi", "optioneel"],
    ],
  },
  {
    id: "multi",
    name: "Multi-split",
    code: "MXM-A",
    position: "Meerdere ruimtes",
    tone: "silver",
    blurb:
      "Eén buitenunit voor meerdere binnenunits. Combineer Perfera, Emura en Stylish en regel elke kamer apart.",
    finishes: ["white", "silver", "black", "blackwood"],
    specs: [
      ["Binnenunits", "2 tot 5"],
      ["Modellen", "vrij te mixen"],
      ["Regeling", "per ruimte"],
      ["Buitenunit", "1 compact"],
      ["Wifi", "per unit"],
    ],
  },
];

const FINISH_LABEL: Record<Finish, string> = {
  white: "Mat wit",
  silver: "Zilver",
  black: "Mat zwart",
  blackwood: "Blackwood",
};

const SWATCH: Record<Finish, string> = {
  white: "bg-white",
  silver: "bg-gradient-to-br from-slate-100 to-slate-400",
  black: "bg-neutral-900",
  blackwood: "bg-gradient-to-br from-neutral-700 to-neutral-950",
};

function FinishDots({ finishes }: { finishes: Finish[] }) {
  return (
    <div className="flex items-center gap-1.5">
      {finishes.map((f) => (
        <span key={f} title={FINISH_LABEL[f]} className={`h-3.5 w-3.5 rounded-full ring-1 ring-black/10 ${SWATCH[f]}`} />
      ))}
    </div>
  );
}

function ModelCard({ m }: { m: Model }) {
  return (
    <article
      id={m.id}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(11,21,38,0.35)] ${
        m.featured ? "border-teal/40 ring-1 ring-teal/25" : "border-line"
      }`}
    >
      <div className="relative flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-frost/70 to-white ring-1 ring-inset ring-line">
        {m.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-teal px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white">
            Meest gekozen
          </span>
        )}
        <AircoUnit tone={m.tone} sculpted={m.sculpted} className="w-[78%]" />
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-2">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">Daikin {m.name}</h3>
          <p className="font-mono text-xs uppercase tracking-wider text-teal">{m.position}</p>
        </div>
        <span className="font-mono text-xs text-muted">{m.code}</span>
      </div>

      <p className="mt-3 text-sm leading-6 text-muted">{m.blurb}</p>

      <dl className="mt-5 divide-y divide-line border-y border-line">
        {m.specs.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between py-2">
            <dt className="text-sm text-muted">{k}</dt>
            <dd className="font-mono text-sm font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex items-center gap-2">
        <FinishDots finishes={m.finishes} />
        <span className="text-xs text-muted">
          {m.finishes.length} {m.finishes.length === 1 ? "afwerking" : "afwerkingen"}
        </span>
      </div>

      <a
        href="#contact"
        className="mt-auto inline-flex items-center justify-center rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition group-hover:border-teal group-hover:text-teal"
      >
        Vraag prijs op
      </a>
    </article>
  );
}

/* ---------------------------------------------------------------- slider -- */

export default function AircoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  const scrollToIndex = useCallback((i: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (!child) return;
    const left = child.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, []);

  // actieve kaart volgen tijdens scrollen
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const base = track.getBoundingClientRect().left;
        let closest = 0;
        let min = Infinity;
        Array.from(track.children).forEach((ch, i) => {
          const d = Math.abs((ch as HTMLElement).getBoundingClientRect().left - base);
          if (d < min) {
            min = d;
            closest = i;
          }
        });
        setActive(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // langzame auto-rotatie (pauzeert bij hover/focus en reduced-motion)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || paused.current || document.hidden) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEnd) scrollToIndex(0);
      else {
        const base = track.getBoundingClientRect().left;
        let current = 0;
        let min = Infinity;
        Array.from(track.children).forEach((ch, i) => {
          const d = Math.abs((ch as HTMLElement).getBoundingClientRect().left - base);
          if (d < min) {
            min = d;
            current = i;
          }
        });
        scrollToIndex(current + 1);
      }
    }, 4200);
    return () => window.clearInterval(id);
  }, [scrollToIndex]);

  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    paused.current = false;
  };

  return (
    <div className="relative">
      {/* pijlen */}
      <div className="pointer-events-none absolute -top-14 right-0 hidden gap-2 sm:flex">
        <button
          type="button"
          aria-label="Vorige"
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Volgende"
          onClick={() => scrollToIndex(Math.min(DAIKIN.length - 1, active + 1))}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
        onTouchStart={pause}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2"
      >
        {DAIKIN.map((m) => (
          <div
            key={m.id}
            className="shrink-0 snap-start basis-[86%] sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.833rem)]"
          >
            <ModelCard m={m} />
          </div>
        ))}
      </div>

      {/* stippen */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {DAIKIN.map((m, i) => (
          <button
            key={m.id}
            type="button"
            aria-label={`Ga naar Daikin ${m.name}`}
            aria-current={active === i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${active === i ? "w-6 bg-teal" : "w-2 bg-line hover:bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}
