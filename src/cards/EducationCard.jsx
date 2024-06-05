import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
        />
      }
      contentStyle={{
        background: "#1d1d1d",
        color: "#fff",
        boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1d1d" }}
      date={education.passed}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          src={education.img}
          alt={education.school}
        />
        <div className="ml-4 mt-4 md:mt-0">
          <h3 className="text-xl md:text-2xl font-semibold">
            {education.school}
          </h3>
          <p className="text-md md:text-lg text-gray-300">{education.degree}</p>
          <p className="text-sm md:text-md text-gray-500">{education.passed}</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
