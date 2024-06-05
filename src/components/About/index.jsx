import React from "react";

const About = () => {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  space-y-2"
      >
        <h1 className="text-3xl font-semibold mb-5">About </h1>
        <p className="text-md font-normal">
          <p className="text-sm md:text-md text-justify">
            Hello, I'm a dedicated and proficient Full Stack Developer based in
            Indore, Madhya Pradesh, India, with a strong enthusiasm for
            technology. I specialize in creating fully functional Web
            applications, utilizing my expertise in HTML, CSS, JavaScript,
            ReactJS, Node.js, MongoDB, Express.js, and Git. My background
            includes a foundation in data structures and algorithms, which
            enhances my ability to develop efficient and scalable solutions. As
            an avid open-source enthusiast, I am deeply involved in the
            open-source community, where I have gained significant knowledge and
            contributed to various projects. I value the collaborative spirit
            and knowledge-sharing culture that open-source fosters.
          </p>
        </p>
        <button className="py-3 px-4 bg-blue-600 rounded-full hover:scale-110 text-white ">
          <a
            className=""
            target="_blank"
            href="https://drive.google.com/file/d/1RDE7PFIWXMAvmE_8TU6X2tZF5BiqnkAp/view"
          >
            Download CV{" "}
          </a>
        </button>
      </div>
    </>
  );
};

export default About;
