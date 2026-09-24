import { useState } from "react";

const packages = [
  {
    name: "Aarambh",
    subtitle: "Digital Foundation",
    price: "₹499",
  },
  {
    name: "Udaan",
    subtitle: "Creative + Content Skills",
    price: "₹999",
  },
  {
    name: "Pragati",
    subtitle: "Marketing + Client Skills",
    price: "₹1,999",
  },
  {
    name: "Brahmastra",
    subtitle: "Advanced Digital Skills",
    price: "₹3,999",
  },
  {
    name: "Shikhar",
    subtitle: "Leadership + Business",
    price: "₹6,999",
  },
];

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <button className="logo" onClick={() => goTo("home")}>
            <span className="logo-mark">S</span>
            <span>
              Skill<span>Link</span>
            </span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => goTo("home")}>Home</button>
            <button onClick={() => goTo("about")}>About</button>
            <button onClick={() => goTo("packages")}>Packages</button>
            <button onClick={() => goTo("how-it-works")}>
              How It Works
            </button>

            <button
              className="mobile-login"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </nav>

          <button
            className="login-button"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </header>


      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              ✦ Build Skills. Build Your Future.
            </div>

            <h1>
              Learn Skills.
              <br />
              <span>Build Opportunities.</span>
            </h1>

            <p>
              SkillLink is a digital learning and project ecosystem
              designed to help people learn practical skills, build
              experience and grow professionally.
            </p>

            <div className="hero-actions">

              <button
                className="primary-button"
                onClick={() => goTo("packages")}
              >
                Explore Packages →
              </button>

              <button
                className="secondary-button"
                onClick={() => goTo("how-it-works")}
              >
                How SkillLink Works
              </button>

            </div>

            <div className="hero-trust">
              <span>✓ Practical Learning</span>
              <span>✓ Skill Based Growth</span>
              <span>✓ Project Opportunities</span>
            </div>

          </div>


          {/* DASHBOARD PREVIEW */}
          <div className="hero-preview">

            <div className="floating-card top-card">
              <b>🎓 Learn</b>
              <small>Practical Skills</small>
            </div>

            <div className="dashboard-card">

              <div className="dashboard-header">
                <div>
                  <small>Welcome to</small>
                  <h3>SkillLink</h3>
                </div>

                <div className="avatar">
                  SL
                </div>
              </div>

              <div className="progress-box">

                <div className="progress-title">
                  <span>Skill Progress</span>
                  <b>68%</b>
                </div>

                <div className="progress">
                  <div></div>
                </div>

              </div>

              <div className="stats">

                <div>
                  <strong>05</strong>
                  <span>Courses</span>
                </div>

                <div>
                  <strong>12</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>24</strong>
                  <span>Network</span>
                </div>

              </div>

            </div>

            <div className="floating-card bottom-card">
              <b>🚀 Grow</b>
              <small>Level Up</small>
            </div>

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-heading">

          <span>WHY SKILLLINK</span>

          <h2>
            One ecosystem for
            <strong> skill development</strong>
          </h2>

          <p>
            Learn useful skills, practice them and grow through
            a structured digital ecosystem.
          </p>

        </div>


        <div className="feature-grid">

          <Feature
            icon="🎓"
            title="Learn"
            text="Access structured skill-based courses and learning resources."
          />

          <Feature
            icon="💼"
            title="Create"
            text="Apply your knowledge through practical projects."
          />

          <Feature
            icon="👥"
            title="Connect"
            text="Build connections inside the SkillLink ecosystem."
          />

          <Feature
            icon="🚀"
            title="Grow"
            text="Track your progress through skills, scores and levels."
          />

        </div>

      </section>


      {/* PACKAGES */}
      <section id="packages" className="packages-section">

        <div className="section-heading">

          <span>SKILL PACKAGES</span>

          <h2>
            Choose your
            <strong> learning path</strong>
          </h2>

          <p>
            Start with the package that matches your current goal.
          </p>

        </div>


        <div className="packages-grid">

          {packages.map((item, index) => (

            <div
              className={
                index === 3
                  ? "package-card featured"
                  : "package-card"
              }
              key={item.name}
            >

              {index === 3 && (
                <div className="featured-label">
                  FEATURED
                </div>
              )}

              <small>0{index + 1}</small>

              <h3>{item.name}</h3>

              <p className="package-subtitle">
                {item.subtitle}
              </p>

              <div className="price">
                {item.price}
              </div>

              <p>
                Practical learning designed for your growth.
              </p>

              <button
                className="package-button"
                onClick={() => setShowLogin(true)}
              >
                View Package →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Your journey with
            <strong> SkillLink</strong>
          </h2>

        </div>


        <div className="steps">

          <Step
            number="01"
            title="Create Account"
            text="Get access to your SkillLink dashboard."
          />

          <Step
            number="02"
            title="Learn a Skill"
            text="Choose a course or package and start learning."
          />

          <Step
            number="03"
            title="Practice"
            text="Apply your knowledge through practical activities."
          />

          <Step
            number="04"
            title="Grow"
            text="Track your skills, score, projects and progress."
          />

        </div>

      </section>


      {/* CTA */}
      <section className="cta">

        <div>

          <span>START YOUR JOURNEY</span>

          <h2>
            Build skills that
            <br />
            <strong>create opportunities.</strong>
          </h2>

          <p>
            Start exploring SkillLink and discover your learning path.
          </p>

          <button
            className="primary-button"
            onClick={() => setShowLogin(true)}
          >
            Get Started →
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-container">

          <div>
            <div className="footer-logo">
              <span className="logo-mark">S</span>
              Skill<span>Link</span>
            </div>

            <p>
              Learn. Create. Grow.
            </p>
          </div>

          <div className="footer-links">
            <button onClick={() => goTo("about")}>
              About
            </button>

            <button onClick={() => goTo("packages")}>
              Packages
            </button>

            <button onClick={() => setShowLogin(true)}>
              Login
            </button>
          </div>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} SkillLink. All rights reserved.
        </div>

      </footer>


      {/* LOGIN */}
      {showLogin && (
        <LoginModal
          close={() => setShowLogin(false)}
        />
      )}

    </div>
  );
}


/* FEATURE CARD */

function Feature({ icon, title, text }) {

  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


/* STEP */

function Step({ number, title, text }) {

  return (
    <div className="step">

      <div className="step-number">
        {number}
      </div>

      <div>
        <h3>{title}</h3>

        <p>
          {text}
        </p>
      </div>

    </div>
  );
}


/* LOGIN MODAL */

function LoginModal({ close }) {

  const [role, setRole] = useState("Partner");

  return (
    <div
      className="modal-overlay"
      onClick={close}
    >

      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-button"
          onClick={close}
        >
          ×
        </button>

        <div className="login-icon">
          S
        </div>

        <h2>
          Welcome back
        </h2>

        <p>
          Login to your SkillLink account.
        </p>


        <div className="role-selector">

          {["Partner", "Client", "Admin", "CEO"].map(
            (item) => (

              <button
                key={item}
                className={
                  role === item
                    ? "active-role"
                    : ""
                }
                onClick={() => setRole(item)}
              >
                {item}
              </button>

            )
          )}

        </div>


        <label>
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
        />


        <label>
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
        />


        <button className="login-submit">
          Login →
        </button>

        <small>
          Selected panel: {role}
        </small>

      </div>

    </div>
  );
}


export default App;