import React, { useEffect, useState } from "react";
import Cards from "./cards";
import { Link, useNavigate } from "react-router-dom";

function Course() {
  const [course, setCourse] = useState([]);

  const navigate = useNavigate();

  function viewBook() {
    navigate("/courses");
  }

  function getCourses() {
    
    fetch("https://backend-gamma-wheat.vercel.app/books", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((books) => {
        return books.json();
      })
      .then((data) => {
        setCourse(data);
      });
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div className="container dark:bg-slate-950 dark:text-white max-w-screen-2xl pt-20 md:px-14 py-2 mt-20 px-4 ">
        <div className="space-y-7 text-center">
          <h3 className="font-semibold text-2xl">
            We're delighted to have you{" "}
            <span className="text-pink-600">Here!</span>
          </h3>
          <p className="text-xl w-[75%] m-auto">
            Real-world experts like you make a global impact by teaching on
            Udemy. We believe everyone has something to offer. Share your unique
            skills and experiences with students around the world by teaching a
            free or paid course.
          </p>
          <div>
            <Link to={"/"}>
              <button
                className="border border-pink-500 bg-pink-700 hover:bg-pink-500
               rounded-lg px-5 py-1.5 text-white"
              >
                Back
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 w-[300px] md:w-[100%] mx-auto p-6 md:grid-cols-3 mt-10">
          {course.map((item, idx) => {
            return (
              <>
                <Cards item={item} viewBook={viewBook} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
