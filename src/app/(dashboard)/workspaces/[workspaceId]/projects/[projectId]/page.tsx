import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import ProjectDetailClient from "./client";

const ProjectPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <ProjectDetailClient />;
};

export default ProjectPage;
