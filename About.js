function About() {
    return (
        <section id="about" className="about">
            <h2>🙋 About Me</h2>
            <div className="about-container">
                <div className="about-img">
                    <img src="src\components\Harsh.jpg" alt="Profile" />
                </div>
                <div className="about-text">
                    <p>
                        Hi, I’m <strong>Harsh Bhardwaj</strong>, a final-year B.Tech CSE student
                        passionate about <span>Web Development</span> & <span>Java Programming</span>.
                        I love building interactive, user-friendly applications and exploring
                        the latest technologies in software development.
                    </p>
                    
                    <div className="about-details">
                        <p><i className="fa-solid fa-graduation-cap"></i> B.Tech CSE (2023–2026)</p>
                        <p><i className="fa-solid fa-code"></i> Skills: Java, React.js, MySQL</p>
                        <p><i className="fa-solid fa-bullseye"></i> Goal: Java Engineer</p>
                    </div>
                    
                    <a href="#contact" className="btn">Contact Me</a>
                </div>
            </div>
        </section>
    );
}
