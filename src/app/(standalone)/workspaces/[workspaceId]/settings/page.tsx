import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import WorkspaceSettingsClient from "./client";

const WorkspaceSettings = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <WorkspaceSettingsClient />;
};

export default WorkspaceSettings;
