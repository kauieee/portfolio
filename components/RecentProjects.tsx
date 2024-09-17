import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3D-Pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="pb-20" id="projects">
        <h1 className="heading mt-[4rem]">
            Showcase of {" "}
            <span className="text-purple">Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 lg:gap-y-12">
            {
                projects.map(({ id, title, des, img, iconLists, link }, index) => (
                    <div key={id} className="sm:h-[37rem] xs:h-[33rem] h-[29rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                        <PinContainer title={link} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden mb-10 rounded-lg h-fit">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.webp" alt="Kaushik Manivannan" />
                                </div>
                                <img 
                                    loading="lazy" 
                                    src={img} 
                                    alt="Kaushik Manivannan" 
                                    className={`z-10 absolute top-0 bottom-0 left-0 right-0 rounded-lg w-full h-full object-top`}
                                />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div 
                                            key={icon} 
                                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" 
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                            <img src={icon} alt="Kaushik Manivannan" className="p-2" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Dive In</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default RecentProjects;