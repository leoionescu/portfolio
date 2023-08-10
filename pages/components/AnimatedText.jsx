import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text, classProps, backgroundProp, animation }) => {
  const { ref, inView } = useInView({});
  if (animation === "show-right") {
    return (
      <div>
        <div className="grid justify-items-stretch grid-cols-1 relative">
          <h1 className={`w-fit ${classProps}`}>{text}</h1>
          <div
            className={`absolute top-0 left-0 w-full h-full show-right bg-main ${backgroundProp}`}
          ></div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h1
          ref={ref}
          className={`${classProps} ${backgroundProp}  ${
            inView ? "opacity-0 " + animation : null
          }`}
        >
          {text}
        </h1>
      </div>
    );
};

export default AnimatedText;
