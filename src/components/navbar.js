import styled from "styled-components";

export const NavBar = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary.main};
`;

export const NavItem = styled.li `
  float: left;
  height: 5vh;
`;

export const NavLink = styled.a `
  display: block;
  color: ${(props) => props.theme.secondary.main};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;

  :hover {
    color: ${(props) => props.theme.primary.TextColor};

    background: ${(props) => props.theme.primary.light};
  }
  :active {
    background-color: ${(props) => props.theme.primary.dark};
    color: ${(props) => props.theme.secondary.main};
  }
`;