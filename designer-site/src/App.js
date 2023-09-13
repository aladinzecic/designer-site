import './App.css';
import Cursor from './components/Cursor/Cursor';
import Illustration from './pages/Illustration/Illustration';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
function App() {
  return (
    <div className="App">
      <Cursor/>
      <WhatWeDo/>
      <Illustration/>
    </div>
  );
}

export default App;
