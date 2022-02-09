import "./App.scss";
import Navbar from "../src/components/navbar/Navbar";
import Intro from "../src/components/intro/Intro";
import Portfolio from "../src/components/portfolio/Portfolio";
import Works from "../src/components/works/Works";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contacts from "../src/components/contacts/Contacts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
