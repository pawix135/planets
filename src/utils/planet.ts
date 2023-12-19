import plantsData from "../assets/data.json";

export const getPlanet = (name: Planets): Planet => {
  const planet = plantsData.find(
    (planet) => planet.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (!planet) throw Error("Planet not found");

  return planet;
};
