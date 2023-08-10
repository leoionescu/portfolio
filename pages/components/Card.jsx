import React from "react";
import { useInView } from "react-intersection-observer";
import ReactLinkify from "react-linkify";

const Card = ({ time, title, text, technologies, classProps }) => {
  const { ref, inView } = useInView({});
  const lines = text.split("\\n");
  return (
    <div
      ref={ref}
      className={`border-2 border-accent rounded-lg mt-4 sm:py-4 px-8 ${
        inView && " " + classProps
      }`}
    >
      <div className="flex justify-between">
        <h2 className="text-accent font-mono">{time}</h2>
        <h2 className="text-accent font-mono">{technologies}</h2>
      </div>
      <h1 className="text-white text-2xl font-semibold font-mono">{title}</h1>
      {lines.map((line, index) => (
        <ReactLinkify key={index}>
          <p className="text-white font-mono">{line}</p>
        </ReactLinkify>
      ))}
    </div>
  );
};

export default Card;
