import styled from 'styled-components';
import stories from '../../data/stories.json';

function Contents() {
  const btnBlueColor = '#0C3E9D';
  const btnGrayColor = '#C9C9C9';

  let btnBlueContent = 'testBlueText';
  let btnGrayContent = 'testGrayText';

  const MainText = styled.div`
    margin: 30px 15px 0;
    color: #000000;
    font-family: 'NanumMyeongjo', serif;
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
      <MainText>컨텐츠들어가는곳. 여기에. 컨텐츠. 들어감. 이렇게. 글 여러번 써도.</MainText>
      <ButtonContainer>
        <Button color={btnGrayColor}>{btnBlueContent}</Button>
        <Button color={btnBlueColor}>{btnGrayContent}</Button>
      </ButtonContainer>
    </>
  );
}

export default Contents;