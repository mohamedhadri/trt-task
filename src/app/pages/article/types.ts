interface Block {
    blockType: string;
    value: string;
  }
  
  interface RelatedStory {
    id: string;
    title: string;
    description: string;
    path: string;
  }
  
  interface ArticleData {
    content: {
      title: string;
      body: Block[];
    };
    related: RelatedStory[];
  }
  
  export type { Block, RelatedStory, ArticleData };