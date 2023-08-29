"use client";
import React from "react";
import Link from "next/link";

const Link_second = ({ href, name }) => {
  return (
    <Link href={href} className="link">
      <span>{name}</span>
    </Link>
  );
};

export default Link_second;
