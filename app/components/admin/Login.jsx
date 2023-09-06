"use client";
import { useState, useEffect } from "react";
import { Bounce } from "react-reveal";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    // Use async to handle asynchronous operations
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Check if the response status is 200 (OK)
        const res = await response.json(); // Parse the response JSON
        localStorage.setItem("token", res.token); // Assuming the token is returned as data.token
        toast.success("Logged in Successfully");
        dispatch(setCredentials({ ...res }));
        router.push("/admin/dashboard");
      } else {
        if (response.status === 401) {
          toast.error("Authentication failed. Please check your credentials.");
        } else {
          toast.error(
            "An error occurred while logging in. Please try again later."
          );
        }
      }
    } catch (err) {
      // Handle any network or other errors that may occur during the fetch
      toast.error(
        "An error occurred while logging in. Please try again later."
      );
      console.error(err); // Log the error to the console for debugging
    }
  };

  return (
    <div>
      <div className="w-full   mx-auto my-[132px] bg-black bg-opacity-40 rounded-lg shadow-lg dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 h-[500px] space-y-14 md:space-y-8 sm:p-8">
          <Bounce top>
            <div className="logo mx-auto ">
              <Image
                src="/logo.png"
                alt="logo"
                className="sm:w-[230px] mx-auto"
                width={200}
                height={100}
              />
            </div>
          </Bounce>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-center md:text-2xl text-white">
            Sign in
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between"></div>
            <button
              type="submit"
              onClick={submitHandler}
              className="w-full text-white bg-[#c08d02d3] hover:bg-[#c08e02] focus:ring-4 focus:outline-none focus:ring-[#c08d026d] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
