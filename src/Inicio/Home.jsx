import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Sessions/section1/Section1";
import Section2 from "./Components/Sessions/section2/Section2";
import Section3 from "./Components/Sessions/section3/Section3";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
