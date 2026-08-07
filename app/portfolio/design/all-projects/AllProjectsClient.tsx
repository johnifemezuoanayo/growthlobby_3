"use client";

import { useQuery } from "@apollo/client/react";
import { IProjectData } from "@/base/interface/IProject";
import { PROJECT_QUERY } from "@/base/queries/project";
import AllDesignProjects from "@/components/pages/ServicesPage/Design/AllDesignProjects";
import AllDesignProjectsHero from "@/components/pages/ServicesPage/Design/AllDesignProjectsHero";

export default function AllProjectsClient() {
  const { data, loading } = useQuery<IProjectData>(PROJECT_QUERY);
  const projects = data?.projects || [];

  return (
    <>
      <AllDesignProjectsHero />
      {loading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-white">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-zinc-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2">Loading portfolio projects...</span>
        </div>
      ) : (
        <AllDesignProjects projects={projects} />
      )}
    </>
  );
}
