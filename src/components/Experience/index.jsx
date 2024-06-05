import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "src/cards/ExperienceCard";
import { experiences } from "src/data/constant";

const Experience = () => {
  return (
    <>
      <hr />
      <div
        className="mt-6 flex flex-col justify-center items-center relative z-10"
        id="Experience"
      >
        <div
          name="Services"
          id="bento-grid"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  "
        >
          <h2 className="text-3xl font-semibold mb-5">Experience </h2>
          <p className="text-md font-normal">
            <p className="font-semibold text-lg md:text-xl text-theme-text_secondary mb-2">
              My work experience as a software engineer and working on different
              companies and projects.
            </p>
          </p>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
