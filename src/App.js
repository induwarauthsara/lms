import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { ImBook } from "react-icons/im";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Main, Footer } from "./components/layout";
import { NavBar, NavItem, NavLink } from "./components/navbar";
import Spinner from "./components/spinner";

import { CATALOG, DASHBOARD } from "./shared/routes";

const Dashboard = React.lazy(() => import("./containers/Dashboard/index"));
const Error404 = React.lazy(() => import("./containers/404"));

let routes = (
  <Switch>
    <Route path={DASHBOARD} exact component={Dashboard} />{" "}
    <Route path={CATALOG} exact component={Spinner} />{" "}
    <Route path="/" exact component={Dashboard} />{" "}
    <Route component={Error404} />{" "}
  </Switch>
);

function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#dcf3fa", //"77e8ff",
      dark: "#0086c3",
      TextColor: "#000",
      danger: "#e91e63",
      dangerDark: "#8c0101",
    },
    secondary: {
      main: "#9e9e9e",
      light: "#cfcfcf",
      dark: "#707070",
      TextColor: "#fff",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href="/">
              <ImBook />
            </NavLink>{" "}
          </NavItem>{" "}
          <NavItem>
            <NavLink href="/"> Home </NavLink>{" "}
          </NavItem>{" "}
          <NavItem>
            <NavLink href={DASHBOARD}> Dashboard </NavLink>{" "}
          </NavItem>{" "}
          <NavItem>
            <NavLink href={CATALOG}> Catalog </NavLink>{" "}
          </NavItem>{" "}
        </NavBar>{" "}
      </Header>{" "}
      <Main>
        <Suspense fallback={<Spinner msg="Loading.." />}>
          <Router> {routes} </Router>{" "}
        </Suspense>{" "}
      </Main>{" "}
      <Footer> Copyright {new Date().getFullYear()}© Induwara Uthsara </Footer>{" "}
    </ThemeProvider>
  );
}

export default App;
