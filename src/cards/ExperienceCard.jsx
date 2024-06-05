import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  const desc = experience?.desc?.split(".");

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        background: "#1d1d1d",
        color: "#fff",
        boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1d1d" }}
      date={experience.date}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          src={experience.img}
          alt={experience.company}
        />
        <div className="ml-4 mt-4 md:mt-0">
          <h3 className="text-xl md:text-2xl font-semibold">
            {experience.role}
          </h3>
          <p className="text-md md:text-lg text-gray-300">
            {experience.company}
          </p>
          <p className="text-sm md:text-md text-gray-500">{experience.date}</p>
        </div>
      </div>
      <div className="text-gray-400 mt-2">
        {experience?.desc && (
          <div className="flex flex-col gap-2">
            {desc?.map(
              (exp, index) =>
                exp && (
                  <div key={`exp-${index}`} className="ml-4">
                    • {exp}
                  </div>
                )
            )}
          </div>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="text-gray-300">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2 mt-1">
                {experience?.skills?.map((skill, index) => (
                  <div key={`skill-${index}`} className="ml-4">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
