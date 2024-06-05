import React from 'react';
import Image from 'next/image';
import { formatDistanceToNow, formatRelativeTime } from '../../utils/formatTime';
interface Category {
  contentId: number;
  title: string;
}

interface ArticleProps {
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

const Article = ({ title, description, mainImageUrl, path, categories, publishedDate }: ArticleProps) => {
  const dateString = publishedDate; // Use the publishedDate prop
  const relativeTime = formatRelativeTime(dateString);

  return (
    <div>
        <div className="flex flex-col lg:flex-row items-start border-b border-b-[#E1E6EB] p-6 pl-0">
  <div className="lg:flex lg:items-start mb-4 lg:mb-0 lg:mr-4">
    <div className="w-20 mr-4 lg:w-[424px] lg:flex-shrink-0">
      <Image
        src={mainImageUrl}
        alt={title}
        width={424}
        height={424}
        className="w-full h-auto object-cover"
      />
    </div>
      <div className='flex flex-col'>
      <div>
      <div className="flex items-center mb-2">
        <h6 className="text-lg font-semibold mr-2 text-[#0089CC]">
          {categories.map((category) => category.title).join(' & ')}
        </h6>
        <span className="text-[#A0A5AA]">{relativeTime}</span>
      </div>
    </div>
    <div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
      </div>
  </div>

        </div>
    </div>
  );
};

export default Article;