import styled from "styled-components";

export const FluidContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align:items:center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
`;

export const ContainerInline = styled.div`
  flex: 1 1 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
  text-align: left;
`;

export const FlexRow = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1em 5em;
`;

export const Button = styled.button`
  background: ${(props) => {
    switch (props.color) {
      case "danger":
        return props.theme.primary.danger;
      case "secondary":
        return props.theme.secondary.main;
      default:
        return props.theme.primary.main;
    }
  }};
  color: ${(props) => props.theme.secondary.TextColor};
  font-weight: bold;
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
  //font-size: 1em;
  padding: 0.25em 1em;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 1em;

  :hover {
    background: ${(props) => {
      switch (props.color) {
        case "danger":
          return props.theme.primary.dangerDark;
        case "secondary":
          return props.theme.secondary.dark;
        default:
          return props.theme.primary.dark;
      }
    }};
  }
`;
