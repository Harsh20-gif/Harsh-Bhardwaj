function Hero({ scrollToSection }) {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm <span>Harsh Bhardwaj</span></h1>
                <h2 className="typing-text">B.Tech Student | Aspiring Web Developer</h2>
                <p>I love building modern, responsive, and interactive web applications 🚀</p>
                <div className="hero-buttons">
                    <button className="btn" onClick={() => scrollToSection('projects')}>
                        See My Work
                    </button>
                    <button className="btn-outline" onClick={() => scrollToSection('contact')}>
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
}
