interface Planet {
  name: Planets;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

type PlanetToColor = {
  [key in Planets]: string;
};

type Planets =
  | "Mercury"
  | "Venus"
  | "Earth"
  | "Mars"
  | "Jupiter"
  | "Saturn"
  | "Uranus"
  | "Neptune";

type PlanetsData = Planet[];

interface PlanetRoute {
  path: string;
  index?: boolean;
  planetName: Planets;
}
