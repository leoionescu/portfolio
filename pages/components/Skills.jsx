import React, { createRef } from "react";
import AnimatedText from "./AnimatedText";
import { useInView } from "react-intersection-observer";

const randomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color = "bg-[#" + randomColor + "]";
  return color;
};

const Skill = ({ title, value, color }) => {
  return (
    <div className="py-4">
      <div className="flex my-1 mx-6">
        <p className="text-white text-2xl w-1/2 font-mono font-semibold">
          {title}
        </p>
        <p className="text-white text-2xl w-1/2 text-right font-mono font-semibold">
          {value}%
        </p>
      </div>
      <div
        id="bar"
        className="border-2 border-accent rounded-lg mx-6 py-1 px-1"
      >
        <div
          className="h-4 bg-accent rounded"
          style={{ width: value + "%" }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({});
  return (
    <div className="mt-10 bg-secondBackground py-16">
      <div className="justify-center mx-4 md:mx-20 lg:mx-40 ">
        <div className="flex justify-center">
          <AnimatedText
            classProps="text-6xl font-mono font-semibold text-center text-white pb-16"
            text="Skills"
            animation="slide-up"
          ></AnimatedText>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div ref={ref} className={inView ? "opacity-0 slide-right" : ""}>
              <AnimatedText
                classProps="text-4xl font-mono font-semibold text-center text-white"
                text="Languages"
                animation="slide-up"
              ></AnimatedText>
              <div className="border-2 border-accent rounded-lg mt-4 sm:py-4">
                <Skill title="JavaScript" value={100}></Skill>
                <Skill title="Python" value={90}></Skill>
                <Skill title="Java" value={80}></Skill>
                <Skill title="C\C++" value={80}></Skill>
                <Skill title="HTML" value={90}></Skill>
                <Skill title="CSS" value={80}></Skill>
                <Skill title="C#" value={50}></Skill>
                <Skill title="SQL" value={50}></Skill>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div ref={ref} className={inView ? "opacity-0 slide-up" : ""}>
              <AnimatedText
                classProps="text-4xl font-mono font-semibold text-center text-white"
                text="Frameworks"
                animation="slide-up"
              ></AnimatedText>
              <div className="border-2 border-accent rounded-lg mt-4 sm:py-4">
                <Skill title="React" value={90}></Skill>
                <Skill title="Android(Java)" value={80}></Skill>
                <Skill title="Node.js" value={80}></Skill>
                <Skill title="Express.js" value={80}></Skill>
                <Skill title="Tailwind" value={90}></Skill>
                <Skill title="Selenium" value={100}></Skill>
                <Skill title="Spring" value={50}></Skill>
                <Skill title="Angular" value={50}></Skill>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div ref={ref} className={inView ? "opacity-0 slide-left" : ""}>
              <AnimatedText
                classProps="text-4xl font-mono font-semibold text-center text-white"
                text="Tools"
                animation="slide-up"
              ></AnimatedText>
              <div className="border-2 border-accent rounded-lg mt-4 sm:py-4">
                <Skill title="Git" value={80}></Skill>
                <Skill title="Maven" value={100}></Skill>
                <Skill title="Linux" value={60}></Skill>
                <Skill title="Firebase" value={50}></Skill>
                <Skill title="VS Code" value={90}></Skill>
                <Skill title="Intellij" value={70}></Skill>
                <Skill title="MongoDB" value={80}></Skill>
                <Skill title="PostgreSQL" value={80}></Skill>
              </div>
            </div>
          </div>
        </div>
        {/* <h2 className="mt-16 text-white font-mono text-3xl font-semibold text-center">
          Other Programming Languages/Technologies/Tools:{" "}
        </h2> */}
      </div>
    </div>
  );
};

export default Skills;
