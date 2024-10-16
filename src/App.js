import react from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import ChocolateBar from './ChocolateBar';
import Chips from './Chips';
import Soda from './Soda';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path = "/" element= {<VendingMachine />}></Route>
      <Route path = "/chips" element= {<Chips />}></Route>
      <Route path = "/chocolatebar" element= {<ChocolateBar />}></Route>
      <Route path = "/soda" element= {<Soda />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
