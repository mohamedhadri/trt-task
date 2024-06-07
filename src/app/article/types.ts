interface Block {
  blockType: string;
  value: string | {
    url: string;
    title?: string;
  };
  metadata?: {
    url: string;
  };
}

interface RelatedStory {
  id: number;
  type: string;
  title: string;
  description: string;
  mainImageUrl: string;
  overlayImageUrl: string;
  path: string;
  publishedDate: string;
  authors: Array<{
    userName: string;
    firstName: string;
    lastName: string;
    path: string;
  }>;
  showAuthor: boolean;
  showByLine: boolean;
  showSparkbox: boolean;
}

interface ArticleData {
  content: {
    id: number;
    title: string;
    description: string;
    body: Block[];
    path: string;
    type: string;
    fields: {
      search_title: { text: string };
      search_description: { text: string };
      topic_slug: { text: string };
      mainImage: {
        type: string;
        assetId: number;
        key: string;
        bucket: string;
        cdnUrl: string;
        fileName: string;
        url: string;
        title: string;
        width: number;
        height: number;
        source: string;
        author: string;
      };
      authors: Array<{
        firstName: { text: string };
        lastName: { text: string };
        twitter?: { text: string };
        bio?: { text: string };
        path: string;
      }>;
      relatedStory?: RelatedStory;
      sources: Array<{
        key: string;
        value: string;
        metadata: Record<string, any>;
      }>;
      topics: Array<{
        contentId: number;
        title: string;
        slug: string;
      }>;
      team: {
        key: string;
        value: string;
        metadata: Record<string, any>;
      };
      contentFormat: {
        key: string;
        value: string;
        metadata: Record<string, any>;
      };
      country: {
        key: string;
        value: string;
        metadata: {
          code: string;
          region: string;
          subregion: string;
        };
      };
      tags: Array<{
        key: string;
        value: string;
        metadata: Record<string, any>;
      }>;
      overlayImage: {
        type: string;
        key: string;
        bucket: string;
        cdnUrl: string;
        fileName: string;
        url: string;
        width: number;
        height: number;
      };
    };
    metadata: {
      show_sparkbox: string;
    };
    site: string;
    viewCount: number;
    published: {
      date: string;
    };
    paths: string[];
  };
  related: RelatedStory[];
  popular: RelatedStory[];
  categoryNews: RelatedStory[];
}

export type { Block, RelatedStory, ArticleData };