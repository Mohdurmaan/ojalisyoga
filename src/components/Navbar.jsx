import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================= TOP UTILITY BAR ================= */}
    

      {/* ================= MAIN NAVBAR ================= */}
      <header className={`ojalis-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar-content">
          {/* Logo & Brand Mark */}
          <Link to="/" className="brand-identity-link" aria-label="Ojalis Yogic Kriya Home">
            <img src="/logo.jpg" alt="Ojalis Yogic Kriya Logo" className="brand-logo-img" />
            <div className="brand-text-block">
              <span className="brand-title-text">OJALIS</span>
              <span className="brand-subtitle-text">Yogic Kriya</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Primary Navigation">
            <Link to="/" className={`nav-link-item ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link-item ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
            <Link to="/programs" className={`nav-link-item ${isActive("/programs") ? "active" : ""}`}>
              Programs
            </Link>
            <Link to="/meditation" className={`nav-link-item ${isActive("/meditation") ? "active" : ""}`}>
              Meditation
            </Link>
            <Link to="/benefits" className={`nav-link-item ${isActive("/benefits") ? "active" : ""}`}>
              Benefits
            </Link>

            {/* More Menu Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="nav-dropdown-trigger">
                <span>Explore</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="nav-dropdown-menu" style={{ display: dropdownOpen ? "flex" : undefined }}>
                <Link to="/trainers" className={`nav-dropdown-item ${isActive("/trainers") ? "active" : ""}`}>
                  Our Trainers
                </Link>
                <Link to="/gallery" className={`nav-dropdown-item ${isActive("/gallery") ? "active" : ""}`}>
                  Gallery
                </Link>
                <Link to="/testimonials" className={`nav-dropdown-item ${isActive("/testimonials") ? "active" : ""}`}>
                  Testimonials
                </Link>
                <Link to="/books" className={`nav-dropdown-item ${isActive("/books") ? "active" : ""}`}>
                  Books & Resources
                </Link>
                <Link to="/blog" className={`nav-dropdown-item ${isActive("/blog") ? "active" : ""}`}>
                  Yoga Journal / Blog
                </Link>
              </div>
            </div>

            <Link to="/contact" className={`nav-link-item ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </nav>

          {/* Right Action: Book a Session CTA */}
          <div className="navbar-actions">
            <Link to="/book-session" className="btn-nav-book">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Book a Session</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button 
              className={`btn-mobile-hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE NAVIGATION DRAWER ================= */}
      <div 
        className={`mobile-drawer-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`mobile-nav-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="brand-identity-link">
            <img src="/logo.jpg" alt="Ojalis Logo" className="brand-logo-img" style={{ width: 42, height: 42 }} />
            <div className="brand-text-block">
              <span className="brand-title-text" style={{ fontSize: 18 }}>OJALIS</span>
              <span className="brand-subtitle-text" style={{ fontSize: 9 }}>Yogic Kriya</span>
            </div>
          </div>
          <button 
            className="mobile-nav-close" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Navigation"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-links-list">
          <Link to="/" className={`mobile-link-item ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link to="/about" className={`mobile-link-item ${isActive("/about") ? "active" : ""}`}>About Us</Link>
          <Link to="/programs" className={`mobile-link-item ${isActive("/programs") ? "active" : ""}`}>Yoga Programs</Link>
          <Link to="/meditation" className={`mobile-link-item ${isActive("/meditation") ? "active" : ""}`}>Meditation & Kriya</Link>
          <Link to="/benefits" className={`mobile-link-item ${isActive("/benefits") ? "active" : ""}`}>Benefits of Yoga</Link>
          <Link to="/trainers" className={`mobile-link-item ${isActive("/trainers") ? "active" : ""}`}>Our Trainers</Link>
          <Link to="/gallery" className={`mobile-link-item ${isActive("/gallery") ? "active" : ""}`}>Photo Gallery</Link>
          <Link to="/testimonials" className={`mobile-link-item ${isActive("/testimonials") ? "active" : ""}`}>Testimonials</Link>
          <Link to="/books" className={`mobile-link-item ${isActive("/books") ? "active" : ""}`}>Books & Literature</Link>
          <Link to="/blog" className={`mobile-link-item ${isActive("/blog") ? "active" : ""}`}>Yoga Blog</Link>
          <Link to="/contact" className={`mobile-link-item ${isActive("/contact") ? "active" : ""}`}>Contact Us</Link>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: "24px" }}>
          <Link to="/book-session" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
            Book a Session →
          </Link>
          <div style={{ marginTop: "16px", textAlign: "center", fontSize: "13px", color: "var(--ojalis-text-muted)" }}>
            <p>Direct Call: <a href="tel:+919876543210" style={{ fontWeight: 600, color: "var(--ojalis-burgundy)" }}>+91 98765 43210</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;