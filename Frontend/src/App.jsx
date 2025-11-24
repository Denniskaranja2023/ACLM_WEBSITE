import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 text-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            ACLM Website
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Tailwind CSS is now ready to power your UI.
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Edit `src/App.jsx` and start composing interfaces with utility classes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-indigo-500/20">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Interactive demo
          </p>
          <p className="mt-3 text-6xl font-black text-white">{count}</p>
          <p className="mt-1 text-sm text-slate-400">button presses</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Increase
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:border-slate-500"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Update `tailwind.config.js` to customize tokens.
        </p>
      </section>
    </main>
  )
}

export default App
