import React from 'react'
import   { ArticleData } from './types';
import articleData  from '../../data/article.json';
import Head from 'next/head';

const data = articleData as unknown as ArticleData;
const { content, related } = data;

const Article: React.FC = () => {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
        <div className="mb-8">
          {content.body.map((block, index) => (
            <div key={index} className="mb-4">
              {block.blockType === 'text' && (
                <div dangerouslySetInnerHTML={{ __html: block.value }} />
              )}
              {block.blockType === 'youtube' && (
                <div
                  className="aspect-w-16 aspect-h-9"
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Related Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((story) => (
            <div key={story.id} className="border p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="mb-2">{story.description}</p>
              <a href={story.path} className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Article;