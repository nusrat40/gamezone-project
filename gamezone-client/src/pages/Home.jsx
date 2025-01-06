import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import HighestRated from "../components/HighestRated";
import { useLoaderData } from "react-router-dom";
import RecentlyAdded from "../components/RecentlyAdded";
import ExcitingGames from "../components/ExcitingGames";
import ActionGames from "../components/ActionGames";
import Testimonials from "../components/Testimonials";


const Home = () => {
  const reviews = useLoaderData();

  return (
    <div className="space-y-8">


      <Banner></Banner>
      <HighestRated reviews={reviews}></HighestRated>
      <ExcitingGames reviews={reviews}></ExcitingGames>
      <RecentlyAdded reviews={reviews}></RecentlyAdded>
      <ActionGames reviews={reviews}></ActionGames>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
