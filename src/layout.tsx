import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  //Pegar rota atual
  const location = useLocation();
  //Aparecer a navbar menos na rota de /login
  //const [hideNav, setHideNav] = useState(location.pathname === "/login");
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      {location.pathname !== "/login" && (
        <header>
          <NavBar />
        </header>
      )}

      <main style={{ display: "flex", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
