function Skills() {
    const skills = [
        { name: "Java", icon: "fa-brands fa-java", level: 90 },
        { name: "React.js", icon: "fa-brands fa-react", level: 85 },
        { name: "HTML & CSS", icon: "fa-brands fa-html5", level: 95 },
        { name: "JavaScript", icon: "fa-brands fa-js", level: 80 },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 75 },
        { name: "MySQL", icon: "fa-solid fa-database", level: 85 },
    ];

    return (
        <section id="skills" className="skills">
            <h2>⚡ My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <i className={skill.icon}></i>
                        <h3>{skill.name}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <span className="percentage">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
