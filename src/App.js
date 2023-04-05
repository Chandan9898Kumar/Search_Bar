import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import MainFunctionalPage from "./FunctionalSearch/MainSearchPage";
import HomePage from "./HomePage/Home";
import MainClassSearchPage from "./Classcomponentsearch/MainClassPage";
import MainEmiPage from './EmiCalculator/MainEmi'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/functional" element={<MainFunctionalPage />} />
          <Route exact path="/Class" element={<MainClassSearchPage />} />
          <Route exact path="/EmiCalculator" element={<MainEmiPage  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
