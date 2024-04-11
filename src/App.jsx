import "./App.css";
import Navbar from "./components/Navbar";
import BodySection from "./components/BodySection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <BodySection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
