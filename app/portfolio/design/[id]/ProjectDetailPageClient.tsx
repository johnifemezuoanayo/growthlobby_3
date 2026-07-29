"use client";

import DesignProjectDetails from "@/components/pages/ServicesPage/Design/DesignProjectDetails";

type ProjectDetailPageClientProps = {
  projectId: string;
};

export default function ProjectDetailPageClient({
  projectId,
}: ProjectDetailPageClientProps) {
  return (
    <DesignProjectDetails
      projectId={projectId}
      onScheduleClick={() => {}}
    />
  );
}
