import WorkoutDetails from "@/components/workouts/WorkoutDetails";

export default async function WorkoutPage({ params }: PageProps<"/workouts/[id]">) {
  const { id } = await params;
  return <WorkoutDetails id={id} />;
}
