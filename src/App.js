import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
// eslint-disable-next-line
const MainFunctionalPage = lazy(() => import("./FunctionalSearch/MainSearchPage"));
const HomePage = lazy(() => import("./HomePage/Home"));
const MainClassSearchPage = lazy(() => import("./Classcomponentsearch/MainClassPage"));
const MainEmiPage = lazy(() => import("./EmiCalculator/MainEmi"));
const CountdownTimer = lazy(() => import("./CountDownTimer/CountTimer"));
const StopWatchApp = lazy(() => import("./StopWatch/WatchStop"));
const MainComponent = lazy(() => import("./InfiniteScroller/Scroller"));
const DictionaryApp = lazy(() => import("./Dictionary/DictionaryHome"));

const ScrollerTypeOne = lazy(() =>
  import("./NewInfiniteScroller/ScrollerTypeOne")
);

const ScrollerTypeTwo = lazy(() =>
  import("./NewInfiniteScroller/ScrollerTypeTwo")
);
function App() {
  /* eslint-enable eqeqeq */
  return (
    <>
      <Suspense fallback={"Please Wait..."}>
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
            <Route exact path="/DictionaryApp" element={<DictionaryApp />} />

            <Route
              exact
              path="/Scroller/ScrollerTypeOne"
              element={<ScrollerTypeOne />}
            />

            <Route
              exact
              path="/Scroller/ScrollerTypeOne/ScrollerTypeTwo"
              element={<ScrollerTypeTwo />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default App;
