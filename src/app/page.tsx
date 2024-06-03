import Image from "next/image";
import { GetStaticProps } from 'next';
import Meta from './components/meta';
import Article from './components/article';
import { HomePageData  } from '../app/types'; 
import data from './data/home.json';
import HeadlinesNews from "./components/headLineNews";

const HomePage = () => {
  const homeData = data as unknown as HomePageData;
  const { metadata, latest,headline,news} = homeData;

  return (
    <>
    <Meta {...metadata} />
    <div className="container mx-auto">

    <div className="grid grid-cols-[1fr,calc(1px+2rem),288px] h-screen">
      <div className="bg-white">
        <div className="flex flex-col gap-12 ">
      {latest.map(article => (
          <Article key={article.id} {...article} />
         
        ))}
        </div>
        <HeadlinesNews headline={headline} news={news} />
      </div>
      <div className="bg-gray-500 mx-4 w-[1px]" />
      <div className="bg-white">
        test
      </div>
    </div>


    </div>
    </>
  );
};

export default HomePage;