import { planetToBgColor } from "../../constants/planets";
import { cn } from "../../utils/styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  planet: Planets;
}

const Button: React.FC<Props> = ({ onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(
        planetToBgColor[props.planet],
        className,
        "hover:bg-[#D8D8D8]"
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
