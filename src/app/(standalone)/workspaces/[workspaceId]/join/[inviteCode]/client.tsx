"use client";

import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";

import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";
import { JoinWorkspaceForm } from "@/features/workspaces/components/JoinWorkspaceForm";
import { useWorkSpaceId } from "@/features/workspaces/hooks/use-workspace-id";

const WorkspaceJoinClient = () => {
  const workspaceId = useWorkSpaceId();

  const { data, isLoading, isError } = useGetWorkspaceInfo({ workspaceId });

  if (isLoading) return <PageLoader />;

  if (!data || isError) return <PageError message="Workspace info not found" />;

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={data} />
    </div>
  );
};

export default WorkspaceJoinClient;
