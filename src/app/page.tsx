import Image from "next/image";
import { GetStaticProps } from 'next';
import Meta from './components/meta';
import Article from './components/article';
import { HomePageData  } from '../app/types'; 
import data from './data/home.json';
import HeadlinesNews from "./components/headLineNews";
import HeroSection from "./components/heroSection";
import Head from "next/head";

const HomePage = () => {
  const homeData = data as unknown as HomePageData;
  const { metadata, latest,headline,news} = homeData;

  return (
    <>
    <Head>
    <Meta {...metadata} />
    </Head>
    <div className="container mx-auto font-sans">
    <HeroSection/>
    <div className="grid grid-cols-1  lg:grid-cols-[1fr,calc(1px+2rem),288px] h-screen">
      <div className="bg-white">
        <div className="flex flex-col  ">
      {latest.map(article => (
          <Article key={article.id} {...article} />
         
        ))}
        </div>
        <HeadlinesNews headline={headline} news={news} />
      </div>
      <div className="bg-[#E1E6EB] mx-4 w-[1px] hidden  md:block" />
      <div className="bg-white hidden  md:block ">
      <div className="relative">
      <h6 className="text-lg font-semibold mb-2 text-[#22262A]">Edıtor’s Pıck</h6>
      <div className="relative">
        <Image
          src="/assets/editor-img.png"
          alt="Image Description"
          width={500}
          height={300}
        />
        <span className="absolute bottom-4 transform text-2xl px-4 py-2 text-white shadow-md">
        Fonko: A film on changing Africa
        </span>
      </div>
      </div>
      </div>
    </div>


    </div>
    </>
  );
};

export default HomePage;