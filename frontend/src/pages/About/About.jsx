import "./About.css";

function About() {
  return (
    <div className="about">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Learning Centre</h1>
        <p>Empowering Students with Industry-Ready Skills</p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Learning Centre is a professional training institute dedicated to
            providing high-quality technical education in Java, MERN Stack,
            Python, DevOps, and more. Our goal is to bridge the gap between
            academic learning and industry requirements.
          </p>

          <p>
            With expert trainers, real-time projects, and placement support,
            we help students build strong careers in the IT industry.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Training"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mission">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide practical, industry-oriented training and help students
            achieve their dream careers.
          </p>
        </div>

        <div className="vision">
          <h3>🚀 Our Vision</h3>
          <p>
            To become a leading training institute recognized for excellence
            in technical education and placements.
          </p>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements">
        <h2>Our Achievements</h2>

        <div className="achievement-grid">
          <div>
            <h3>5000+</h3>
            <p>Students Placed</p>
          </div>

          <div>
            <h3>100+</h3>
            <p>Hiring Companies</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Branches Across India</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
