import {MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from "@heroicons/react/24/outline";
import ReactCountryFlag from "react-country-flag";

export const Header = () => (
    <header className="site-header">
            <div className="site-header__brand">
                <a  href="#">Phoxul
                </a>
            </div>
            <div className="site-header__nav">
                <div className="site-header__nav-list">
                    <div className="site-header__nav-item">
                        <div className="site-header__nav-link">Home</div>
                        <div className="site-header__nav-link">About</div>
                        <div className="site-header__nav-link">Services</div>
                        <div className="site-header__nav-link">Works</div>
                        <div className="site-header__nav-link">Gallery</div>
                        <div className="site-header__nav-link">Blog</div>
                        <div className="site-header__nav-link">Contact</div>
                    </div>
                </div>

            </div>
    </header>
);

export default Header;