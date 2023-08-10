import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="w-full bg-main overflow-x-hidden">
      <Header />
      <div className="flex flex-col ">
        <div className="">
          <Element id="About Me">
            <AboutMe />
          </Element>
          <Element id="Skills">
            <Skills />
          </Element>
          <Element id="Education">
            <Education />
          </Element>
          <Element id="Experience">
            <Experience />
          </Element>
          <Element id="Portfolio">
            <Portfolio />
          </Element>

          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
}
