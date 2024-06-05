import React from "react";
import { CiMail } from "react-icons/ci";

import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
const Footer = () => {
  return (
    <>
      <div>
        <footer className="py-2 shadow-sm">
          <div className="max-w-screen-2xl   container mx-auto px-4 md:px-20 my-5">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>I'm open to</h1>
              <ReactTyped
                className="text-red-700 font-semibold"
                strings={[
                  " Suggestions",
                  " Collabrations",
                  " Feedback",
                  " Networking",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              ></ReactTyped>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Thank you for your interest in getting in touch with me. I'm eager
              to explore new opportunities, receive feedback or suggestions,
              collaborate on projects, and expand my network.
            </p>
            <p className="text-sm md:text-md text-justify">
              For any specific inquiries or comments, please feel free to reach
              out to me directly at shubhambhawsar1999@gmail.com.
            </p>
            <p className="text-sm md:text-md text-justify">
              I make every effort to respond to all messages within 24 hours,
              although response times may be slightly longer during peak
              periods. Additionally, if you prefer to connect via social media,
              you can find me on LinkedIn at @bhawsar-shubham
              {/* <a target="_blank" href="https://github.com/bhawsar-shubham/">
                <FaInstagram className="text-xl md:text-3xl hover:scale-110 duration-200" />
              </a> */}
            </p>
            <br />
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-4">
                <ul className="flex space-x-3">
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/bhawsar-shubham/"
                    >
                      <FaGithub className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://linkedin.com/in/bhawsar-shubham/"
                    >
                      <FaLinkedin className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/shubham5782">
                      <FaXTwitter className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:shubhambhawsar1999@gmail.com">
                      <CiMail className="text-xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-3 pt-3 border-gray-700 flex flex-col items-center">
                <div className="w-full dark:border-white border-black border-t-2 mb-2"></div>
                <p className="text-sm">
                  {" "}
                  &copy; 2024 Shubham Bhawsar. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
