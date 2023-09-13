import './App.css';
import Cursor from './components/Cursor/Cursor';
import Illustration from './pages/Illustration/Illustration';
import MainPage from './pages/MainPage/MainPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
function App() {
  return (
    <div className="App">
      <Cursor/>
      <MainPage/>
      <Illustration/>
      <WhatWeDo/>
    </div>
  );
}

export default App;
