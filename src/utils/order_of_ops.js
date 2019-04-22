/**
 * 
 * 
 * number [operation] number [operation] number [operation] number
 * number [addition] number [multiply] number [subtract] number
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

import * as calcs from './calculations';

const OPS = [
  {
    fxn: calcs.multiply,
    operator: '*'
  },
  {
    fxn: calcs.divide,
    operator: '/'
  },
  {
    fxn: calcs.add,
    operator: '+'
  },
  {
    fxn: calcs.subtract,
    operator: '-'
  }
]

 export const findCalculation = (arr,OPS) => {
    if(arr.length <= 0) return; 
    let tempArr = arr.splice();  
    for (let i = 0; i < OPS.length; i++) {
      let nuArr = createAnswerArray(tempArr, OPS[i]);
      tempArr = nuArr.splice();
    }
    let answer = tempArr[0];
    return answer;
 }

/**
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

    while (arr.indexOf(op) != -1){
      makeCalcArr(arr.indexOf(op), arr, op);
    }
    
 }

const makeCalcArr = (i, arr) => {

}

const carveOutNewArr = (arr) => {
  let 
  let nuArr = arr.splice();
  nuArr.slice()
 }

const buildNewArr = (arr, newElem) => {

}