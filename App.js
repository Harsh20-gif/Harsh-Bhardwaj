const { useState, useEffect } = React;

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.75) {
                        el.classList.add('visible');
                    }
                }
            });

            const currentSection = sections.find(section => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="App">
            <Header 
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                scrolled={scrolled}
                mobileMenuOpen={mobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
            />
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));