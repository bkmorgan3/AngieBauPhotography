

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}


function extractPhotoEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.photoCollection?.items;
}

export async function getPhotosByTag(isDraftMode: boolean, tag: string ) :Promise<any[]> {
  const entries = await fetchGraphQL(`
    query {
      photoCollection(where: {contentfulMetadata: {tags: {id_contains_some: "${tag}"}}}) {
        items {
          photo {
            url
            title
            description
            contentfulMetadata {
              tags {
                name
                id
              }
            }
          }
        }
      }
    }`, isDraftMode)
    return extractPhotoEntries(entries)
}

export async function getAllPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
  photoCollection {
    items {
      photo {
        url
        description
        title
        width
        height
        contentfulMetadata {
          tags {
            name
          }
        }
      }
    }
  }
}`,
isDraftMode,
  )
  return extractPhotoEntries(entries)
};