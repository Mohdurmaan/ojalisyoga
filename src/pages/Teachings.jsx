import { Link } from "react-router-dom";
import { IconLotus, IconBreathing, IconMindBody } from "../components/Icons";

function Teachings() {
  const limbsData = [
    {
      num: "01",
      name: "Yama (Social Harmony)",
      sanskrit: "अहिंसा, सत्य, अस्तेय...",
      desc: "Ethical guidelines including non-harming (Ahimsa), truthfulness (Satya), non-stealing (Asteya), mindful moderation, and freedom from excessive greed."
    },
    {
      num: "02",
      name: "Niyama (Inner Discipline)",
      sanskrit: "शौच, सन्तोष, तपस्...",
      desc: "Personal observance of mental and bodily cleanliness (Saucha), contentment with what is (Santosha), self-reflection (Svadhyaya), and surrender to higher wisdom."
    },
    {
      num: "03",
      name: "Asana (Steady Posture)",
      sanskrit: "स्थिरसुखमासनम्",
      desc: "Cultivating a physical posture that is firm yet completely relaxed, allowing the practitioner to sit motionless without fatigue or distraction."
    },
    {
      num: "04",
      name: "Pranayama (Breath Control)",
      sanskrit: "प्राणायाम",
      desc: "Conscious regulation and refinement of the subtle life-force energy (Prana) through diaphragmatic inhalation, exhalation, and peaceful retention."
    },
    {
      num: "05",
      name: "Pratyahara (Sensory Rest)",
      sanskrit: "प्रत्याहार",
      desc: "Gently withdrawing attention from noisy external stimuli to create an oasis of inner silence, shielding the mind from sensory exhaustion."
    },
    {
      num: "06",
      name: "Dharana (Focused Attention)",
      sanskrit: "धारणा",
      desc: "Binding consciousness to a single chosen focus point—such as the rhythm of the breath, a sacred flame, or the heart space—without wavering."
    },
    {
      num: "07",
      name: "Dhyana (Spontaneous Meditation)",
      sanskrit: "ध्यान",
      desc: "When focused attention becomes an unbroken, effortless stream of awareness, like oil flowing smoothly from one vessel into another."
    },
    {
      num: "08",
      name: "Samadhi (Oneness & Peace)",
      sanskrit: "समाधि",
      desc: "The profound realization of unity where the distinction between observer, the act of observing, and the observed dissolves into pure peace."
    }
  ];

  return (
    <main className="bg-ivory">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="page-hero-tag">Timeless Wisdom</span>
          <h1 className="page-hero-title">Yogic Teachings & Philosophy</h1>
          <p className="page-hero-subtitle">
            Exploring the ancient philosophical foundations of classical yoga to illuminate modern life with clarity, patience, and purpose.
          </p>
        </div>
      </section>

      {/* Intro Wisdom with Authentic Indian Yoga Photography */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="intro-two-col" style={{ alignItems: "center" }}>
            <div>
              <div className="section-tag-wrapper">
                <span className="section-tag-line"></span>
                <span className="section-tag-text">Ancient Science</span>
              </div>
              <h2 className="section-title-main">
                Yoga as a <span>Way of Living</span>
              </h2>
              <p className="section-desc-main" style={{ marginBottom: "18px" }}>
                More than two thousand years ago, the sage Patanjali codified the science of yoga in the Yoga Sutras. He defined yoga not as bending or contorting, but as <em>"Yogas Chitta Vritti Nirodha"</em>—the settling of the turbulent fluctuations of the mind.
              </p>
              <p className="section-desc-main" style={{ marginBottom: "20px" }}>
                At Ojalis, we integrate these philosophical principles into every class. You do not just practice physical movements; you learn how to observe your thoughts, soften resistance, breathe through physical discomfort, and cultivate an unshakeable inner poise.
              </p>
              <div style={{ borderLeft: "3px solid var(--ojalis-gold)", paddingLeft: "20px", margin: "24px 0" }}>
                <p style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--ojalis-burgundy)" }}>
                  "When the breath wanders, the mind is unsteady. But when the breath is calmed, the mind too will be still, and the yogi achieves long life."
                </p>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--ojalis-gold-dark)", textTransform: "uppercase", letterSpacing: "1px" }}>
                  — Hatha Yoga Pradipika
                </span>
              </div>
            </div>

            <div className="intro-visual-side">
              <div 
                className="intro-image-container" 
                style={{ 
                  height: "380px", 
                  borderRadius: "var(--radius-lg)", 
                  overflow: "hidden", 
                  boxShadow: "var(--shadow-md)", 
                  border: "1px solid var(--ojalis-border)" 
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1000&q=85" 
                  alt="Ancient yogic study and meditation in traditional ashram setting" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Limbs Section */}
      <section className="section-spacing bg-ivory">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
            <div className="section-tag-wrapper">
              <span className="section-tag-line"></span>
              <span className="section-tag-text">Patanjali's Roadmap</span>
              <span className="section-tag-line"></span>
            </div>
            <h2 className="section-title-main">
              The Eight Limbs of <span>Classical Yoga</span>
            </h2>
            <p className="section-desc-main mx-auto">
              A comprehensive eightfold roadmap to harmonize relationships, physical health, psychological calmness, and self-realization.
            </p>
          </div>

          <div className="programs-card-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: "48px" }}>
            {limbsData.map((limb) => (
              <div key={limb.num} className="why-card-item" style={{ padding: "30px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span className="why-number-mark" style={{ margin: 0, fontSize: "28px" }}>{limb.num}</span>
                  <span style={{ fontSize: "13px", color: "var(--ojalis-gold-dark)", fontWeight: 600 }}>{limb.sanskrit}</span>
                </div>
                <h3 className="why-card-title" style={{ fontSize: "20px" }}>{limb.name}</h3>
                <p className="why-card-desc">{limb.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Applications in Modern Life */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
            <div className="section-tag-wrapper">
              <span className="section-tag-line"></span>
              <span className="section-tag-text">Daily Integration</span>
              <span className="section-tag-line"></span>
            </div>
            <h2 className="section-title-main">
              Applying Yogic Wisdom to <span>Modern Living</span>
            </h2>
          </div>

          <div className="benefits-cards-grid" style={{ marginTop: "44px" }}>
            <div className="benefit-box-card">
              <div className="benefit-icon-circle">
                <IconLotus size={22} color="var(--ojalis-burgundy)" />
              </div>
              <h3 className="benefit-box-title">Mindful Speech (Satya)</h3>
              <p className="benefit-box-desc">Speaking only when your words are truthful, kind, and necessary, reducing social misunderstandings and emotional exhaustion.</p>
            </div>
            <div className="benefit-box-card">
              <div className="benefit-icon-circle">
                <IconBreathing size={22} color="var(--ojalis-burgundy)" />
              </div>
              <h3 className="benefit-box-title">Mitahara (Pure Nutrition)</h3>
              <p className="benefit-box-desc">Approaching meals with gratitude and moderation, choosing fresh, seasonal foods that nurture bodily vitality and mental clarity.</p>
            </div>
            <div className="benefit-box-card">
              <div className="benefit-icon-circle">
                <IconMindBody size={22} color="var(--ojalis-burgundy)" />
              </div>
              <h3 className="benefit-box-title">Daily Reflection (Svadhyaya)</h3>
              <p className="benefit-box-desc">Taking 10 quiet minutes before sleep to observe personal habits, celebrating conscious progress while letting go of judgments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Bottom CTA Section Before Footer */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card-box">
            <h2 className="final-cta-title">
              Begin Your Journey <span>With Yoga</span>
            </h2>
            <p className="final-cta-desc">
              Explore the teachings of yoga and bring greater balance, awareness and discipline into your daily life.
            </p>
            <div className="final-cta-btn-group">
              <Link to="/book-session" className="btn btn-gold">
                Book a Session
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/contact" className="btn btn-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Teachings;