import Image from 'next/image';
import Carousel from '../carousel';
<link href="https://fonts.cdnfonts.com/css/trt" rel="stylesheet"></link>


export default function HeroSection() {
 
    const trtFont = {
        fontFamily: 'TRT, sans-serif'
      };
    
  return (
        <div className='container mx-auto'>
            <nav className="hidden md:flex bg-transparent">
                <ul className="flex gap-12 text-16 py-6">
                <li className="font-bold"><a href="#">TOPICS</a></li>
                <li><a href="#" className=' uppercase text-[#63676C]'>Azerbaijan-Armenia dispute</a></li>
                <li><a href="#" className=' uppercase text-[#63676C]'>COVID-19</a></li>
                <li><a href="#" className=' uppercase text-[#63676C]'>eastern mediterranean</a></li>
                <li><a href="#" className=' uppercase text-[#63676C]'>my turkey</a></li>
                </ul>
            </nav>
            <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full lg:w-[432px] xl:w-[552px] 2xl:w-[648px]">
            <div className="relative">
            <Image
            src="/assets/thumb.png"
            alt="Image Description"
            layout='responsive'
            width={100}
            height={100}
            className="w-full"
            />
            <h3 style={trtFont} className="absolute top-4 left-4 bg-[#005D99] text-white px-4 py-2 text-sm	font-bold tracking-wide uppercase">
                Azerbaijan-Armenia dispute
            </h3>
        </div>
        <h1 className='font-bold lg:text-5xl text-xl leading-tight'>Azerbaijan issues final warning to Armenia in Karabakh clashes</h1>
        <div>
            <h6 className='text-[#A0A5AA] font-bold pt-6 tracking-wider hidden lg:block'>RELATED STORIES</h6>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex-1 font-bold">
        Calls grow for Azerbaijan, Armenia to end fighting over occupied Karabakh
        </div>
        <div className="flex-1 font-bold">
        Turkish lawmakers condemn Armenian attacks on Azerbaijan
        </div>
        <div className="flex-1 font-bold">
        Azerbaijan downs Armenian drone
        </div>
        </div>
        </div>
        <div className="w-full md:flex-1">
            <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2 flex flex-wrap gap-6">
                <div className=''>
                    <Image
                    src="/assets/secondary.png"
                    alt="Image Description"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-full sm:w-full md:w-[334px] lg:w-[180px] xl:w-[240px] 2xl:w-[288px]"
                    />
                    <h3 className='text-2xl font-bold my-2'>The importance of Russia’s growing footprint in Iraq</h3>
                    <p>The Kremlin has been building influence in the Iraqi energy sector and propping 
                        up anti-US forces in the country as part of its objectives to counterbalance US hegemony in the region.</p>
                </div>
                <div className=''>
                    <Image
                    src="/assets/thumb.png"
                    alt="Image Description"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-full sm:w-full md:w-[334px] lg:w-[180px] xl:w-[240px] 2xl:w-[288px]"
                    />
                    <h3 className='text-2xl font-bold my-2'>The importance of Russia’s growing footprint in Iraq</h3>
                    <p>No matter how unpopular a US leader is, they have a home in Kosovo.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className='flex gap-2 border-b border-b-[#E1E6EB] py-4'>
                    <div className='flex justify-center  flex-col'>
                    <Image
                    src="/assets/pp.png"
                    alt="Image Description"
                    width={70}
                    height={70}
                    className=""
                    />
                    </div>
                    <div>
                        <span className=' text-[#A0A5AA]'>Carel du Marchie Sarvaas</span>
                        <h6 className=' font-bold'>Why an effective vaccine is just the start of disease control</h6>
                    </div>
                </div>
                <div className='flex gap-2 border-b border-b-[#E1E6EB] py-4'>
                    <div className='flex justify-center flex-col'>
                    <Image
                    src="/assets/pp.png"
                    alt="Image Description"
                    width={70}
                    height={70}
                    className=""
                    />
                    </div>
                    <div>
                        <span className=' text-[#A0A5AA]'>Carel du Marchie Sarvaas</span>
                        <h6 className=' font-bold'>Why an effective vaccine is just the start of disease control</h6>
                    </div>
                </div>
                <div className='flex gap-2 border-b border-b-[#E1E6EB] py-4'>
                    <div className='flex justify-center flex-col'>
                    <Image
                    src="/assets/pp.png"
                    alt="Image Description"
                    width={70}
                    height={70}
                    className=""
                    />
                    </div>
                    <div>
                        <span className=' text-[#A0A5AA]'>Carel du Marchie Sarvaas</span>
                        <h6 className=' font-bold'>Why an effective vaccine is just the start of disease control</h6>
                    </div>
                </div>
                <div className='border-b border-b-[#E1E6EB] py-4'>
                    <span className='text-lg font-semibold mr-2 text-[#0089CC]'>AFRICA</span>
                    <h6 className='text-xl font-bold mb-2'>Hundreds of prisoners escape Uganda prison</h6>
                </div>
                <div className='border-b border-b-[#E1E6EB] py-4'>
                    <span className='text-lg font-semibold mr-2 text-[#0089CC]'>AFRICA</span>
                    <h6 className='text-xl font-bold mb-2'>Hundreds of prisoners escape Uganda prison</h6>
                </div>
                <div className='border-b border-b-[#E1E6EB] py-4'>
                    <span className='text-lg font-semibold mr-2 text-[#0089CC]'>AFRICA</span>
                    <h6 className='text-xl font-bold mb-2'>Hundreds of prisoners escape Uganda prison</h6>
                </div>
                
            </div>
            </div>
        </div>
            </div>
            <Carousel/>
        </div>
  );
}