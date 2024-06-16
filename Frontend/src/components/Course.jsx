import React from "react";
import Card from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="mx-w-screen-2xl container mx-auto md:px-20 py-4">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className=" text-green-500">here !</span>
          </h1>

          <p className=" mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum
            sed laudantium corrupti suscipit magnam. Esse vel praesentium at
            nesciunt nulla quae qui, optio porro, accusamus dolores maxime,
            deleniti vero. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis sed et natus, at blanditiis tenetur officia fugit
            possimus. Esse, vitae fuga! Necessitatibus, libero beatae! Accusamus
            cumque impedit unde autem blanditiis.
          </p>
          <Link to="/">
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Course;
