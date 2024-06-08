import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow, formatRelativeTime } from '../../utils/formatTime';
interface Category {
  contentId: number;
  title: string;
}

interface Author {
  userName: string;
  firstName: string;
  lastName: string;
  path: string;
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
  authors: Author[];
  showAuthor: boolean;
  showByLine: boolean;
  showSparkbox: boolean;
}

const HeadlineCard: React.FC<HeadlineProps> = ({
  title,
  description,
  mainImageUrl,
  categories,
  publishedDate,
  path,
}) => {
  const dateString = publishedDate; // Use the publishedDate prop
  const relativeTime = formatRelativeTime(dateString);
  return (
    <div className="flex flex-col w-full my-6">
      {/* Full-width image */}
      <div className="w-full aspect-video relative">
        <Image
          src={mainImageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Categories and date */}
      <div className="flex gap-2 items-center mt-4">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <span
              key={category.contentId}
              className=" text-[#0089CC] font-bold"
            >
              {category.title}
            </span>
          ))}
        </div>
        <span className="text-gray-500">
          {relativeTime}
        </span>
      </div>

      {/* Title */}
      <Link href={path}>
        <h2 className="text-2xl font-bold mt-2 hover:text-blue-600 transition duration-300">
          {title}
        </h2>
      </Link>

      {/* Description */}
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default HeadlineCard;