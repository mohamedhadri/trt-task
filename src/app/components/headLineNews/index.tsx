import React from 'react';
import Headline from '../headline';
import Image from 'next/image';
import { MetaData, Article } from '../../types';

interface HeadlinesNewsProps {
  headline: Article[];
  news: Article[];
}

const HeadlinesNews: React.FC<HeadlinesNewsProps> = ({ headline, news }) => {
  return (
    <div>
      {headline.map((item) => (
        <Headline
          key={item.id}
          id={item.id}
          type={item.type}
          title={item.title}
          description={item.description}
          mainImageUrl={item.mainImageUrl}
          overlayImageUrl={item.overlayImageUrl}
          thumbnailSquare={item.thumbnailSquare}
          categories={item.categories}
          metaTitle={item.metaTitle}
          metaDescription={item.metaDescription}
          showName={item.showName}
          showSlug={item.showSlug}
          path={item.path}
          publishedDate={item.publishedDate}
          authors={item.authors}
          showAuthor={item.showAuthor}
          showByLine={item.showByLine}
          showSparkbox={item.showSparkbox}
        />
      ))}

      {news.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Image src={item.mainImageUrl} alt={item.title} width={424} height={240} />
          <p>Published Date: {item.publishedDate}</p>
          <p>Authors: {item.authors.map(author => `${author.firstName} ${author.lastName}`).join(', ')}</p>
          <p>Categories: {item.categories.map(category => category.title).join(', ')}</p>
          <p>Meta Title: {item.metaTitle}</p>
          <p>Meta Description: {item.metaDescription}</p>
          <a href={item.path}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default HeadlinesNews;