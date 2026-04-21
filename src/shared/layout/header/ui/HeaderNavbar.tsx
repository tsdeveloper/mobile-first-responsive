const navItems = ['Home', 'About', 'Services', 'Works', 'Gallery', 'Blog', 'Contact']


export const HeaderNavbar = () => (

    <nav className="site-header__nav">
        <ul className="site-header__nav-list">
            {navItems.map((item, i) => (
                <li key={i} className="site-header__nav-item">
                    <a href="#" className="site-header__nav-link">
                    {item}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
)