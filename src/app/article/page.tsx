import React from 'react'
import   { ArticleData } from './types';
import articleData  from '../data/article.json';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const data = articleData as unknown as ArticleData;
const { content, related } = data;

const Article: React.FC = () =>  {
  
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
    <div className="flex flex-col lg:flex-row gap-8 container mx-auto">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
        <p className="text-gray-600 mb-4">{content.description}</p>
        {content.body.map((block, index) => {
          if (block.blockType === "text") {
            return (
              <div
                key={index}
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: block.value }}
              />
            );
          } else if (block.blockType === "youtube" && block.metadata && typeof block.metadata.url === 'string') {
            return (
              <div key={index} className="mb-4">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${block.metadata.url.split("v=")[1]}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          } else if (block.blockType === "image" ) {
            return (
              <div key={index} className="mb-4">
              {typeof block.value === 'object' && block.value !== null ? (
                <>
                  <Image
                    src={block.value.url}
                    alt={block.value.title || "Article image"}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                  {block.value.title && (
                    <p className="text-sm text-gray-600 mt-2">{block.value.title}</p>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-600 mt-2">{block.value}</p>
              )}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="flex flex-col gap-4">
          {related.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="flex items-center gap-2"
            >
              <Image
                src={item.mainImageUrl}
                alt={item.title}
                width={100}
                height={56}
                className="w-1/3 h-auto"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
export default Article;