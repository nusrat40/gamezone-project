import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import HighestRated from "../components/HighestRated";
import { useLoaderData } from "react-router-dom";
import RecentlyAdded from "../components/RecentlyAdded";
import ExcitingGames from "../components/ExcitingGames";
import { getTheme, setTheme } from "../utils/theme";

const Home = () => {
  const reviews = useLoaderData();

  // const [theme, setThemeState] = useState(getTheme());

  // const handleThemeToggle = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setThemeState(newTheme);
  //   setTheme(newTheme);
  // };

  // useEffect(() => {
  //   setTheme(theme);
  // }, [theme]);

  return (
    <div className="space-y-8">

      {/* <div className="flex justify-between items-center">
       <div></div>
        
        <button
          onClick={handleThemeToggle}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div> */}

      <Banner></Banner>
      <HighestRated reviews={reviews}></HighestRated>
      <ExcitingGames reviews={reviews}></ExcitingGames>
      <RecentlyAdded reviews={reviews}></RecentlyAdded>
    </div>
  );
};

export default Home;
