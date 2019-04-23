/**
 * 
 * < NOTES >
 * number [operation] number [operation] number [operation] number
 * 12 [addition] 2 [multiply] 4 [subtract] 2
 * while input...
 * 1. while (number) {
 *    let tempNum = make each digit subsequent
 * }
 * 2. if (operator){
 *     num1 = tempNum
 *     num2 = tempNum
 *     num^n = tempNum
 *    [num1, [operator], tempNum]     
 *    [num1, [operator], num2, [operator], num3, [operator], num^n]     
 * 3. if ([equals]):
 *    1. parse array looking operators by order:
 *       ex: opArr = [12, +, 2, *, 4, - 2]
 *        if(*){
 *            i = index of *
 *            let prod = [opArr[i-1], opArr[i+1]]  
 *            let firstOp = multiply(prod);
 *     2. cut i, i-1, i+1 out of original array,
 *     3. place prod at the index of the "2"
 *        ex: newArr = [12, +, 8, -, 2];
 *     4. with "newArr", continue on looking for "*"
 *     5. perform steps 1 - 4 with each ordered operation
 *        
 * }
 */

// the Quokka trial won't import
// import * as from './calculations';


export const add = (...nums) => {
  return nums.reduce((acc, curr)=>{
    return acc + curr;
  })
}

export const subtract = (...nums) => {
  return nums.reduce((acc, curr)=>{
    return acc - curr;
  });
}

export const divide = (...nums) => {
  return nums.reduce((acc, curr)=>{
    return acc / curr;
  })
}

export const multiply = (...nums) => {
  return nums.reduce((acc, curr)=>{
    return acc * curr;
  })
}

const OPS = [
  {
    fxn: multiply,
    operator: '*'
  },
  {
    fxn: divide,
    operator: '/'
  },
  {
    fxn: add,
    operator: '+'
  },
  {
    fxn: subtract,
    operator: '-'
  }
]

export const findCalculation = (arr,OPS) => {
  let index = 0;
   
    if(arr.length < 1) return; 
    let tempArr;
    tempArr = arr.slice();  
    
    console.log(tempArr);
    console.log(index);
    while(tempArr.indexOf(OPS[index].operator) != -1 && index < OPS.length){
      createAnswerArray(tempArr, OPS[index]);
      console.log(createAnswerArray(tempArr, OPS[index]));
      console.log(tempArr.indexOf(OPS[index].operator));
    }
    index++;
    console.log(OPS[index]);
    
    let answer = tempArr[0];
    console.log(answer);
 }

 const iterateOPS = () => {

 }

/**
 * < NOTES >
 * 1. find index in OGarr,
 * 2. make subarr of nums
 * 3. send subarr to calc function,
 * 4. splice OGarr with product,
 * 5. until "null", send new OGarr back to "step 1" and repeat "steps 1 -5" 
 * 6. when "null" returned from "current ordered operation function", move onto next ordered operation function
 */

 const createAnswerArray = (tempArr, op) => {
   return findOperations(tempArr, op);
  }
  
  const findOperations = (arr, op) => {
    console.log(op.operator);
    return makeCalculation(arr.indexOf(op.operator), arr, op);
 }

const makeCalculation = (i, arr, op) => {
  let temp = [];
  console.log(op.fxn);
  let answer = op.fxn(arr[i-1], arr[i+1]) ;
  console.log(answer);
  return carveOutNewArr(i,arr,answer);
}

// 
const carveOutNewArr = (i, arr,answer) => {
  console.log(i);
  return arr.splice(i-1,3, answer);
}

const buildNewArr = (arr, newElem) => {

}

// SHOULD BE: '6'
console.log(findCalculation([2,'*',4, '-', 1, '*', 2], OPS));
// console.log(2*4-1*2);
