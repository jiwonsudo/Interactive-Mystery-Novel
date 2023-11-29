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

const coverData = getStoryDataByPartialKey('cover');

function getTitle() {
  return coverData.title;
}

function getOriginalAuthor() {
  return coverData.originalAuthor;
}

function getAdaptationWriter() {
  return coverData.adaptationWriter;
}

export { getSerialStories, getTitle, getOriginalAuthor, getAdaptationWriter };