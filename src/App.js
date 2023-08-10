import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import 'boxicons';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import Service from './pages/Service';
import Skills from './pages/Skill';

function App() {
  return (
   <>
   <Header />
    <Home />
    <About />
    <Service />
    <Skills />
    <Project />
    <Contact />
   <Footer />
   </>
  );
}

export default App;
