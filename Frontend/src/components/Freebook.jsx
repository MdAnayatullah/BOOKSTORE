import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const filterdata = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // Small devices (tablets, 768px and down)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium devices (desktops, 1024px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-full  container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl mt-40 ">Free Offered Books</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quam
            tempora delectus est non voluptate similique repellat quos ratione
            aspernatur, ex perferendis architecto ducimus labore explicabo
            nesciunt sunt odit ipsa.
          </p>
        </div>
      </div>

      <div className="px-20">
        <Slider {...settings}>
          {filterdata.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
