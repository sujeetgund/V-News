export type News = {
    status: string
    totalResults: number
    articles: Array<{
      source: {
        id: string
        name: string
      },
      author: string
      title: string
      description: string
      url: string
      urlToImage: string
      publishedAt: string
      content: string
    }>
}