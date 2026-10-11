import type { Workout, WorkoutApiResponse } from "@/types/workout";

const API_BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_BASE_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Unable to load the workout library.");
  }

  const data: WorkoutApiResponse | Workout[] = await response.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.value)) return data.value;

  throw new Error("The workout library returned an invalid response.");
}

export async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(`${API_BASE_URL}/${id}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Workout not found.");
  }

  return response.json();
}
