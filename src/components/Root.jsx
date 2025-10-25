import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Faq from "./Faq";
import Cta from "./Cta";
import Courses from "./Courses";

const Root = () => {
  return (
    <div className="">
      <Hero />
      <Courses />
      <Features />
      <Faq />
      <Cta />
    </div>
  );
};

export default Root;
