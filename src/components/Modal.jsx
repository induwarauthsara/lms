import styled from "styled-components";

export const Modal = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  possition: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const DialogBox = styled.div`
  possition: fixed;
  background: antiquwhite;
  width: 33%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 0.75em;
  color: rgba(0, 0, 139, 0.7);
`;
