

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


export async function getPersonalPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "personal"}}}) {
    items {
      photo {
        url
        width
        title
        description
        height
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

export async function getMotionPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "motion"}}}) {
    items {
      photo {
        url
        width
        title
        description
        height
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
export async function getHighlightsPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "highlights"}}}) {
    items {
      photo {
        url
        width
        title
        description
        height
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

export async function getLemonadePhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "lemonade"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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
export async function getDrinksPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "drinks"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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
export async function getBeautyPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "beauty"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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
export async function getFoodPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "foodProducts"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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
export async function getFitnessPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "fitness"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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
export async function getProductPhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "products"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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
export async function getPeoplePhotos(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(`
  query {
  photoCollection( where: {contentfulMetadata: { tags: {id_contains_some: "people"}}}) {
    items {
      photo {
        url
        title
        description
        width
        height
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