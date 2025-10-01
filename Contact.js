function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>📩 Contact Me</h2>
            <div className="contact-container">
                {/* Contact Form */}
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                {/* Contact Info */}
                <div className="contact-info">
                    <p><i className="fa-solid fa-envelope"></i> harshbhardwaj@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> +91 7505150687</p>
                    <p><i className="fa-solid fa-location-dot"></i> Ghaziabad, India</p>

                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
