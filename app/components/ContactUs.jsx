"use client";
import React, { useState } from "react";
import Title from "./Title";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.status === 200) {
          toast.success("Your message has been sent successfully");
          setUser({
            name: "",
            email: "",
            phone: "",
            concern: "",
          });
        } else if(res.status === 406) {
          toast.error("Please fill all the fields");
        }
      });
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="h-full">
      <Title heading="Connect with us" />
      <div className="contact_form h-full">
        <div class=" h-full  ">
          <div class=" p-10  mx-auto rounded h-full">
            <form
              onSubmit={HandleSubmit}
              className="flex flex-col w-full space-y-10"
              action=""
            >
              <div className="title"></div>

              <div class="flex items-center mb-5 border-b-2 border-[#c08e02] w-[100%]">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  class=" border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>

              <div class="flex items-center mb-10 border-b-2 border-[#c08e02] ">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone Number"
                  class="border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:bborder-[#c08e02]"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </div>
              <div class="flex items-center mb-10 border-b-2 border-[#c08e02] ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  class="border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#c08e02]"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div class="flex items-center mb-10 border-b-2 border-[#c08e02] ">
                <input
                  type="text"
                  name="concern"
                  id="concern"
                  placeholder="Your Concern"
                  class="border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#c08e02]"
                  value={user.concern}
                  onChange={(e) =>
                    setUser({ ...user, concern: e.target.value })
                  }
                />
              </div>
              <div class="text-right">
                <button
                  type="submit"
                  class="py-3 px-8 bg-[#c08e02] text-[#f1f0eeaa] font-bold rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactUs;
