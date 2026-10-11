"use client";

import { ArrowDownUp, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getWorkouts } from "@/lib/workouts";
import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

type SortKey = "duration" | "caloriesBurned" | "rating";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  useEffect(() => { getWorkouts().then((data) => setWorkouts(Array.isArray(data) ? data : [])).catch(() => setError(true)).finally(() => setLoading(false)); }, []);
  const visibleWorkouts = useMemo(() => (Array.isArray(workouts) ? workouts : []).filter((workout) => `${workout.name} ${workout.muscleGroups.join(" ")}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sortBy === "rating" ? b.rating - a.rating : a[sortBy] - b[sortBy]), [workouts, query, sortBy]);

  return <section id="library" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 text-xs font-black tracking-[.2em] text-[#ccff00]">CHOOSE YOUR WORK</p><h2 className="display-font text-4xl uppercase sm:text-5xl">The library</h2><p className="mt-3 text-white/55">Twelve lifts covering every major muscle group.</p></div><div className="flex flex-col gap-2 sm:flex-row"><label className="flex items-center gap-2 border border-white/15 bg-[#191c19] px-3 py-2 text-sm text-white/60"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lifts" className="w-full bg-transparent outline-none placeholder:text-white/35 sm:w-32" /></label><label className="flex items-center gap-2 border border-white/15 bg-[#191c19] px-3 py-2 text-sm text-white/70"><ArrowDownUp size={16} className="text-[#ccff00]" /><span className="sr-only">Sort workouts by</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortKey)} className="bg-transparent font-bold outline-none"><option value="duration">Duration</option><option value="caloriesBurned">Calories</option><option value="rating">Rating</option></select></label></div></div>
    {loading && <div className="grid min-h-72 place-items-center border border-white/10 bg-[#191c19]"><div className="text-center"><span className="loading loading-spinner loading-lg text-[#ccff00]" /><p className="mt-4 font-bold text-white/65">Loading workouts…</p></div></div>}
    {error && <div role="alert" className="border border-red-400/40 bg-red-400/10 p-6 text-red-100"><SlidersHorizontal className="mb-3" />Unable to load the workout library. Please refresh and try again.</div>}
    {!loading && !error && <><p className="mb-5 text-sm text-white/45">{visibleWorkouts.length} workouts shown</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleWorkouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}</div>{visibleWorkouts.length === 0 && <p className="border border-dashed border-white/20 p-8 text-center text-white/55">No workouts match that search.</p>}</>}
  </div></section>;
}
