import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, ButtonContainer } from '../Buttons';
import StoryData from '../../data/stories.json';

const CoverText = styled.div`
  margin: 30vh 15px 0;
  color: #000000;
  font-family: 'NanumSquareNeo', sans-serif;
  font-size: 1em;
  line-height: 1.5em;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
`;

const WriterInfo = styled.p`
  margin: 0.3em;
  font-size: 0.8em;
`;

function CoverContents({ onModeChange }) {
  const btnBgColor = '#0C3E9D';
  const btnColor = '#FFFFFF';

  function getDataByPartialKey(storiesData, partialKey) {
    const matchingKey = Object.keys(storiesData).find(key => key.includes(partialKey));

    if (matchingKey) {
      return storiesData[matchingKey];
    } else {
      return null;
    }
  }

  const coverData = getDataByPartialKey(StoryData, 'cover');

  return (
    <>
      <CoverText>
        <Title>{coverData.title}</Title>
        <WriterInfo>{`원작 ${coverData.originalAuthor}`}</WriterInfo>
        <WriterInfo>{`각색 ${coverData.adaptationWriter}`}</WriterInfo>
        <ButtonContainer>
          <Button $bgColor={btnBgColor} $color={btnColor} onClick={() => onModeChange('storyMode')}>소설 시작하기</Button>
        </ButtonContainer>
      </CoverText>
    </>
  );
}

export default CoverContents;