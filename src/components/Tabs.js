import styled from "styled-components";

export const Tabs = styled.div`
  height: 100%;
`;

export const Tab = styled.button`
  color: ${(props) => (props.active ? "white" : "black")};
  border: ${(props) => (props.active ? "none" : "1px solid black")};
  border-bottom: none;
  outline: none;
  cursor: pointer;
  possion: relative;
  margin: 0px 10px;
  padding: 8px 10px;
  background-color: ${(props) => (props.active ? "#29b6f6" : "white")};
  font-size: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  :hover {
    background-color: #0086c3;
  }
`;

export const TabContent = styled.div`
  min-height: 80vh;
  border: 5px solid #29b6f6;
  border-radius: 5px;
  padding: 5px;
`;

export const Content = styled.div`
  display: ${(props) => (props.active ? "" : "none")};
`;
