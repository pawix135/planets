import planetData from "../assets/data.json";

export const routes: PlanetRoute[] = planetData.map((planet) => ({
  path: planet.name == "Mercury" ? "/" : planet.name.toLowerCase(),
  planetName: planet.name as Planets,
  index: planet.name == "Mercury",
}));
