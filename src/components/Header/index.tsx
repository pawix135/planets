import { useMenu } from "../../hooks/useMenu";
import { cn } from "../../utils/styles";
import MobileLink from "./MobileLink";
import { routes } from "../../constants/routes";

const Header: React.FC = () => {
  let [isOpen, toggleMenu, currentLocation, noTransition] = useMenu();

  console.log(currentLocation);

  return (
    <header className="flex lg:flex-row md:flex-col justify-between w-full items-center border-b border-white/20 relative px-6 py-4 ">
      <h1>THE PLANETS</h1>
      <button onClick={toggleMenu} className="md:hidden">
        <img
          src="/icon-hamburger.svg"
          alt="hamburger"
          className={cn({ "opacity-50": isOpen })}
        />
      </button>
      <nav
        className={cn(
          "absolute md:static transition-transform  top-[100px] left-0 w-full md:w-auto overflow-hidden md:py-5",
          {}
        )}
      >
        <ul
          className={cn(
            "px-5 pt-10 md:pt-0 flex flex-col md:flex-row gap-5 delay-75 md:gap-5 lg:gap-10 md:transition-none transition-transform duration-200 scale-y-0 md:scale-y-100 origin-top bg-dark-bg",
            {
              "scale-y-100": isOpen,
              "transition-none": noTransition,
            }
          )}
        >
          {routes.map((route, i) => (
            <li
              className="flex flex-col items-center justify-center h-1/3 md:border-none border-b border-white/20 md:py-5 lg:py-1 py-1 last:border-none"
              key={`mobile-link-${i}`}
            >
              <MobileLink
                path={route.path}
                planet={route.planetName}
                current={currentLocation.pathname}
                toggleMenu={toggleMenu}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
