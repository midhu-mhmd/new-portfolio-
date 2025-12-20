"use client";

import Home from "@/components/Home/home";
import Loading from "@/components/loadingpage/loader";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading (like assets / animation prep)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Home />}
    </>
  );
};

export default Homepage;
