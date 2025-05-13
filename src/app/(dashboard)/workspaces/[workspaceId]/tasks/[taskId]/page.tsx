import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { TaskDetailClient } from "./client";

const TaskDetail = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <TaskDetailClient />;
};

export default TaskDetail;
