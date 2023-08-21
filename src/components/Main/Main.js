import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Catalog from "./Catalog";
import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main__container container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/' element={<Catalog />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
