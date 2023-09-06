"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import "./styles/globals.scss";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Providers from "./Providers";
import { useRouter, usePathname } from "next/navigation";

import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // Define an array of paths where you want to hide the navigation bar.
  const pathsWithoutNavBar = "/admin/login"; // Add other paths as needed.

  // Check if the current path is in the array of paths without the nav bar.

  useEffect(() => {
    // Add the 'login-page' class to the body on the login page
    if (pathname === pathsWithoutNavBar) {
      document.body.classList.add("login-page");
    } else {
      document.body.classList.remove("login-page");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Providers>
          {/* Conditionally render the Header based on the hideNavBar variable */}
          {pathname !== pathsWithoutNavBar && <Header />}
          {children}
          {pathname !== pathsWithoutNavBar && <Footer />}
        </Providers>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
