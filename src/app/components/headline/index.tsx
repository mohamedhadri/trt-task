import React from 'react';
import Image from 'next/image';

interface Category {
  contentId: number;
  title: string;
}

interface HeadlineProps {
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
  authors: string[];
  showAuthor: boolean;
  showByLine: boolean;
  showSparkbox: boolean;
}

const Headline = ({ title, description, mainImageUrl, path }: HeadlineProps) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <Image src={mainImageUrl} alt={title} width={424} height={240} />
    {/* <a href={path}>Read more</a> */}
  </div>
);

export default Headline;