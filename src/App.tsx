import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
