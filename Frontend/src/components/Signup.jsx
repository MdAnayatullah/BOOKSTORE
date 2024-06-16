import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div
        id="my_modal_4"
        className="flex h-screen items-center justify-center"
      >
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            {/* Name */}
            <div className="mt-3">
              <span>User Name</span>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter user name"
                className=" mt-1 input input-bordered w-full max-w-xs outline-none dark:text-black"
                {...register("username", { required: true })}
              />
              {errors.username && <span>This field is required</span>}
            </div>
            {/* Email */}
            <div className="mt-3">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email here"
                className=" mt-1 input input-bordered w-full max-w-xs outline-none dark:text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <br />
              {/*New Password */}
              <span>New Password</span>
              <br />
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                className=" mt-1 input input-bordered w-full max-w-xs outline-none dark:text-black"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div>
              <br />
              {/* Confirm Password */}
              <span>Confirm Password</span>
              <br />
              <input
                type="text"
                name="password"
                placeholder="Re Enter password"
                className=" mt-1 input input-bordered w-full max-w-xs outline-none dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span>This field is required</span>}
            </div>

            {/* Button*/}
            <div className=" flex justify-between">
              <button className=" bg-pink-500 text-white px-3 py-1 rounded-md mt-3 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="mt-4">
                Already registered?{" "}
                <button
                  className=" underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                {""}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
