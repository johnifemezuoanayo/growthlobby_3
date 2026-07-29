import { projectsDetailsData } from "@/components/pages/ServicesPage/Design/DesignData";
import { createPageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import ProjectDetailPageClient from "./ProjectDetailPageClient";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsDetailsData[id];

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested design project could not be found.",
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.intro,
  });
}

export default async function DesignProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return <ProjectDetailPageClient projectId={id} />;
}
