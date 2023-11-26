import getStoryDataByPartialKey from "../../utils/storyDataGetter";

function getSerialStories(userChoices) {
  let fullStory = getStoryDataByPartialKey('story').main;
  let currChoices = '';

  userChoices.forEach(choice => {
    currChoices += choice;
    console.log(currChoices);
    fullStory += ` ${getStoryDataByPartialKey('story' + currChoices).main}`;
  });

  return fullStory;
}

export default getSerialStories;