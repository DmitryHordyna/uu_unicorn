var changes = '+++-+---++--+-+-++';

function countOfChages(str) {
  let count = 0;

  let specialSymbol = '+';
  const splitStr = str.split('');

  splitStr.forEach(element => {
    if (element === specialSymbol) {
      count++;
    }
  });

  return count;
}

console.log(countOfChages(changes)); //10
