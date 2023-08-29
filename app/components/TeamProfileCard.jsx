"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

const TeamProfileCard = () => {
  return (
    <div className="rounded-lg">
      <div className="w-full max-w-sm bg-[#000]  gradient_effect border-2 my-10   border-[#c08e02] shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center px-10 py-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/onkar.jpg"
            alt="profile image"
            height={100}
            width={100}
          />
          <h5 className="mb-1 text-xl font-medium text-white">Onkar Vatsa</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Developer
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              className="hover:text-[#c08e02]"
              href="https://www.facebook.com/onkar.vatsa.1"
            >
              <SlSocialFacebook />
            </Link>
            <Link
              className="hover:text-[#c08e02]"
              href="https://twitter.com/OnkarVatsa"
            >
              <SlSocialTwitter />
            </Link>
            <Link
              className="hover:text-[#c08e02]"
              href="https://www.linkedin.com/in/onkar-vatsa-1b1b3b1b1/"
            >
              <SlSocialLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfileCard;
