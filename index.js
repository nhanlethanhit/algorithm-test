function miniMaxSum (input) {
  const arr = input.trim().split(" ").map(item => +item);
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const indexMax = arr.findIndex(item => item === max);
  const indexMin = arr.findIndex(item => item === min);
  const maxSum = arr.reduce((accumulator, currentValue, currentIndex) =>{
    return currentIndex === indexMin ? accumulator : accumulator + currentValue
  },0);
  const minSum = arr.reduce((accumulator, currentValue, currentIndex) =>{
    return currentIndex === indexMax ? accumulator : accumulator + currentValue
  },0);
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);
  const evenArray = arr.filter(item => item % 2 === 0);
  const oddArray = arr.filter(item => item % 2 != 0);
  console.log(`${minSum} ${maxSum}`)
  console.log(`Total of array: ${sum}`)
  console.log(`Min of array: ${min}`)
  console.log(`Max of array: ${max}`)
  console.log(`Even elements in array: ${evenArray.join(" ")}`)
  console.log(`Odd elements in array: ${oddArray.join(" ")}`) 
}
const input = "1 2 3 4 5";
miniMaxSum(input);