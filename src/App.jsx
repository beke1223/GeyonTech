import { Route, BrowserRouter, Routes } from "react-router-dom";
import CourseCategorySeeMore from "./pages/courseCategory-seeMore.jsx";
import Body from "./pages/body";
import AboutUs from "./components/AboutUs.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Body/>}/>
        <Route
          path={"/pages/courseCategory-seeMore"}
          element={<CourseCategorySeeMore />}
        />
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
