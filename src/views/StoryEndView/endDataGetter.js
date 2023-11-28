import getStoryDataByPartialKey from "../../utils/storyDataGetter";

function getSerialStories(userChoices) {
  let fullStory = getStoryDataByPartialKey('story').main;
  let currChoices = '';

  userChoices.forEach(choice => {
    currChoices += choice;
    fullStory += ` ${getStoryDataByPartialKey('story' + currChoices).main}`;
  });

  return fullStory;
}

export default getSerialStories;