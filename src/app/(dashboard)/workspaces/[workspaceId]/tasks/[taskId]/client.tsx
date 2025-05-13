"use client";

import { useGetTask } from "@/features/tasks/api/use-get-task";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";

import { TaskBreadCrumbs } from "@/features/tasks/components/TaskBreadCrumbs";
import { TaskOverView } from "@/features/tasks/components/TaskOverView";
import { TaskDescription } from "@/features/tasks/components/TaskDescription";

import { PageLoader } from "@/components/PageLoader";
import { PageError } from "@/components/PageError";
import { DottedSeparator } from "@/components/DottedSeparator";

export const TaskDetailClient = () => {
  const taskId = useTaskId();

  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) return <PageLoader />;

  if (!data) return <PageError message="Task not found" />;

  return (
    <div className="flex flex-col">
      <TaskBreadCrumbs project={data.project} task={data} />

      <DottedSeparator className="my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverView task={data} />

        <TaskDescription task={data} />
      </div>
    </div>
  );
};
