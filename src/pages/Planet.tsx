import { useLoaderData } from "react-router-dom";

interface Props {}

const Planet: React.FC<Props> = () => {
  let planet = useLoaderData() as Planet;

  return <div>{planet.name}</div>;
};

export default Planet;
