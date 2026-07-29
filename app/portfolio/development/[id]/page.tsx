import { projectsDetailsData } from "@/components/pages/ServicesPage/Design/DesignData";
import { createPageMetadata } from "@/lib/site-metadata";
import { getClient } from "@/base/lib/client";
import { WEB_PROJECT_DETAIL_QUERY } from "@/base/queries/project";
import { IProjectWeb } from "@/base/interface/IProject";
import type { Metadata } from "next";
import WebProjectDetailPageClient from "./WebProjectDetailPageClient";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;

  let title = "Web Projects";
  let description = "The requested development project details.";

  if (id.startsWith("proj-")) {
    const project = projectsDetailsData[id];
    if (project) {
      title = project.title;
      description = project.intro;
    }
  } else {
    try {
      const client = getClient();
      const { data } = await client.query<{ webProjects: IProjectWeb[] }>({
        query: WEB_PROJECT_DETAIL_QUERY,
        variables: { id },
      });
      const project = data?.webProjects?.[0];
      if (project) {
        title = project.title;
        description = project.description;
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

export default async function WebProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return <WebProjectDetailPageClient projectId={id} />;
}
