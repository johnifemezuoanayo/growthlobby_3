import { projectsDetailsData } from "@/components/pages/ServicesPage/Design/DesignData";
import { createPageMetadata } from "@/lib/site-metadata";
import { getClient } from "@/base/lib/client";
import { PROJECT_DETAIL_QUERY } from "@/base/queries/project";
import { IProject } from "@/base/interface/IProject";
import type { Metadata } from "next";
import ProjectDetailPageClient from "./ProjectDetailPageClient";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;

  let title = "Design Projects";
  let description = "The requested design project details.";

  if (id.startsWith("proj-")) {
    const project = projectsDetailsData[id];
    if (project) {
      title = project.title;
      description = project.intro;
    }
  } else {
    try {
      const client = getClient();
      const { data } = await client.query<{ growthlobbyCaseStudies: IProject[] }>({
        query: PROJECT_DETAIL_QUERY,
        variables: { slug: id },
      });
      const project = data?.growthlobbyCaseStudies?.[0];
      if (project) {
        title = project.title;
        description = project.description || "The requested design project details.";
      }
    } catch (error) {
      console.error("Error fetching project metadata from API:", error);
    }
  }

  return createPageMetadata({
    title,
    description,
  });
}

export default async function DesignProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return <ProjectDetailPageClient projectId={id} />;
}

