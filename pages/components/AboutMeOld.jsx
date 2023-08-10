import React from "react";
import Image from "next/image";
import punk from "../../public/images/punk.jpg";

const AboutMeOld = () => {
  return (
    <div className="mx-10">
      <div className="flex justify-center grid mt-2 font-sans">
        <p className="text-7xl mt-10 font-bold">Hi, I'm Leo</p>
        <p className="text-4xl my-3 text-gray-400 font-bold">CS Student</p>
        <div className="my-2 h-96 w-96 relative">
          <Image src={punk} layout="fill" className="rounded-full" />
        </div>
      </div>

      <div className="flex justify-center mt-2 font-sans">
        <p className="text-2xl text-center mx-10 mt-2 w-1/2 min-w-96 py-10 border-t-4 border-b-4 border-blue-300">
          This is a paragraph about me.I am a college student in my 3rd year
          studying a Bachelor's Degree in Informatics in Economy
        </p>
      </div>
    </div>
  );
};

export default AboutMeOld;
