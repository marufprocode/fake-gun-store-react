import { useState } from 'react';
import './App.css';
import AllGun from './components/allGun/AllGun';
import Navbar from './components/navbar/navbar';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar count={count}/>
      <AllGun count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
