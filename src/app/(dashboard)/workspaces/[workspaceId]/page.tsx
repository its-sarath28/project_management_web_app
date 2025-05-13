import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { WorkspaceDetailClient } from "./client";

const WorkspacePage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <WorkspaceDetailClient />;
};

export default WorkspacePage;
