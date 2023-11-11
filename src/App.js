import Nav from './Nav';
import styled from 'styled-components';

import stories from './data';

const MainDiv = styled.div`
  width: 100vw;
  background-color: #FFFFFF;
`;

function Contents() {
  const btnBlueColor = '#0C3E9D';
  const btnGrayColor = '#C9C9C9';

  let btnBlueContent = 'testBlueText';
  let btnGrayContent = 'testGrayText';

  const MainText = styled.div`
    margin: 30px 15px 0;
    color: #000000;
  `;

  const Button = styled.button`
    padding: 14px 25px;
    border-radius: 15px;
    border: 1px solid #858585;
    background: ${(props) => props.color ? props.color : '#FFFFFF'};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `;

  const ButtonContainer = styled.div`
    margin: 30px 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <>
      <MainText>컨텐츠</MainText>
      <ButtonContainer>
        <Button color={btnGrayColor}>{btnBlueContent}</Button>
        <Button color={btnBlueColor}>{btnGrayContent}</Button>
      </ButtonContainer>
    </>
  );
}

function App() {
  return (
    <MainDiv>
      <Nav></Nav>
      <Contents></Contents>
    </MainDiv>
  );
}

export default App;
