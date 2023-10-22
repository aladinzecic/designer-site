import { useState, useEffect, useContext } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Illustration from "./pages/Illustration/Illustration";
import Loading from "./pages/Loading/Loading";
import MainPage from "./pages/MainPage/MainPage";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import { AppContext } from "./Context/AppContext";
import Navbar from "./components/Navbar/Navbar";
import VideoPage from "./pages/VideoPage/VideoPage";
import Offers from "./pages/Offers/Offers";
function App() {
  const { isLoading, setIsLoading,isMenuOn} = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={isLoading ? "Loading":isMenuOn? "Loading": "App"}>
      <Loading />
      {!isLoading && <Cursor />}
      <Navbar />
      <MainPage />
      <Illustration />
      <WhatWeDo/>
      <VideoPage/>
      <Offers></Offers>
    </div>
  );
}

export default App;
