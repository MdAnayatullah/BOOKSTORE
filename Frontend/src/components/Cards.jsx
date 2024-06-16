import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 justify-center">
        <div className="card w-full max-w-sm md:max-w-md bg-base-100 shadow-xl transition ease-in-out duration-200 hover:scale-105  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline hover:bg-green-600  hover:text-white hover:animate-bounce  duration-200">
                {item.currency}
                {item.price}
              </div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
