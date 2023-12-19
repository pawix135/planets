import { cn } from "../../utils/styles";

const planetToBgColor: PlanetToColor = {
  Mercury: "bg-mercury",
  Venus: "bg-venus",
  Earth: "bg-earth",
  Mars: "bg-mars",
  Jupiter: "bg-jupiter",
  Saturn: "bg-saturn",
  Uranus: "bg-uranus",
  Neptune: "bg-neptune",
} as const;

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
