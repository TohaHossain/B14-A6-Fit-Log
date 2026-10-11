import { Dumbbell } from "lucide-react";

export default function Footer() {
  return <footer className="mt-auto border-t border-white/10 bg-[#0b0d0b]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><div className="flex items-center gap-2 font-black tracking-tight"><span className="grid size-8 place-items-center bg-[#ccff00] text-[#111311]"><Dumbbell size={17} strokeWidth={3} /></span> FITLOG</div><p className="text-white/50">© 2026 FitLog — Workout Library. Train hard, log honest.</p></div></footer>;
}
