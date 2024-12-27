import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Foot";
import Button from "./components/Button";
import Stack from "./components/Stack"
import Goal from "./components/Goal"
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Stack />
      <Projects />
      <Goal />
      <Contact />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
