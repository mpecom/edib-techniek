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
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-slate-900">
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
        className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-emerald-500"
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
    <section id="bespaarmodule" className="scroll-mt-20 bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Bespaarmodule</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Bereken je besparing: verwarmen met airco i.p.v. gas
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Een moderne Daikin-airco is een lucht-lucht warmtepomp: uit 1 kWh stroom haalt hij tot 4–5 kWh warmte.
            Schuif met de waarden en zie direct wat je bespaart ten opzichte van je cv-ketel.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Invoer */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-5 text-slate-900">
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
              <div className="rounded-xl bg-white p-5 text-slate-900">
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
              <div className="rounded-xl bg-white p-5 text-slate-900">
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
              <div className="rounded-xl bg-white p-5 text-slate-900">
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
                <p className="mt-2 text-xs text-slate-500">
                  Daikin-airco&apos;s halen in de praktijk een SCOP van circa 4,0 tot 5,1.
                </p>
              </div>
            </div>
          </div>

          {/* Resultaat */}
          <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-white/5 p-6 sm:p-8">
            <div className="text-sm font-medium uppercase tracking-widest text-emerald-300">Geschatte besparing per jaar</div>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-5xl font-semibold text-white">{euro(result.besparing)}</span>
              {result.besparing > 0 && (
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-300">
                  −{Math.round(result.percentage)}%
                </span>
              )}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-sm text-slate-300">Stookkosten met cv-ketel</span>
                <span className="font-semibold text-white">{euro(result.gasKosten)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-sm text-slate-300">Stookkosten met airco</span>
                <span className="font-semibold text-emerald-300">{euro(result.aircoKosten)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-sm text-slate-300">Stroomverbruik airco</span>
                <span className="font-semibold text-white">{Math.round(result.stroomKwh).toLocaleString("nl-NL")} kWh</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-sm text-slate-300">Minder CO₂-uitstoot</span>
                <span className="font-semibold text-white">{Math.round(result.co2).toLocaleString("nl-NL")} kg</span>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Vraag een advies op maat aan
            </a>
            <p className="mt-3 text-center text-xs text-slate-400">
              Indicatieve berekening. Werkelijke besparing hangt af van isolatie, gebruik en prijzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
