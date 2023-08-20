import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Catalog from "./Catalog";

function Main() {
  return (
    <section className="main container">
      <Routes>
        <Route path="/home/" element={<Home />} />
        <Route path="/catalog/" element={<Catalog />} />
      </Routes>
    </section>
  );
}

export default Main;
