export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>

      <p>
        Interested in working together or have a project in mind? Feel free to
        reach out.
      </p>

      <div className="contact-box">
        {/* <p>
          Phone:{" "}
          <a href="tel:+919408081644">
            +91 94080 81644
          </a>
        </p> */}

        <p>
          Email:{' '}
          <a href="mailto:andhariamonil3@gmail.com">andhariamonil3@gmail.com</a>
        </p>

        <p>
          GitHub:{' '}
          <a
            href="https://github.com/andhariamonil"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/andhariamonil
          </a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/monilandharia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/monilandharia
          </a>
        </p>
      </div>
    </section>
  );
}
