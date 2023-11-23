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
  font-size: 0.8em;
  line-height: 0.9em;
  display: ${props => props.$isVisible ? props.$isVisible : 'block'};
`;

export default Button;