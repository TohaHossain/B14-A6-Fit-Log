"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Workout } from "@/types/workout";

type WorkoutContextValue = {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];
  hydrated: boolean;
  addToPlan: (workout: Workout) => "added" | "exists" | "limit";
  saveWorkout: (workout: Workout) => "added" | "exists";
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markDone: (id: number) => void;
};

const WorkoutContext = createContext<WorkoutContextValue | null>(null);
const storageKey = "fitlog-workout-state";

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedState = window.localStorage.getItem(storageKey);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setPlan(Array.isArray(parsed.plan) ? parsed.plan : []);
        setSaved(Array.isArray(parsed.saved) ? parsed.saved : []);
        setCompletedIds(Array.isArray(parsed.completedIds) ? parsed.completedIds : []);
      } catch { window.localStorage.removeItem(storageKey); }
    }
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) window.localStorage.setItem(storageKey, JSON.stringify({ plan, saved, completedIds })); }, [plan, saved, completedIds, hydrated]);

  const value = useMemo<WorkoutContextValue>(() => ({
    plan, saved, completedIds, hydrated,
    addToPlan: (workout) => {
      if (plan.some((item) => item.id === workout.id)) return "exists";
      if (plan.length >= 5) return "limit";
      setPlan((items) => [...items, workout]);
      return "added";
    },
    saveWorkout: (workout) => {
      if (saved.some((item) => item.id === workout.id)) return "exists";
      setSaved((items) => [...items, workout]);
      return "added";
    },
    removeFromPlan: (id) => { setPlan((items) => items.filter((item) => item.id !== id)); setCompletedIds((ids) => ids.filter((itemId) => itemId !== id)); },
    removeFromSaved: (id) => setSaved((items) => items.filter((item) => item.id !== id)),
    markDone: (id) => setCompletedIds((ids) => ids.includes(id) ? ids : [...ids, id]),
  }), [plan, saved, completedIds, hydrated]);

  return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
}

export function useWorkoutState() {
  const context = useContext(WorkoutContext);
  if (!context) throw new Error("useWorkoutState must be used inside WorkoutProvider");
  return context;
}
