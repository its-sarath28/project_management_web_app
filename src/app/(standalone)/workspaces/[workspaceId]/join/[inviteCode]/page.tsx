import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import WorkspaceJoinClient from "./client";

const JoinWorkspace = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <WorkspaceJoinClient />;
};

export default JoinWorkspace;
