import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from "src/cards/EducationCard";
import { education } from "src/data/constant";

const Education = () => {
  return (
    <>
      <hr />
      <div
        className="mt-6 flex flex-col justify-center items-center relative z-10"
        id="Education"
      >
        <div
          name="Services"
          id="bento-grid"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  "
        >
          <h2 className="text-3xl font-semibold mb-5">Education </h2>
          <p className="text-md font-normal">
            <p className="font-semibold text-lg md:text-xl text-theme-text_secondary mb-2">
              My education has been a journey of self-discovery and growth. My
              educational details are as follows.
            </p>
          </p>
          <VerticalTimeline>
            {education.map((education, index) => (
              <EducationCard key={`education-${index}`} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
