// types/index.ts
interface MetaData {
  siteUrl: string;
  pageTitle: string;
  siteLanguage: string;
  pageDescription: string;
  pageImage: string;
}

interface Category {
  contentId: number;
  title: string;
}

interface Article {
  id: number;
  type: string;
  title: string;
  description: string;
  mainImageUrl: string;
  overlayImageUrl: string;
  thumbnailSquare: string;
  categories: Category[];
  metaTitle: string;
  metaDescription: string;
  showName: string;
  showSlug: string;
  path: string;
  publishedDate: string;
  authors: any[];
  showAuthor: boolean;
  showByLine: boolean;
  showSparkbox: boolean;
}

interface HomePageData {
  metadata: MetaData;
  latest: Article[];
  headline: Article[];
  news: Article[];
}

export type { MetaData, Category, Article, HomePageData };