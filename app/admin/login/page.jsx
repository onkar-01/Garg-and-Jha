"use client";
import { useState, useEffect } from "react";
import LoginScreen from "../../screens/admin/Login";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const page = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push("/admin/dashboard");
    }
  }, [router, userInfo]);

  return <LoginScreen />;
};

export default page;
