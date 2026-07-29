export interface IProject {
    id?: string;
    image: string;
    title: string;
    link: string;
    projectType: string;
    services?: string;
    timeline?: string;
    category: string;
    introImage: {url : string}
    industry: string;
    platform: string;
    slug: string;
    livesite?: string;
    year?: string;
    description?: string;
    content?: {
        html: string;
    };
}

export interface IProjectData {
    growthlobbyCaseStudies: IProject[]
}

export interface IProjectWeb {
    id?: string;
    coverImage: {url : string}
    title: string;
    description: string;
    sector: string;
    liveSite?: string;
    projectImage: {url : string}
    ourApproach: string
}

export interface IProjectWebData {
    webProjects: IProjectWeb[]
}