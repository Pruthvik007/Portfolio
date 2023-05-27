import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/common/Alert";
import CertificationsSection from "./components/CertificationsSection";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
          <ScrollToTop />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
