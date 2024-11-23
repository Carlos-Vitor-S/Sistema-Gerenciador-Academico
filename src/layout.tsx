import { Outlet, useLocation } from "react-router-dom";
import CustomToolBar from "./components/CustomToolBar/CustomToolbar";
import FormModalContextProvider from "./store/FormModalContextProvider";
import SnackbarContextProvider from "./store/SnackBarContextProvider";

const Layout = () => {
  //Pegar rota atual
  const location = useLocation();
  //Aparecer a navbar menos na rota de /login
  //const [hideNav, setHideNav] = useState(location.pathname === "/login");
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      {location.pathname !== "/login" && <CustomToolBar />}

      <main style={{ display: "flex", flex: 1 }}>
        <FormModalContextProvider>
          <SnackbarContextProvider>
            <Outlet />
          </SnackbarContextProvider>
        </FormModalContextProvider>
      </main>
    </div>
  );
};

export default Layout;
