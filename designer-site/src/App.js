import { useState,useEffect } from 'react';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import Illustration from './pages/Illustration/Illustration';
import Loading from './pages/Loading/Loading';
import MainPage from './pages/MainPage/MainPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
function App() {
  const [isLoading,setIsLoading]=useState(true);
useEffect(()=>{
setTimeout(()=>{
  setIsLoading(false)
},3000)
},[])
  return (
    <div className={isLoading?"Loading":"App"} >
      <Loading/>
      {!isLoading&& <Cursor/>}
      <MainPage/>
      <Illustration/>
      <WhatWeDo/>
    </div>
  );
}

export default App;
