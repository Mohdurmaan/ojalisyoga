import { useParams, Link } from "react-router-dom";
import { blogArticles } from "../data/blogData";

function BlogPost() {
  const { id } = useParams();
  const article = blogArticles.find((item) => item.id === id) || blogArticles[0];

  const otherArticles = blogArticles.filter((item) => item.id !== article.id).slice(0, 2);

  return (
    <main className="bg-ivory">
      {/* Banner */}
      <section className="page-hero-banner" style={{ padding: "64px 0 48px" }}>
        <div className="container">
          <Link to="/blog" style={{ color: "var(--ojalis-gold-light)", fontSize: "13px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            ← Back to All Articles
          </Link>
          <span className="page-hero-tag" style={{ display: "block" }}>{article.category}</span>
          <h1 className="page-hero-title" style={{ fontSize: "clamp(26px, 4vw, 42px)", maxWidth: "860px", margin: "0 auto 16px" }}>
            {article.title}
          </h1>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", fontSize: "13.5px", color: "#e5d8dc" }}>
            <span>By {article.author}</span>
            <span>&bull;</span>
            <span>{article.date}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="article-container">
            <img src={article.image} alt={article.title} className="article-hero-img" />

            <div 
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author Card */}
            <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--ojalis-border)", display: "flex", alignItems: "center", gap: "18px" }}>
              <img src="/logo.jpg" alt={article.author} style={{ width: "64px", height: "64px", borderRadius: "50%", border: "1.5px solid var(--ojalis-gold)" }} />
              <div>
                <h4 style={{ fontSize: "17px", color: "var(--ojalis-burgundy)", marginBottom: "4px" }}>
                  Written by {article.author}
                </h4>
                <p style={{ fontSize: "13.5px", color: "var(--ojalis-text-muted)", margin: 0 }}>
                  Teacher & practitioner at Ojalis Yogic Kriya, sharing the depth and healing science of classical yoga.
                </p>
              </div>
            </div>

            {/* Booking CTA inside post */}
            <div style={{ marginTop: "40px", background: "var(--ojalis-ivory)", padding: "28px", borderRadius: "var(--radius-md)", border: "1px solid var(--ojalis-border)", textAlign: "center" }}>
              <h3 style={{ fontSize: "20px", color: "var(--ojalis-burgundy)", marginBottom: "8px" }}>
                Ready to Experience Classical Yoga?
              </h3>
              <p style={{ fontSize: "14px", color: "var(--ojalis-text-muted)", marginBottom: "18px" }}>
                Join our morning or evening batches in person at our peaceful studio.
              </p>
              <Link to="/book-session" className="btn btn-primary">
                Book a Trial Session
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div style={{ maxWidth: "820px", margin: "60px auto 0" }}>
            <h3 style={{ fontSize: "22px", color: "var(--ojalis-burgundy)", marginBottom: "24px" }}>
              Related Articles
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {otherArticles.map((item) => (
                <Link key={item.id} to={`/blog/${item.id}`} style={{ textDecoration: "none" }}>
                  <div className="blog-card-item" style={{ height: "100%" }}>
                    <div className="blog-card-thumb" style={{ height: "160px" }}>
                      <img src={item.image} alt={item.title} className="blog-card-img" />
                    </div>
                    <div className="blog-card-content" style={{ padding: "18px" }}>
                      <span className="blog-meta-tag" style={{ fontSize: "11px" }}>{item.category}</span>
                      <h4 style={{ fontSize: "16px", color: "var(--ojalis-burgundy)", margin: "6px 0" }}>
                        {item.title}
                      </h4>
                      <span style={{ fontSize: "12px", color: "var(--ojalis-gold-dark)", fontWeight: 600 }}>Read Article →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;
