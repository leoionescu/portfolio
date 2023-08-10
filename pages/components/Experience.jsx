import React from "react";
import AnimatedText from "./AnimatedText";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="bg-secondBackground py-16">
      <div className="justify-center mx-4 md:mx-20 lg:mx-40 ">
        <div className="flex justify-center">
          <AnimatedText
            classProps="text-6xl font-mono font-semibold text-center text-white pb-16"
            text="Experience"
            animation="slide-up"
          ></AnimatedText>
        </div>
        <div className="flex flex-col items-center">
          <Card
            classProps="opacity-0 slide-right w-full"
            time="03/2021 – 05/2021 – Bucharest, Romania"
            title="Internship - Software Development – Endava Romania"
            technologies="Angular Spring Selenium JUnit Git Linux"
            text="◦ Actively participated in workshops and training sessions focused on learning how to build both frontend and backend components using Spring Framework and Angular.\n
            ◦ Tested various software sequences created by the team to ensure they worked as expected.\n
            ◦ Used tools like Selenium and JUnit for testing and reported any issues found to the supervisor.\n
            ◦ Gained familiarity with essential Linux commands, which are commonly used in the development environment.\n
            ◦ Learned to use Git for version control, a crucial skill for collaboration in software projects."
          ></Card>
          <Card
            classProps="opacity-0 slide-left w-full"
            time="07/2022 - 09/2022 - Bucharest, Romania"
            title="Internship - Fullstack Developer - Chess Coders Romania"
            technologies="React Tailwind CSS Node.js Express.js MongoDB"
            text="Frontend Development:\n
            ◦ Utilized React to build engaging user interfaces for the website.\n
            ◦ Implemented responsive design using Tailwind CSS, ensuring the site looks great on various devices.\n
            ◦ Created dynamic components to enhance user interaction and overall experience.\n
            
            Backend Development:\n
            ◦ Developed the server-side using Express.js, handling data requests and interactions.\n
            ◦ Designed and integrated a database using MongoDB to store and manage essential data.\n
            ◦ Implemented APIs for communication between the frontend and backend, enabling seamless data exchange.\n
            
            Full-Stack Collaboration:\n
            ◦ Gained hands-on experience in the complete software development cycle, from frontend to backend.\n
            ◦ Worked collaboratively with the team to ensure smooth integration of frontend and backend components.\n
            ◦ Contributed to optimizing the performance and user-friendliness of the web application.\n"
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="10/2019 – 07/2022 – Bucharest, Romania"
            title="VOLUNTEER – SISC (FACULTY OF CYBERNETICS STUDENTS UNION)"
            text="Main Responsibilities:\n
            ◦ Working within the PR department of the association\n
            ◦ Participating to the association board meetings, planning future events and campaigns and dividing tasks\n
            ◦ Designing the advertising materials used in promoting our events\n
            ◦ Managing the online platforms and web page of the association\n
            ◦ Participating alongside other association members to meetings with the university board of directors, discussing our plans and proposals received from the students of our faculty\n"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
