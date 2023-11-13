import { Route, BrowserRouter, Routes } from "react-router-dom";
import CourseCategorySeeMore from "./pages/courseCategory-seeMore.jsx";
import Body from "./pages/body";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Body/>}/>
        <Route
          path={"/pages/courseCategory-seeMore"}
          element={<CourseCategorySeeMore />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
