import { Link } from "react-router-dom";
import { cn } from "../../../utils/styles";
import { planetToBgColor } from "../../../constants/planets";

interface Props {
  planet: Planets;
  path: string;
  current: string;
  toggleMenu: () => void;
}

const MobileLink: React.FC<Props> = ({ planet, path, current, toggleMenu }) => {
  return (
    <Link
      to={path}
      onClick={toggleMenu}
      className="text-white flex flex-row items-center w-full md:py-0 py-2 gap-5"
    >
      <div
        className={cn(
          planetToBgColor[planet],
          "w-5 h-5 rounded-full md:hidden"
        )}
      ></div>
      <span className="text-lg md:text-sm font-bold font-['Spartan'] uppercase">
        {planet}
      </span>
      <img
        src="/icon-chevron.svg"
        alt=""
        className="w-3 h-3 ml-auto md:hidden"
      />
    </Link>
  );
};

export default MobileLink;
