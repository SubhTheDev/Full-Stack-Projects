//returns the publised articles
function getPublishedArticles(response) {
  return response.data.filter((art) => art.status === "published");
}

//returns the summary of an article
function toArticleSummary(response) {
  return {
    id: response?.id ?? null,
    title: response?.title ?? "Untitled",
    author: response?.author?.name ?? "Unknown Author",
    views: response?.stats?.views ?? 0,
  };
}

//returns the summary of published-only articles
function normalizeArticles(response) {
  const publisedArticles = getPublishedArticles(response);
  return publisedArticles.map((art) => ({
    id: art?.id ?? null,
    title: art?.title ?? "Untitled",
    author: art?.author?.name ?? "Unknown Author",
    views: art?.stats?.views ?? 0,
  }));
}

const apiResponse = {
  data: [
    {
      id: "a1",
      title: "Learning JavaScript",
      status: "published",
      author: { name: "Ava Stone" },
      stats: { views: 1200 },
    },
    {
      id: "a2",
      title: "Draft Notes",
      status: "draft",
      author: { name: "Noah Kim" },
      stats: { views: 50 },
    },
    {
      id: "a3",
      title: "Async Basics",
      status: "published",
      author: { name: "Mina Patel" },
      stats: { views: 900 },
    },
  ],
  meta: {
    total: 3,
  },
};

console.log(normalizeArticles(apiResponse));
console.log(getPublishedArticles(apiResponse).length);
console.log(toArticleSummary(apiResponse.data[0]));
