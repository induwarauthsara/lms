import React from "react";
import { ThemeProvider } from "styled-components";
import { ImBook } from "react-icons/im";

import { Header, Main, Footer } from "./components/layout";
import { NavBar, NavItem, NavLink } from "./components/navbar";

function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#77e8ff",
      dark: "#0086c3",
      TextColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href="#">
              <ImBook />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> Home </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> About Us </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> Contact </NavLink>
          </NavItem>
        </NavBar>
      </Header>

      <Main> This is Mainn </Main>

      <Footer> this is footer </Footer>
    </ThemeProvider>
  );
}

export default App;
