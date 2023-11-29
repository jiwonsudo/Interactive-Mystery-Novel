import getStoryDataByPartialKey from '../../utils/storyDataGetter';

/**
 * 
 * @param {list} userChoicesList list of user's choices, consists of 'A' and 'B'.
 * @returns data of story, searched by 'userChoicesList'.
 */
const storyData = (userChoicesList) => getStoryDataByPartialKey('story' + userChoicesList.join(''));

function getMainStory(userChoicesList) {
  return storyData(userChoicesList).main.split("\n").map((line, index) => <span key={ index }>{ line }<br/></span>);
}

function getChoiceA(userChoicesList) {
  return storyData(userChoicesList).choiceA;
}

function getChoiceB(userChoicesList) {
  return storyData(userChoicesList).choiceB;
}

function getIfEnd(userChoicesList) {
  return storyData(userChoicesList).end;
}

export { getMainStory, getChoiceA, getChoiceB, getIfEnd };

