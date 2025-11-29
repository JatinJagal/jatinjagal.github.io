import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactDetails from './components/ContactDetails';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-details" element={<ContactDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

