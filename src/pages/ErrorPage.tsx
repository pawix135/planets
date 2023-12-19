import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <main>
      Something went wrong! Go back <Link to={"/"}>main page!</Link>
    </main>
  );
};

export default ErrorPage;
