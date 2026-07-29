"use client";

import { useQuery } from "@apollo/client/react";
import { IProjectWebData } from "@/base/interface/IProject";
import { PROJECT_WEB_QUERY } from "@/base/queries/project";
import AllDevProjects from "@/components/pages/ServicesPage/Development/AllDevProjects";
import AllProjectsHero from "@/components/pages/ServicesPage/Development/AllProjectsHero";

export default function AllDevProjectsClient() {
  const { data, loading } = useQuery<IProjectWebData>(PROJECT_WEB_QUERY);
  const projects = data?.webProjects || [];

  return (
    <>
      <AllProjectsHero />
      {loading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-white">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-zinc-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2">Loading projects...</span>
        </div>
      ) : (
        <AllDevProjects projects={projects} />
      )}
    </>
  );
}
