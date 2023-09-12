import { headerLogo  } from "../assets/images";
import {hamburger} from '../assets/icons'
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <>
      <header className="padding-x py-8 absolute w-full z-10">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="max-lg:block hidden" >
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
