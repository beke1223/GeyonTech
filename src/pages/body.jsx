import React from "react";
import Description from "../components/Description";
import CourseCategory from "../components/CourseCategory";
import Ourtrainer from "../components/Ourtrainer";
import Testimonals from "../components/testimonials";
function Body() {
  return (
    <>
      <Description />
      <CourseCategory />
      <Ourtrainer />
      <Testimonals/>
    </>
  );
}

export default Body;
