import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CircularGallery from "./CircularGallery/CircularGallery";
import { IconSparkle, IconLotus } from "./Icons";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    text: "Dawn Sadhana"
  },
  {
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    text: "Classical Asana"
  },
  {
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
    text: "Himalayan Stillness"
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    text: "Natarajasana Balance"
  },
  {
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80",
    text: "Pranayama & Breath"
  },
  {
    image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80",
    text: "Sacred Sanctuary"
  },
  {
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    text: "Mindful Alignment"
  },
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
    text: "Surya Prakash"
  }
];

function HomeGallerySection() {
  const galleryRef = useRef(null);

  const handlePrev = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy(-12);
    }
  };

  const handleNext = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy(12);
    }
  };

  return (
    <section className="home-circular-gallery-section" aria-label="Visual Gallery">
      {/* Decorative Dawn Light Atmosphere Background */}
      <div className="gallery-dawn-glow-top" aria-hidden="true"></div>
      <div className="gallery-mist-overlay" aria-hidden="true"></div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: 760 }}>
          <div className="gallery-pill-badge">
            <IconSparkle size={13} color="var(--ojalis-gold-dark, #9B7328)" />
            <span>SACRED SADHANA &bull; HIMALAYAN DAWN</span>
            <IconSparkle size={13} color="var(--ojalis-gold-dark, #9B7328)" />
          </div>

          <h2 className="section-title-main" style={{ color: "var(--gallery-heading, #1F2A2E)" }}>
            Moments of Stillness, <span>Sacred Practice</span>
          </h2>

          <p className="section-desc-main mx-auto" style={{ color: "var(--gallery-desc, #4A5B53)" }}>
            Immerse yourself in the tranquil rhythm of dawn meditation, classical postures, and conscious breathwork inspired by the timeless silence of the mountains.
          </p>
        </div>

        {/* Circular Gallery Interaction Container */}
        <div className="circular-gallery-stage-wrapper">
          {/* Subtle Navigation Arrow Buttons */}
          <button 
            type="button" 
            className="gallery-nav-btn gallery-nav-prev" 
            onClick={handlePrev}
            aria-label="Previous gallery image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button 
            type="button" 
            className="gallery-nav-btn gallery-nav-next" 
            onClick={handleNext}
            aria-label="Next gallery image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* WebGL 3D Circular Gallery */}
          <div className="circular-gallery-canvas-holder">
            <CircularGallery
              ref={galleryRef}
              items={galleryItems}
              bend={2.5}
              textColor="#1C2D24"
              borderRadius={0.045}
              font='600 22px "Plus Jakarta Sans", sans-serif'
              scrollSpeed={1.8}
              scrollEase={0.075}
            />
          </div>

          {/* Interactive Hint */}
          <div className="gallery-interaction-hint">
            <span className="gallery-hint-dot"></span>
            <span>Drag horizontally or use arrow buttons to explore</span>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="gallery-bottom-cta-row">
          <p className="gallery-bottom-quote">
            <IconLotus size={16} color="var(--ojalis-gold, #C59B4B)" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }} />
            Every moment of practice is an effortless return to inner peace.
          </p>
          <Link to="/gallery" className="btn btn-gallery-dawn">
            Explore Full Gallery Archive
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeGallerySection;
