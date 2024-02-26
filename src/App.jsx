import CertificationsSection from "./components/CertificationsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import Alert from "./components/common/Alert";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <main>
      <NavBar />
      <LandingSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactMeSection />
      <Footer />
      <Alert />
      <ScrollToTop />
    </main>
  );
};

export default App;
