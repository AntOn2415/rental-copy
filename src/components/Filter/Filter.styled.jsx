import { styled, css } from "styled-components";
import { NumericFormat } from "react-number-format";

export const FilterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;

export const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const Select = styled.select`
  position: relative;
  z-index: 999;
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 8px;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);
  outline: none;
  border: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const Option = styled.option`
  display: inline-flex;

  height: 272px;
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 112px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  background: #fff;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  color: rgba(18, 20, 23, 0.2);

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:hover {
    background-color: #007bff;
    color: #121417;
  }
`;

export const ContainerInputDiv = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const P = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const LabelInput = styled.label`
  position: absolute;
  left: 24px;
  top: 13px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const Input = styled(NumericFormat)`
  display: flex;
  width: 89px;
  padding: 14px 0 14px 70px;
  background-color: #f7f7fb;
  color: #121417;
  outline: none;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const ContainerSvg = styled.div`
  position: absolute;
  top: 40px;
  left: 185px;
  height: 20px;
  stroke: #121417;
  fill: none;
  pointer-events: none;

  transition: transform 300ms ease;
  transform-origin: center;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotateX(180deg);
    `}
`;

export const InputTo = styled(Input)`
  width: 110px;
  padding-left: 49px;
  border-radius: 0px 14px 14px 0px;
`;

export const FormBtn = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: #3470ff;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  cursor: pointer;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }

  &:disabled {
    background-color: #dcebf7;
    cursor: not-allowed;
  }
`;
