import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Ex-employee says Meta fired him over Gaza content handling, files lawsuit',
    date: '12 hours ago',
    imageUrl: '/assets/carousel-1.png',
    link: '/discrimination/ex-employee-says-meta-fired-him-over-gaza-content-handling-files-lawsuit-18169868',
  },
  {
    id: 2,
    title: 'Thousands march against far-right in Germany ahead of EU elections',
    date: '4 days ago',
    imageUrl: '/assets/carousel-2.png',
    link: '/europe/thousands-march-against-far-right-in-germany-ahead-of-eu-elections-18168853',
  },
  {
    id: 3,
    title: 'UK actors, writers expose \'systemic racism\' over Abbott treatment',
    date: '4 days ago',
    imageUrl: '/assets/carousel-3.png',
    link: '/discrimination/uk-actors-writers-expose-systemic-racism-over-abbott-treatment-18168584',
  },
  {
    id: 4,
    title: 'UK actors, writers expose \'systemic racism\' over Abbott treatment',
    date: '4 days ago',
    imageUrl: '/assets/carousel-3.png',
    link: '/discrimination/uk-actors-writers-expose-systemic-racism-over-abbott-treatment-18168584',
  },
];

export default function Carousel() {
  return (
    <section className=" w-full bg-[#EDF2F7] py-12">
      <div className=" w-full mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#005D99]">US Elections 2020</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={article.link}>
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}