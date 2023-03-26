import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
