import { gql } from "@apollo/client";


export const BLOG_QUERY = gql`
  query {
    blogs {
      id
      title
      slug
      category
      readTime
      featured
      publishedAt
      author {
        name
        profilePic {
          url
        }
        role
      }
      image {
        url
      }
      content {
        html
      }
    }
  }
`;

export const BLOG_FEATURED_QUERY = gql`
  query {
    blogs(where: { featured: true }, first: 3) {
      id
      title
      slug
      category
      readTime
      featured
      publishedAt
      author {
        name
        profilePic {
          url
        }
        role
      }
      image {
        url
      }
      content {
        html
      }
    }
  }
`;



export const BLOG_DETAIL_QUERY = gql`
  query getBlog($slug: String) {
    blogs(where: { slug: $slug }) {
      id
      title
      slug
      category
      readTime
      publishedAt

      author {
        name
        profilePic {
          url
        }
        role
      }
      image {
        url
      }
      content {
        html
      }
    }
  }
`;

export const RELATED_BLOG_QUERY = gql`
  query getRelatedBlogs($slug: String) {
    blogs(where: { slug_not_contains: $slug,}, first: 2) {
      id
      title
      slug
      category
      publishedAt
      readTime
      author {
        name
      }
      image {
        url
      }
    }
  }
`;



// export const RELATED_BLOG_QUERY = gql`
//   query getBlog($slug: String, $category: String[]) {
//     blogs(where: { category_in: $category, slug_not_in: $slug }) {
//       id
//       title
//       date
//       slug
//       category
//       readTime
//       author {
//         name
//       }
//       coverImage {
//         url
//       }
//     }
//   }
// `;

