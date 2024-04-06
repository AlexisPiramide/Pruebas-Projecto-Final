import { Outlet } from "react-router-dom";

import Navegacion from "./fragments/Navegacion";

export default function App() {
  return (
    <>
      <Navegacion />
      <Outlet />
    </>
  );
}