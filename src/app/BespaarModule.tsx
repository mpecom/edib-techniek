"use client";

import { useMemo, useState } from "react";

/* ---------------------------------------------------------------------------
 * Interactieve bespaarmodule
 * Berekent de besparing als je (een deel van) je gasverbruik vervangt door
 * verwarmen met een airco (lucht-lucht warmtepomp).
 *
 * Uitgangspunten:
 *  - 1 m³ aardgas ≈ 9,77 kWh energie-inhoud.
 *  - Een HR-ketel zet dat om met ~90% rendement naar bruikbare warmte.
 *  - Een airco levert per kWh stroom ± SCOP kWh warmte (SCOP instelbaar).
 * Alle standaardwaarden zijn indicatief en aanpasbaar door de bezoeker.
 * ------------------------------------------------------------------------- */

const KWH_PER_M3 = 9.77; // energie-inhoud aardgas
const KETEL_RENDEMENT = 0.9; // gemiddeld rendement HR-ketel

function euro(value: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(value)));
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  format?: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-muted">{label}</span>
        <span className="font-mono text-sm font-medium text-ink">
          {format ? format(value) : value}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-teal"
        aria-label={label}
      />
    </label>
  );
}

export default function BespaarModule() {
  const [gasM3, setGasM3] = useState(1000);
  const [gasPrijs, setGasPrijs] = useState(1.45);
  const [stroomPrijs, setStroomPrijs] = useState(0.35);
  const [scop, setScop] = useState(4);

  const result = useMemo(() => {
    // Bruikbare warmte die de ketel nu uit dit gasverbruik haalt.
    const warmteKwh = gasM3 * KWH_PER_M3 * KETEL_RENDEMENT;
    // Stroom die de airco nodig heeft om diezelfde warmte te leveren.
    const stroomKwh = warmteKwh / scop;

    const gasKosten = gasM3 * gasPrijs;
    const aircoKosten = stroomKwh * stroomPrijs;
    const besparing = gasKosten - aircoKosten;
    const percentage = gasKosten > 0 ? (besparing / gasKosten) * 100 : 0;
    // Vermeden CO₂: ± 1,78 kg per m³ aardgas.
    const co2 = gasM3 * 1.78;

    return { gasKosten, aircoKosten, besparing, percentage, stroomKwh, co2 };
  }, [gasM3, gasPrijs, stroomPrijs, scop]);

  return (
    <section id="bespaarmodule" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_15%_-10%,rgba(20,184,166,0.22),transparent),radial-gradient(45%_50%_at_95%_110%,rgba(245,158,11,0.12),transparent)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">Bespaarcheck</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Verwarmen met airco i.p.v. gas — wat levert het op?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Een moderne Daikin-airco is een lucht-lucht warmtepomp: uit 1 kWh stroom haalt hij tot 4–5 kWh warmte.
            Schuif met de waarden en zie direct wat je bespaart ten opzichte van je cv-ketel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Invoer */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="rounded-xl bg-card p-5">
                <Slider
                  label="Gasverbruik dat je vervangt"
                  value={gasM3}
                  min={100}
                  max={3000}
                  step={50}
                  suffix="m³/jaar"
                  onChange={setGasM3}
                />
              </div>
              <div className="rounded-xl bg-card p-5">
                <Slider
                  label="Gasprijs"
                  value={gasPrijs}
                  min={0.8}
                  max={2.5}
                  step={0.05}
                  format={(v) => `€ ${v.toFixed(2)}`}
                  suffix="/ m³"
                  onChange={setGasPrijs}
                />
              </div>
              <div className="rounded-xl bg-card p-5">
                <Slider
                  label="Stroomprijs"
                  value={stroomPrijs}
                  min={0.15}
                  max={0.6}
                  step={0.01}
                  format={(v) => `€ ${v.toFixed(2)}`}
                  suffix="/ kWh"
                  onChange={setStroomPrijs}
                />
              </div>
              <div className="rounded-xl bg-card p-5">
                <Slider
                  label="Rendement airco (SCOP)"
                  value={scop}
                  min={2.5}
                  max={5.5}
                  step={0.1}
                  format={(v) => v.toFixed(1)}
                  suffix="× warmte per kWh"
                  onChange={setScop}
                />
                <p className="mt-2 text-xs text-muted">
                  Daikin-airco&apos;s halen in de praktijk een SCOP van circa 4,0 tot 5,1.
                </p>
              </div>
            </div>
          </div>

          {/* Resultaat */}
          <div className="rounded-3xl border border-teal/30 bg-gradient-to-br from-teal/15 to-white/[0.03] p-6 sm:p-8">
            <div className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">Geschatte besparing per jaar</div>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-display text-5xl font-semibold text-white">{euro(result.besparing)}</span>
              {result.besparing > 0 && (
                <span className="rounded-full bg-teal/25 px-3 py-1 font-mono text-sm font-medium text-teal-bright">
                  −{Math.round(result.percentage)}%
                </span>
              )}
            </div>

            <div className="mt-6 space-y-2.5">
              {[
                ["Stookkosten met cv-ketel", euro(result.gasKosten), "text-white"],
                ["Stookkosten met airco", euro(result.aircoKosten), "text-teal-bright"],
                ["Stroomverbruik airco", `${Math.round(result.stroomKwh).toLocaleString("nl-NL")} kWh`, "text-white"],
                ["Minder CO₂-uitstoot", `${Math.round(result.co2).toLocaleString("nl-NL")} kg`, "text-white"],
              ].map(([label, value, cls]) => (
                <div key={label} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-white/70">{label}</span>
                  <span className={`font-mono text-sm font-medium ${cls}`}>{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-bright"
            >
              Vraag een advies op maat aan
            </a>
            <p className="mt-3 text-center text-xs text-white/50">
              Indicatieve berekening. Werkelijke besparing hangt af van isolatie, gebruik en prijzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
