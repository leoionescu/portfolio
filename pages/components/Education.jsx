import React from "react";
import AnimatedText from "./AnimatedText";
import Card from "./Card";

const Education = () => {
  return (
    <div className="py-16">
      <div className="justify-center mx-4 md:mx-20 lg:mx-40 ">
        <div className="flex justify-center">
          <AnimatedText
            classProps="text-6xl font-mono font-semibold text-center text-white pb-16"
            text="Education"
            animation="slide-up"
          ></AnimatedText>
        </div>
        <div className="flex flex-col items-center">
          <Card
            classProps="opacity-0 slide-right w-full"
            time="10/2022 - Ongoing – Vienna, Austria"
            title="Master in Computer Science - University of Vienna"
            technologies="C++ Python Java OpenMP MPI OpenCL"
            text="Studied Subjects:\n
            ◦ Foundations of Data Analysis\n
            ◦ Parallel Computing\n
            ◦ Information Security Management\n
            ◦ Network Security\n
            ◦ Signal and Image Processing\n
            ◦ Parallel Architectures and Programming Models\n
            ◦ Praktikum 1: Implemented a public blockchain system\n"
          ></Card>
          <Card
            classProps="opacity-0 slide-left w-full"
            time="10/2019 – 07/2022 – Bucharest, Romania"
            title="BACHELOR OF ECONOMIC INFORMATICS – Academy of Economic Studies - Faculty of Cybernetics, Statistics and  Economic Informatics"
            technologies="C\C++ Java JavaScript C# SQL Linux React Node.js JUnit Android"
            text="Studied Subjects:\n
            ◦ Object-Oriented Programming\n
            ◦ Multiparadigm Programming\n
            ◦ Algorithms and Programming Techniques\n
            ◦ Data Structures\n
            ◦ Operating Systems\n
            ◦ Web Technologies\n
            ◦ Mobile App Development (Android)\n
            ◦ Windows App Development\n
            ◦ Software Quality and Testing\n
            ◦ Databases\n
            Field of study: Economic Informatics\n
            Thesis: The Development of a Business Video Conference Application\n
            Final Grade: 10 out of 10\n"
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="02/2022 – Bucharest, Romania"
            title="International English Language Testing System (IELTS)"
            text="Test Results:\n
            ◦ Listening: 9.0/9.0 (C2)\n
            ◦ Reading: 9.0/9.0 (C2)\n
            ◦ Writing: 7.0/9.0 (B2)\n
            ◦ Speaking: 8.0/9.0 (C1)\n
            ◦ Ovearall Result: 8.5/9.0 (C2)\n"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
