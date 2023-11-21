import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleRight } from "react-icons/fa";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { GiOpenBook } from "react-icons/gi";
// import {IoLocationOutline} from 'react-icons/io';
import dataAnalytics from "../assets/data-analytics-immersive.svg";
import dataScience from "../assets/data-science-immersive.svg";
import frontEnd from "../assets/front-end-web-development.svg";
import prodManagement from "../assets/product-management.svg";
import swe from "../assets/software-engineering-immersive.svg";
import ux from "../assets/user-experience-design-immersive.svg";

const courseCatList = [
  {
    title: "Data Analytics Bootcamp",
    image: dataAnalytics,
    subTitle: "ONLINE | BOOTCAMP",
    descripton:
      "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in" +
      "demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more",
  },
  {
    title: "Data Analytics Bootcamp",
    image: dataScience,
    subTitle: "ONLINE | BOOTCAMP",
    descripton:
      "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in" +
      "demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more",
  },
  {
    title: "Data Analytics Bootcamp",
    image: frontEnd,
    subTitle: "ONLINE | BOOTCAMP",
    descripton:
      "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in" +
      "demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more",
  },
  {
    title: "Data Analytics Bootcamp",
    image: prodManagement,
    subTitle: "ONLINE | BOOTCAMP",
    descripton:
      "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in" +
      "demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more",
  },
  {
    title: "Data Analytics Bootcamp",
    image: swe,
    subTitle: "ONLINE | BOOTCAMP",
    descripton:
      "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in" +
      "demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more",
  },
  {
    title: "Data Analytics Bootcamp",
    image: ux,
    subTitle: "ONLINE | BOOTCAMP",
    descripton:
      "Discover how to mine data for insights to help inform strategic business decisions. Pursue an in" +
      "demand career as a data analyst by learning SQL, Tableau, PowerBI, Python, and more",
  },
];
const topicOptions = [
  "All Topics",
  "Business",
  "Career Development",
  "Coding",
  "Data",
  "Design",
  "Marketing",
];
const locationOption = [
  "Online",
  "Business",
  "Career Development",
  "Coding",
  "Data",
  "Design",
  "Marketing",
];

const CourseCategorySeeMore = () => {
  const [moveArrow, setMoveArrow] = useState(false);
  const [arrowId, setArrowId] = useState();
  const [weekDaySchedule, setWeekDaySchedule] = useState(false);
  const [eveningSchedule, setEveningSchedule] = useState(false);
  const [bootCampCourse, setBootCampCourse] = useState(false);
  const [oneWeekCourse, set1WeekCourse] = useState(false);
  const [topic, setTopic] = useState();
  const [location, setLocation] = useState();

  const ResetFilter = () => {
    setTopic("");
    setLocation("");
    setWeekDaySchedule(false);
    setEveningSchedule(false);
    set1WeekCourse(false);
    setBootCampCourse(false);
  };

  return (
    <div>
      <div className=" mx-5 flex flex-col justify-center items-center gap-5 col-span-2">
        <h1 className="text-3xl font-semibold w-full flex justify-center py-5">
          Online & On Campus Courses Catalog
        </h1>

        <h3 className="flex justify-center -mb-5 md:-ml-64 text-lg">
          {courseCatList.length} programs found Online
        </h3>

        <div className="w-[60rem] lg:ml-[30rem] flex justify-end items-end  border-black border-2"></div>
      </div>

      <div className="md:flex  justify-center">
        <div className="col-span-1  flex flex-col gap-10 xl:absolute mx-5 xl:left-80">
          <div>
            <label htmlFor="topic" className="flex flex-col">
              Topics
              <select
                name="topics"
                id="topics"
                className="border px-3 py-3 w-56 outline-none"
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              >
                {topicOptions.map((opt, i) => {
                  return (
                    <option value={opt} selected={topic}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="topic" className="flex flex-col">
              Location{" "}
              <select
                name="topics"
                id="topics"
                className="border px-3 py-3 w-56 outline-none"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                {locationOption.map((opt, i) => {
                  return (
                    <option value={opt} selected={location}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Schedule</h3>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="weekday"
                checked={weekDaySchedule}
                onChange={() => {
                  setWeekDaySchedule(!weekDaySchedule);
                }}
                id="weekdaySchedule"
                className="w-5"
              />
              <label htmlFor="weekdaySchedule">Weekdays before 6pm </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="eveningSchedule"
                name="weekday"
                checked={eveningSchedule}
                onChange={() => {
                  setEveningSchedule(!eveningSchedule);
                }}
                className="w-5"
              />
              <label htmlFor="eveningSchedule">Evenings or Weekends </label>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Format</h3>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="weekday"
                id="bootCampCourse"
                className="w-5"
                checked={bootCampCourse}
                onChange={() => {
                  setBootCampCourse(!bootCampCourse);
                }}
              />
              <label htmlFor="bootCampCourse">Bootcamp Courses </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="weekend"
                id="oneWeekCourse"
                className="w-5"
                checked={oneWeekCourse}
                onChange={() => {
                  set1WeekCourse(!oneWeekCourse);
                }}
              />
              <label htmlFor="oneWeekCourse">Evening and 1-Week Courses</label>
            </div>
          </div>
          <div>
            <button
              className="border py-3 px-16 hover:bg-slate-100 transition-all duration-500 font-semibold"
              onClick={ResetFilter}
            >
              Reset Filters
            </button>
          </div>
          <div>
            <h3> Looking for Workshops and Events ? </h3>
            <h3 className="font-semibold"> Browse here </h3>
          </div>
        </div>
        <div className="space-y-4 flex flex-col xl:ml-[30rem] lg:w-1/2 mx-5 ">
          {courseCatList.map((course, i) => {
            return (
              <a
                href="#"
                onClick={() => alert("Opening Course")}
                className={`${i == 0 ? "mt-3" : ""}`}
              >
                <div
                  className="lg:grid lg:grid-cols-3 items-center shadow-lg text-center border p-5"
                  onMouseEnter={() => {
                    setMoveArrow(true);
                    setArrowId(i);
                  }}
                  onMouseLeave={() => setMoveArrow(false)}
                >
                  <img
                    src={course.image}
                    alt="Course image"
                    className="text-black h-32"
                    width={500}
                  />

                  <div className="col-span-2 flex">
                    <div className="flex items-start flex-col gap-4">
                      <h3>Data</h3>
                      <h1
                        className={`sm:text-xl font-semibold transition-all duration-300 sm:p-2 ${
                          moveArrow && i == arrowId
                            ? "bg-yellow-300  translate-x-2"
                            : ""
                        } `}
                      >
                        {course["title"]}
                      </h1>
                      <div className="flex gap-7">
                        <p className="flex gap-1">
                          <GiOpenBook color="" className="mt-1" />
                          Instructor-led Course
                        </p>
                        {/* <p><IoLocationOutline/>On Campus or Online</p> */}
                        <p>420 hours : 12 weeks, Full-time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CourseCategorySeeMore;
