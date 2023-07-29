import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-main">
      <div className="">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto">
        <AboutMe />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
