import {HeaderNavbar} from "./HeaderNavbar";
import Logo from "./Logo";

export const Header = () => (
    <header className="site-header">
        <div className="site-header__container">
            <Logo/>
            <HeaderNavbar/>
        </div>
    </header>
);

export default Header;