import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShivComponent from "./components/ShivComponent";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Meditation from "./pages/Meditation";
import Teachings from "./pages/Teachings";
import Benefits from "./pages/Benefits";
import Trainers from "./pages/Trainers";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Books from "./pages/Books";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import BookSession from "./pages/BookSession";

import "./index.css";
import "./ojalis.css";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Sirf Home page par hi ShivComponent dikhega (FINAL/LOCKED APPROVED ELEMENT) */}
      {isHome && <ShivComponent />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-session" element={<BookSession />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;