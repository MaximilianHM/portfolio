import { useState } from "react";
import "./App.scss";
import Navbar from "../src/components/navbar/Navbar";
import Menu from "../src/components/menu/Menu";
import Intro from "../src/components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contacts from "../src/components/contacts/Contacts";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
