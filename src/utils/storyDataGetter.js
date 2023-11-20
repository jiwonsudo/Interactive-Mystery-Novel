import storyData from '../data/stories.json';

function getStoryDataByPartialKey(partialKey) {
  const matchingKey = Object.keys(storyData).find(key => key.includes(partialKey));

  if (matchingKey) {
    return storyData[matchingKey];
  } else {
    return null;
  }
}

export default getStoryDataByPartialKey;