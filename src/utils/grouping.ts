export const regroupArray = (arr: any[], splitter: number = 4): any[][] => {
  const tempArr = [];
  let availableIndexArr = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (!tempArr[availableIndexArr]) {
      tempArr[availableIndexArr] = [];
    }

    tempArr[availableIndexArr] = [...tempArr[availableIndexArr], arr[i]];
    if (tempArr[availableIndexArr].length === splitter) {
      availableIndexArr++;
    }
  }

  return tempArr;
};
