import { HeroSection } from "@/hero-section";
import {HeaderNavbar} from "./HeaderNavbar";
import Logo from "./Logo";

export const Header = () => (
    <header className="site-header">
        <Logo/>
        <HeaderNavbar/>
    </header>
);

export default Header;