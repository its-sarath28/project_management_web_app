import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { MemberList } from "@/features/members/components/MemberList";

const WorkspaceMembers = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <MemberList />
    </div>
  );
};

export default WorkspaceMembers;
