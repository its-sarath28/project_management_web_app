"use client";

import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";

import { useGetProject } from "@/features/projects/api/use-get-project";
import { EditProjectForm } from "@/features/projects/components/EditProjectForm";
import { useProjectId } from "@/features/projects/hooks/use-project-id";

const ProjectSettingsClient = () => {
  const projectId = useProjectId();

  const { data, isLoading, isError } = useGetProject({ projectId });

  if (isLoading) return <PageLoader />;

  if (!data || isError) return <PageError message="Project not found" />;

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={data} />
    </div>
  );
};

export default ProjectSettingsClient;
