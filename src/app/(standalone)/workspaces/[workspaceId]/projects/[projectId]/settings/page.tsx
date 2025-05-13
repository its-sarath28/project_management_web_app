import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import ProjectSettingsClient from "./client";

const ProjectSettings = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <ProjectSettingsClient />;
};

export default ProjectSettings;
