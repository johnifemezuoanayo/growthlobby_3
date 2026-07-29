export interface IBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  category: string;
  featured?: boolean;
  publishedAt: string;
  image: {
    url: string;
  };
  author: {
    name: string;
    profilePic?: {
      url: string;
    };
    role?: string;
  };
  content?: {
    html: string;
  };
}

export interface IBlogData {
  blogs: IBlog[];
}
