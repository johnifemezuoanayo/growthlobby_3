"use client";

import WebProjectDetails from "@/components/pages/ServicesPage/Development/WebDevProjectDetails";

type WebProjectDetailPageClientProps = {
  projectId: string;
};

export default function WebProjectDetailPageClient({
  projectId,
}: WebProjectDetailPageClientProps) {
  return (
    <WebProjectDetails
      projectId={projectId}
      onScheduleClick={() => {}}
    />
  );
}
