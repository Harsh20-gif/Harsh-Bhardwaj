function Header({ activeSection, scrollToSection, scrolled, mobileMenuOpen, toggleMobileMenu }) {
    return (
        <header className={scrolled ? "header scrolled" : "header"}>
            <div className="logo">Harsh <span>Bhardwaj</span></div>
            
            {/* Desktop Nav */}
            <nav className={mobileMenuOpen ? "nav open" : "nav"}>
                <ul>
                    {["home", "about", "skills", "projects", "contact"].map((section) => (
                        <li
                            key={section}
                            className={activeSection === section ? "active" : ""}
                            onClick={() => scrollToSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </header>
    );
}
