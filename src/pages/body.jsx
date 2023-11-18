// eslint-disable-next-line no-unused-vars
import React from "react";
import Description from "../components/Description";
import CourseCategory from "../components/CourseCategory";
import Ourtrainer from "../components/Ourtrainer";
import TabBar  from "./tabBar";
function Body() {
  return (
    <>
      <TabBar/>
      <Description />
      <CourseCategory />
      <Ourtrainer />
    </>
  );
}

export default Body;
