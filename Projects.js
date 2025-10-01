function Projects() {
    const projects = [
        {
            title: "Online Shopping Cart",
            desc: "Built using Java, JSP, JDBC, and MySQL.",
            tech: "Java, JSP, JDBC, MySQL",
        },
        {
            title: "Hospital Finder",
            desc: "Shows nearby hospitals using APIs and Java backend.",
            tech: "Java, APIs, JSP, MySQL",
        },
        {
            title: "AI Healthcare Assistant",
            desc: "Diagnoses health issues with AI backend using Java.",
            tech: "Java, AI, ML, JDBC",
        },
        {
            title: "Car Game",
            desc: "Fun racing car game built using HTML, CSS & JavaScript.",
            tech: "HTML, CSS, JS",
        },
        {
            title: "Portfolio Website",
            desc: "Personal responsive portfolio made using React & CSS.",
            tech: "React.js, CSS",
        },
        {
            title: "Student Result Management",
            desc: "Web app for managing student records and results.",
            tech: "Java, JSP, JDBC, MySQL",
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2>🚀 Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <span className="tech">{project.tech}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
