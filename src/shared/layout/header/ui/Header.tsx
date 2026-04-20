import {MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from "@heroicons/react/24/outline";
import ReactCountryFlag from "react-country-flag";

export const Header = () => (
    <header className="site-header">
        <div className="site-header__topbar">

            <div className="site-header__region">
                <div className="site-header__region_country">
                    <ReactCountryFlag
                        countryCode="BR"
                        svg
                        style={{width: "18px", height: "18px"}}
                        aria-label="Brasil"
                    />
                </div>
                <div className="site-header__region_text">
                    BRAZIL | BRL R$
                </div>
            </div>
            <div className="site-header__brand">
                <a  href="#">PATRICK TA BEAUTY
                </a>
            </div>
            <div className="site-header__nav">
                <a href="#" className="site-header__action">
                    <MagnifyingGlassIcon width={20} height={20}/>
                </a>
                <a  href="#" className="site-header__action">
                    <UserIcon width={20} height={20}/>
                </a>
                <a  href="#" className="site-header__action">
                    <ShoppingBagIcon width={20} height={20}/>
                </a>
            </div>
        </div>
    </header>
);

export default Header;