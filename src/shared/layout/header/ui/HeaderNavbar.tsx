import {useState} from "react";

const navItems = [
    {label: 'Home', href: '#home', isActive: true},
    {label: 'About', href: '#about', isActive: false},
    {label: 'Services', href: '#services', isActive: false},
    {label: 'Works', href: '#works', isActive: false},
    {label: 'Gallery', href: '#gallery', isActive: false},
    {label: 'Blog', href: '#blog', isActive: false},
    {label: 'Contact', href: '#contact', isActive: false},]


export const HeaderNavbar = () => {
    const [activeItem, setActiveItem] = useState('Home');

    return (
        <nav className="site-header__nav">
        <ul className="site-header__nav-list">
            {navItems.map((item, i)=> {

                const isActive = activeItem === item.label;
                const linkClassName = [
                    'site-header__nav-link',
                    isActive ? 'site-header__nav-link--active' : 'site-header__nav-link--disabled',
                ].filter(Boolean).join(' ');
                return (
                    <li key={i} className="site-header__nav-item">
                        <a
                            href={item.href}
                            className={linkClassName}
                            onClick={(event)=> {
                                if (isActive) {
                                    event.preventDefault();
                                    return;
                                }
                                setActiveItem(item.label);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
    )
}
