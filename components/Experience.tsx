'use client';

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/data";
import { useInView } from "react-intersection-observer";
import { BackgroundGradient } from "./ui/BackgroundGradient";

interface Experience {
  date: string;
  icon: string;
  iconBg: string;
  title: string;
  company_name: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  position: "left" | "right";
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, position }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: "#00031A",
          color: "#fff",
          borderRadius: "15px",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0px",
          marginTop: "30px"
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[70%] h-[70%] object-contain'
            />
          </div>
        }
        position={position}
      >
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-[linear-gradient(90deg,rgba(4,7,29,1)0%,rgba(12,14,35,1)100%)]">
          <div className="[@media(min-width:451px)]:hidden my-4 flex justify-center bg-foreground rounded-full w-fit p-5 mx-auto">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-16 h-16 object-contain'
            />
          </div>
          <div>
            <h3 className='text-white text-[24px] font-bold text-center mb-1'>{experience.title}</h3>
            <p
              className='text-[16px] font-semibold text-purple'
              style={{ margin: 0 , textAlign: "center"}}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </BackgroundGradient>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience: React.FC = () => {
  const timelineStyles = `
    .vertical-timeline {
      padding: 0px;
      width: 100%;
    }

    @media only screen and (max-width: 450px) {
      .vertical-timeline.vertical-timeline--two-columns:before {
        display: none;
      }
        
      .vertical-timeline-element-content {
        margin-left: 0 !important;
        width: 100% !important;
      }
      .vertical-timeline-element-content .vertical-timeline-element-date {
        position: static !important;
        margin-bottom: 1em !important;
      }
      .vertical-timeline-element-icon {
        display: none !important;
      }
      .vertical-timeline-element-content-arrow {
        display: none !important;
      }
    }
  `;

  return (
    <div className="" id="experience">
      <style>{timelineStyles}</style>
      <h1 className="heading mt-[7rem]">
        My <span className="text-purple">Journey</span> So Far
      </h1>
      <div className='flex flex-col py-5 sm:py-10 lg:py-20'>
        <VerticalTimeline
          animate={true}
          className="vertical-timeline"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;