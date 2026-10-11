"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <section className="grid min-h-[60vh] place-items-center px-4 text-center"><div><p className="text-xs font-black tracking-[.2em] text-[#ccff00]">FITLOG ERROR</p><h1 className="display-font mt-3 text-4xl uppercase">Something broke mid-set</h1><p className="mt-3 text-white/55">Give the page another go.</p><button type="button" onClick={reset} className="mt-6 bg-[#ccff00] px-5 py-3 text-sm font-black text-[#111311]">TRY AGAIN</button></div></section>;
}
