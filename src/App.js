import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import About from './components/About';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <About />
      <SkillSection /> 
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
