import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleRight } from "react-icons/fa";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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

const CourseCategory = () => {
  const [moveArrow, setMoveArrow] = useState(false);
  const [arrowId, setArrowId] = useState();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-semibold w-full flex justify-center py-5">
        Start Learning
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 space-x-4  md:mx-56">
        {courseCatList.map((course, i) => {
          return (
            <a
              href="#"
              onClick={() => alert("Opening Course")}
              className={`${i == 0 ? "mt-3" : ""}`}
            >
              <div
                className="flex items-center shadow-lg text-center border p-5 hover:text-red-600"
                onMouseEnter={() => {
                  setMoveArrow(true);
                  setArrowId(i);
                }}
                onMouseLeave={() => setMoveArrow(false)}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-semibold ">{course["title"]}</h1>
                  <img
                    src={course.image}
                    alt="Course image"
                    className="text-black h-32"
                    width={500}
                  />
                  <h3 className="text-slate-500">{course.subTitle}</h3>
                  <p className="text-black">{course.descripton}</p>
                </div>
                <div
                  className={` transition-all duration-300 ${
                    moveArrow && i == arrowId ? "scale-150 translate-x-2" : ""
                  } `}
                >
                  <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <Link to={"../pages/courseCategory-seeMore"}>
        <button className="bg-red-500 text-white py-4 px-8">
          Browse Course
        </button>
      </Link>
    </div>
  );
};
export default CourseCategory;
