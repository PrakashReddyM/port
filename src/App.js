import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";

function App() {
  return (
    
    <div>
      <Navbar />
      <Title />
      <SkillSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
