
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }
  
  return arr.slice().sort(byNumber);
}

sortByNumber([3,7, 5]) // -> [3, 5, 7]

/****************
 * MATH SECTION *
 ****************/

const mean = function(arr) {
  let totalOfArrNums = 0;
  for (const item of arr) {
    totalOfArrNums = totalOfArrNums + item;
  }
  return totalOfArrNums / arr.length;
}

const median = function(array) {
  const sortedArray = array.sort();
  if (sortedArray.length % 2 === 0) {
    let middleNumbersEven = Math.floor(sortedArray.length / 2.0)
    return (sortedArray[middleNumbersEven - 1] + sortedArray[middleNumbersEven]) / 2.0;
  } else {
    let middleNumber = Math.floor(sortedArray.length / 2)
    return (sortedArray[middleNumber]);
  }
}


/********************
 * MATH-AREA QUERIES *
 ********************/
const d6QueryForMean = document.querySelector('#d6-rolls-mean');
const d6QueryForMediam = document.querySelector('#d6-rolls-median');
const doubleD6QueryForMean = document.querySelector('#double-d6-rolls-mean');
const doubleD6QueryForMediam = document.querySelector('#double-d6-rolls-median');
const d12QueryForMean = document.querySelector('#d12-rolls-mean');
const d12QueryForMediam = document.querySelector('#d12-rolls-median');
const d20QueryForMean = document.querySelector('#d20-rolls-mean');
const d20QueryForMediam = document.querySelector('#d20-rolls-median');
/*********************
 * IMAGE-AREA/BUTTON QUERIES *
 *********************/

const idRollQueryForImgD6 = document.querySelector('#d6-roll')
const idRollQueryForImgDoubleD6one = document.querySelector('#double-d6-roll-1');
const idRollQueryForImgDoubleD6two = document.querySelector('#double-d6-roll-2');
const idRollQueryForImgD12 = document.querySelector('#d12-roll');
const idRollQueryForImgD20 = document.querySelector('#d20-roll');

/******************
 * BUTTON QUERIES *
 ******************/
const theOneToResetEmAllButton = document.querySelector('#reset-button')



/******************
 * CLICK HANDLERS *
 ******************/

const d6ClickHandlerFunc = function() {
  let random6numOutput = getRandomNumber(6);
  sixes.push(random6numOutput);
  idRollQueryForImgD6.src = `./images/d6/${random6numOutput}.png`;
  const sixesMean = mean(sixes);
  const sixesMedian = median(sixes);
  d6QueryForMean.innerText = sixesMean;
  d6QueryForMediam.innerText = sixesMedian;

}

const doubleD6ClickHandlerFunc = function() {
  let randomDouble6numOutput1 = getRandomNumber(6);
  let randomDouble6numOutput2 = getRandomNumber(6);
  doubleSixes.push(randomDouble6numOutput1 + randomDouble6numOutput2);
  idRollQueryForImgDoubleD6one.src = `./images/d6/${randomDouble6numOutput1}.png`;
  idRollQueryForImgDoubleD6two.src = `./images/d6/${randomDouble6numOutput2}.png`;
  const doubleMean = mean(doubleSixes);
  const doubleMedian = median(doubleSixes);
  doubleD6QueryForMean.innerText = doubleMean;
  doubleD6QueryForMediam.innerText = doubleMedian;
}

const d12ClickHandlerFunc = function() {
  let randomD12numOutput = getRandomNumber(12);
  twelves.push(randomD12numOutput);
  idRollQueryForImgD12.src = `./images/numbers/${randomD12numOutput}.png`;
  const d12Mean = mean(twelves);
  const d12Median = median(twelves);
  d12QueryForMean.innerText = d12Mean;
  d12QueryForMediam.innerText = d12Median;

}
const d20ClickHandlerFunc = function() {
  let randomD20numOutput = getRandomNumber(20);
  twenties.push(randomD20numOutput);
  idRollQueryForImgD20.src = `./images/numbers/${randomD20numOutput}.png`
  const d20Mean = mean(twenties);
  const d20Median = median(twenties);
  d20QueryForMean.innerText = d20Mean;
  d20QueryForMediam.innerText = d20Median;
}

const theOneToResetEmAllFunc = function() {
  d6QueryForMean.innerText = '';
  d6QueryForMediam.innerText = '';
  doubleD6QueryForMean.innerText = '';
  doubleD6QueryForMediam.innerText = '';
  d12QueryForMean.innerText = '';
  d12QueryForMediam.innerText = '';
  d20QueryForMean.innerText = '';
  d20QueryForMediam.innerText = '';
  sixes.splice(0);//can use while(sixes.length >0) { sixes.pop()} or sixes.length = 0;
  doubleSixes.splice(0);
  twelves.splice(0);
  twenties.splice(0);
  idRollQueryForImgD6.src = './images/start/d6.png';
  idRollQueryForImgDoubleD6one.src = './images/start/d6.png';
  idRollQueryForImgDoubleD6two.src = './images/start/d6.png';
  idRollQueryForImgD12.src = './images/start/d12.jpeg';
  idRollQueryForImgD20.src = './images/start/d20.jpg';

}
/*******************
 * EVENT LISTENERS *
 *******************/
idRollQueryForImgD6.addEventListener('click', d6ClickHandlerFunc);
idRollQueryForImgDoubleD6one.addEventListener('click', doubleD6ClickHandlerFunc);
idRollQueryForImgDoubleD6two.addEventListener('click', doubleD6ClickHandlerFunc);
idRollQueryForImgD12.addEventListener('click', d12ClickHandlerFunc);
idRollQueryForImgD20.addEventListener('click', d20ClickHandlerFunc);
theOneToResetEmAllButton.addEventListener('click', theOneToResetEmAllFunc);





