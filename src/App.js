import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import MainFunctionalPage from "./FunctionalSearch/MainSearchPage";
import HomePage from "./HomePage/Home";
import MainClassSearchPage from "./Classcomponentsearch/MainClassPage";
import MainEmiPage from "./EmiCalculator/MainEmi";
import CountdownTimer from "./CountDownTimer/CountTimer";
import StopWatchApp from "./StopWatch/WatchStop";
import MainComponent from "./InfiniteScroller/Scroller";

function App() {
  

  return (
    <>
      <Suspense fallback={'Please Wait...'}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/functional" element={<MainFunctionalPage />} />
            <Route exact path="/Class" element={<MainClassSearchPage />} />
            <Route exact path="/EmiCalculator" element={<MainEmiPage />} />
            <Route exact path="/CountdownTimer" element={<CountdownTimer />} />
            <Route exact path="/stopWatch" element={<StopWatchApp />} />
            <Route exact path="/Scroller" element={<MainComponent />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
