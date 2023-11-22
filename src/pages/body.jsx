// eslint-disable-next-line no-unused-vars
import React from "react";
import Description from "../components/Description";
import CourseCategory from "../components/CourseCategory";
import Ourtrainer from "../components/Ourtrainer";
import TabBar  from "./tabBar";
function Body() {
  return (
    <div className="w-full h-screen">
      <TabBar/>
      <Description />
      <CourseCategory />
      <Ourtrainer />
    </div>
  );
}

export default Body;
