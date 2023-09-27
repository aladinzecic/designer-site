import { useState,useEffect, useContext } from 'react';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import Illustration from './pages/Illustration/Illustration';
import Loading from './pages/Loading/Loading';
import MainPage from './pages/MainPage/MainPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import { AppContext } from './Context/AppContext';
import Navbar from './components/Cursor/Navbar/Navbar';
function App() {
  const { isLoading,setIsLoading } =
    useContext(AppContext);
useEffect(()=>{
setTimeout(()=>{
  setIsLoading(false)
},3000)
},[])
  return (
    <div className={isLoading?"Loading":"App"} >
      <Loading/>
      {!isLoading&& <Cursor/>}
      <Navbar/>
      <MainPage/>
      <Illustration/>
      <WhatWeDo/>
    </div>
  );
}

export default App;
