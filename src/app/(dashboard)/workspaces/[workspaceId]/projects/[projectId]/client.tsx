"use client";

import Link from "next/link";
import { PencilIcon } from "lucide-react";

import { ProjectAvatar } from "@/features/projects/components/ProjectAvatar";
import { TaskViewSwitcher } from "@/features/tasks/components/TaskViewSwitcher";
import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { useGetProject } from "@/features/projects/api/use-get-project";

import { Button } from "@/components/ui/button";

import { PageLoader } from "@/components/PageLoader";
import { PageError } from "@/components/PageError";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { Analytics } from "@/components/Analytics";

const ProjectDetailClient = () => {
  const projectId = useProjectId();

  const { data: project, isLoading: isProjectLoading } = useGetProject({
    projectId,
  });

  const { data: analytics, isLoading: isLoadingAnalytics } =
    useGetProjectAnalytics({ projectId });

  if (isProjectLoading || isLoadingAnalytics) return <PageLoader />;

  if (!project) return <PageError message="Project not found" />;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={project.name}
            image={project.imageUrl}
            className="size-8"
          />

          <p className="text-lg font-semibold">{project.name}</p>
        </div>

        <div>
          <Button asChild variant="secondary" size="sm">
            <Link
              href={`/workspaces/${project.workspaceId}/projects/${project.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" /> Edit Project
            </Link>
          </Button>
        </div>
      </div>

      {analytics && <Analytics data={analytics} />}

      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};

export default ProjectDetailClient;
