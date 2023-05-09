import React, {Suspense} from "react";
import { Outlet } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCategoryNavbar from "../../components/HomeCategoryNavbar/HomeCategoryNavbar";
import Filter from "../../components/Filter/Filter";

function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeCategoryNavbar />
      <Filter />
      <Outlet />
    </>
  );
}

export default Home;
