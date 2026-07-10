export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center font-sans">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
        Binnenkort online
      </span>
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        EDIB <span className="text-zinc-400 dark:text-zinc-500">Techniek</span>
      </h1>
      <p className="max-w-md text-base leading-7 text-zinc-500 dark:text-zinc-400">
        Onze nieuwe website wordt gebouwd. Kom binnenkort terug.
      </p>
    </main>
  );
}
