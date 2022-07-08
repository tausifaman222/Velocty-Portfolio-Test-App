import Summary from "./components/Summary";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Summary />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}



