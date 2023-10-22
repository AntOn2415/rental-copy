import styled, { keyframes } from "styled-components";
import { fadeIn, zoomIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const zoomInAnimation = keyframes`${zoomIn}`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(1px);
  z-index: 998;
  overflow-y: scroll;
  overflow: hidden;

  animation: 500ms ${fadeInAnimation};
`;

export const ModalDiv = styled.div`
  position: absolute;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
  overflow: scroll;

  animation: 300ms ${zoomInAnimation};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background: inherit;
  font-size: 60px;
  stroke: #121417;
  outline: none;
  border: none;
  transition: stroke 300ms ease;

  :hover,
  :focus {
    stroke: #3470ff;
  }
`;
