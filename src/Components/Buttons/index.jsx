import styled from "styled-components";

const Button = styled.button`
  width: 40vw;
  max-width: 300px;
  padding: 14px 25px;
  border-radius: 15px;
  border: 1px solid #858585;
  background: ${(props) => props.$bgColor ? props.$bgColor : '#FFFFFF'};
  color: ${(props) => props.$color ? props.$color : '#FFFFFF'};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'NanumSquareNeo' sans-serif;
  font-size: 0.7em;
  line-height: 0.8em;
  display: ${(props) => props.$isHidden ? 'none' : 'block'};
`;

const ButtonContainer = styled.div`
  margin: 30px 15px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export { Button, ButtonContainer };