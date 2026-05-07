export default function Contact() {
  const socials = [
    { name: "Email", link: "mailto:andhariamonil3@gmail.com", icon: "📧", label: "andhariamonil3@gmail.com" },
    { name: "GitHub", link: "https://github.com/andhariamonil", icon: "🐙", label: "github.com/andhariamonil" },
    { name: "LinkedIn", link: "https://linkedin.com/in/monilandharia", icon: "💼", label: "linkedin.com/monil" }
  ];

  return (
    <section className="contact-v2">
      <div className="contact-container">
        <h2>Let's <span>Connect</span></h2>
        <p>Currently looking for new opportunities or collaborative projects.</p>
        <div className="social-grid">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noreferrer" className="social-card">
              <span className="social-icon">{s.icon}</span>
              <div className="social-info">
                <span className="social-name">{s.name}</span>
                <span className="social-link-text">{s.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}