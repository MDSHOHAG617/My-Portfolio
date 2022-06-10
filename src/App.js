import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProjectsDetails from "./Components/ProjectsDetails";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Blogs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/projectsDetails"
          element={<ProjectsDetails></ProjectsDetails>}
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
