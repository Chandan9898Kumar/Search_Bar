import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import MainFunctionalPage from "./FunctionalSearch/MainSearchPage";
import HomePage from "./HomePage/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/functional" element={<MainFunctionalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
