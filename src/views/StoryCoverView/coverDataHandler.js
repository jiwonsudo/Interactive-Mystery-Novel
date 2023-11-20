import getStoryDataByPartialKey from '../../utils/storyDataGetter';

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

export { getTitle, getOriginalAuthor, getAdaptationWriter };