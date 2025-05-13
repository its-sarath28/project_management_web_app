"use client";

import { ResponsiveModal } from "@/components/ResponsiveModal";

import { CreateWorkspaceForm } from "./CreateWorkspaceForm";

import { useCreateWorkSpaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkSpaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
