import "./App.css";
import Banner from "./Components/Home/Banner";
import Contact from "./Components/Home/Contact";
import Header from "./Components/Home/Header";
import Projects from "./Components/Home/Projects";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
