import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./pages.css";
import ScrollToTop from "./components/ScrollToTop";
// import UtilityBar from "./components/UtilityBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Governance from "./pages/Governance";
import Services from "./pages/Services";
import OurCommitment from "./pages/OurCommitment";
import HealthEnvironment from "./pages/HealthEnvironment";
import OurEmployees from "./pages/OurEmployees";
import Publications from "./pages/Publications";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      {/* <UtilityBar /> */}
      <Navbar />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/corporate-governance" element={<Governance />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-commitment" element={<OurCommitment />} />
          <Route path="/health-environment" element={<HealthEnvironment />} />
          <Route path="/our-team" element={<OurEmployees />} />
          <Route path="/media-blog" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
