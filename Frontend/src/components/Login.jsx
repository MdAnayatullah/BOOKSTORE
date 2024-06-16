import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
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
              {/* Password */}
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className=" mt-1 input input-bordered w-full max-w-xs outline-none dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button*/}
            <div className=" flex justify-between">
              <button className=" bg-pink-500 text-white px-3 py-1 rounded-md mt-3 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="mt-4">
                Not registered?{" "}
                <Link
                  to={"/Signup"}
                  className=" underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
