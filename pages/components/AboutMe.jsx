import React from "react";
import Image from "next/image";
import poza from "../../public/images/poza2.jpg";
import AnimatedText from "./AnimatedText";
import { useInView } from "react-intersection-observer";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import TypingAnimation from "./TypingAnimation";

const AboutMe = () => {
  const { ref, inView } = useInView({});
  return (
    <div className="pt-20 md:pt-20 lg:pt-40 pb-20 md:pb-20 lg:pb-32 grid lg:grid-flow-col gap-4 justify-center md:mx-20 lg:mx-40">
      <div className="flex flex-col justify-evenly mx-4 md:mx-0">
        <div>
          <AnimatedText
            classProps="bg-main text-white font-mono font-bold text-2xl sm:text-3xl"
            text="Hello, my name is"
            animation="slide-right"
          ></AnimatedText>
          <AnimatedText
            classProps="bg-main text-gray-400 font-mono font-bold text-4xl sm:text-5xl"
            text="Ionescu Leonard-Octavian"
            animation="slide-right"
          ></AnimatedText>
          <div className="flex">
            <h2
              ref={ref}
              className={
                inView
                  ? "mt-2 bg-main text-white font-mono font-bold text-3xl sm:text-4xl opacity-0 slide-right"
                  : ""
              }
            >
              and I am a
            </h2>
            <h2
              className={
                inView
                  ? "mt-2 bg-main text-accent font-mono font-bold text-3xl sm:text-4xl ml-4 opacity-0 slide-left sm:hidden lg:block xl:hidden"
                  : ""
              }
            >
              Student
            </h2>
            <TypingAnimation
              ref={ref}
              classProps={
                inView
                  ? "mt-2 bg-main text-accent font-mono font-bold text-3xl sm:text-4xl ml-4 hidden sm:block lg:hidden xl:block"
                  : ""
              }
              words={[
                "Master Student",
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
                "Mobile Developer",
              ]}
            ></TypingAnimation>
          </div>
        </div>
        <AnimatedText
          classProps="bg-main text-white font-mono text-xl mt-8 hidden lg:block"
          text="I am currently a student of the Master of Computer Science program at the University of Vienna. My educational experiences, both within and beyond the classroom, have nurtured my analytical thinking, problem-solving skills, and a profound understanding of various programming languages and concepts."
          animation="slide-right"
        ></AnimatedText>
        <div className="flex gap-4 hidden lg:flex opacity-0 slide-up items-center justify-between">
          <div className="flex gap-4 items-center">
            <a href="https://github.com/leoionescu">
              <AiFillGithub className="text-white text-4xl hover:text-accent cursor-pointer mt-4"></AiFillGithub>{" "}
            </a>
            <a href="https://www.linkedin.com/in/leonard-ionescu-821aa6130/">
              <AiFillLinkedin className="text-white text-4xl hover:text-accent cursor-pointer mt-4"></AiFillLinkedin>{" "}
            </a>
            <a
              className="text-white text-xl hover:text-accent cursor-pointer mt-4"
              href="mailto:ionescu.leonard28@gmail.com?subject=Hello%20There&body=Just%20saying%20hi!"
            >
              ionescu.leonard28@gmail.com
            </a>
            {/* <h3 className="text-white text-4xl hover:text-accent cursor-pointer mt-4">
              🏠Vienna
            </h3> */}
          </div>

          <div className="hidden 2xl:flex gap-4 items-center mx-4">
            <AiFillPushpin className="text-white text-2xl mt-4"></AiFillPushpin>
            <h3 className="text-white text-2xl mt-4">Vienna, Austria</h3>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={
          inView
            ? "px-4 md:px-0 my-2 h-96 w-96 mx-auto opacity-0 slide-up delay-0"
            : "px-4 md:px-0 my-2 h-96 w-96 mx-auto"
        }
      >
        <Image src={poza} alt="a" className="rounded-full" />
      </div>
      <AnimatedText
        classProps="mx-4 md:mx-0 bg-main text-white font-mono text-xl mt-8 lg:hidden"
        text="I am currently a student in my third semester of the Master of Computer Science program at the University of Vienna. My educational experiences, both within and beyond the classroom, have nurtured my analytical thinking, problem-solving skills, and a profound understanding of various programming languages and concepts."
        animation="slide-right"
      ></AnimatedText>
      <div className="mx-4 md:mx-0 flex gap-4 lg:hidden opacity-0 items-center slide-up">
        <a href="https://github.com/leoionescu">
          <AiFillGithub className="text-white text-4xl hover:text-accent cursor-pointer mt-4"></AiFillGithub>{" "}
        </a>
        <a href="https://www.linkedin.com/in/leonard-ionescu-821aa6130/">
          <AiFillLinkedin className="text-white text-4xl hover:text-accent cursor-pointer mt-4"></AiFillLinkedin>{" "}
        </a>
        <a
          className="text-white hover:text-accent cursor-pointer mt-4"
          href="mailto:ionescu.leonard28@gmail.com?subject=Hello%20There&body=Just%20saying%20hi!"
        >
          ionescu.leonard28@gmail.com
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
