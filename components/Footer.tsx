import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { LinkPreview } from './ui/LinkPreview'

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:mb-20" id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
            src="/footer-grid.svg" 
            alt="Kaushik Manivannan"
            className='w-full h-full opacity-40' />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[50vw]">
                Let&apos;s {" "}<span className="text-purple">build</span> something amazing {" "}<span className="text-purple">together, {" "}</span>I&apos;m all ears.
            </h1>
            <p className="text-white-200 md:mt-5 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:manivannan.k@northeastern.edu">
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Kaushik Manivannan</p>
        </div>

        <div className="flex justify-center items-center md:gap-3 gap-6 z-50 mt-5">
            {socialMedia.map((profile) => (
                <LinkPreview url={profile.link} key={profile.id} className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 z-50">
                    <img src={profile.img} alt="Kaushik Manivannan" width={25} height={25}
                    />
                </LinkPreview>
            ))}
        </div>
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 m-auto mt-7">
            Made with Next.js
        </h2>
    </footer>
  )
}

export default Footer