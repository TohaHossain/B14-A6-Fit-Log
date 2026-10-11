"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { useWorkoutState } from "@/components/providers/WorkoutProvider";

const navItems = [{ label: "Workout", href: "/" }, { label: "My Plan", href: "/my-plan" }];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { plan, saved } = useWorkoutState();
  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111311]/95 backdrop-blur">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
      <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight" aria-label="FitLog home"><span className="grid size-9 place-items-center bg-[#ccff00] text-[#111311]"><Dumbbell size={20} strokeWidth={3} /></span><span>FITLOG</span></Link>
      <div className="hidden items-center gap-1 md:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-bold transition ${isActive(item.href) ? "bg-[#ccff00] text-[#111311]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>{item.label}</Link>)}</div>
      <div className="hidden items-center gap-2 sm:flex"><Link href="/my-plan" className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black text-[#111311]">PLAN <span className="ml-1 rounded-full bg-[#111311] px-1.5 py-0.5 text-[#ccff00]">{plan.length}</span></Link><Link href="/my-plan" className="rounded-full border border-white/30 px-3 py-2 text-xs font-black text-white">SAVED <span className="ml-1 text-[#ccff00]">{saved.length}</span></Link></div>
      <button type="button" className="grid size-10 place-items-center border border-white/20 md:hidden" aria-label="Toggle menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    {isOpen && <div className="border-t border-white/10 bg-[#111311] px-4 pb-4 md:hidden">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={`block px-3 py-3 font-bold ${isActive(item.href) ? "text-[#ccff00]" : "text-white/75"}`}>{item.label}</Link>)}<div className="mt-2 flex gap-2 border-t border-white/10 pt-4 sm:hidden"><Link href="/my-plan" className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black text-[#111311]">PLAN {plan.length}</Link><Link href="/my-plan" className="rounded-full border border-white/30 px-3 py-2 text-xs font-black">SAVED {saved.length}</Link></div></div>}
  </header>;
}
