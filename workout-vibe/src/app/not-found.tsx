import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return <section className="noise-grid grid min-h-[65vh] place-items-center px-4 text-center"><div><span className="mx-auto grid size-12 place-items-center bg-[#ccff00] text-[#111311]"><Dumbbell size={25} strokeWidth={3} /></span><p className="display-font mt-7 text-7xl text-[#ccff00]">404</p><h1 className="display-font mt-2 text-4xl uppercase sm:text-5xl">This set doesn&apos;t exist</h1><p className="mx-auto mt-4 max-w-md text-white/55">The page you are looking for has stepped away from the rack.</p><Link href="/" className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3 text-sm font-black text-[#111311]"><ArrowLeft size={17} /> BACK TO WORKOUTS</Link></div></section>;
}
