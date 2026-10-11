import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return <Link href={`/workouts/${workout.id}`} className="group block overflow-hidden border border-white/10 bg-[#191c19] transition hover:-translate-y-1 hover:border-[#ccff00]/60 hover:shadow-[0_18px_40px_rgba(0,0,0,.3)]">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#222621]"><img src={workout.image} alt={workout.name} className="size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#191c19] to-transparent" /></div>
    <div className="space-y-4 p-5"><div className="flex flex-wrap gap-1.5">{workout.muscleGroups.map((group) => <span key={group} className="rounded-full border border-[#ccff00]/35 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#ccff00]">{group}</span>)}</div><div><h3 className="display-font text-2xl uppercase leading-none">{workout.name}</h3><p className="mt-2 text-sm text-white/55">{workout.equipment}</p></div><div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs font-bold text-white/70"><span className="flex items-center gap-1"><Clock3 size={14} className="text-[#ccff00]" />{workout.duration} min</span><span className="flex items-center gap-1"><Flame size={14} className="text-[#ccff00]" />{workout.caloriesBurned} kcal</span><span className="flex items-center gap-1"><Star size={14} fill="currentColor" className="text-[#ccff00]" />{workout.rating}</span></div></div>
  </Link>;
}
