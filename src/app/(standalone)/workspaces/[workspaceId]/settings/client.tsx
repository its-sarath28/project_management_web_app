"use client";

import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { EditWorkspaceForm } from "@/features/workspaces/components/EditWorkspaceForm";
import { useWorkSpaceId } from "@/features/workspaces/hooks/use-workspace-id";

const WorkspaceSettingsClient = () => {
  const workspaceId = useWorkSpaceId();

  const { data, isLoading, isError } = useGetWorkspace({ workspaceId });

  if (isLoading) return <PageLoader />;

  if (!data || isError) return <PageError message="Workspace not found" />;

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={data} />
    </div>
  );
};

export default WorkspaceSettingsClient;
