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


let i = 0;
// const OPS = ['*', '/', '+', '-'];
const OPS = {
  multiply : {
    fxn: calcs.multiply,
    operator: '*'
  },
  divide : {
    fxn: calcs.divide,
    operator: '/'
  },
  add : {
    fxn: calcs.add,
    operator: '+'
  },
  subtract : {
    fxn: calcs.subtract,
    operator: '-'
  },
  equauls : {
    fxn: calcs.equals,
    operator: '='
  }
}

 export const findCalculation = (arr,op) => {
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      let temp = [];
      let firstNumIndex = null;
      if(i != 0 && elem === OPS[0]){
        firstNumIndex = i-1;
        temp.push(arr[i-1]);
        temp.push(arr[i+1]);
        firstNumIndex = arr[i-1];
        let answer = calcs.multiply(temp);
        carveOutNewArr(arr, firstNumIndex);
      }
    }
 }

/**
 * 1. find index in OGarr,
 * 2. make subarr of nums
 * 3. send subarr to calc function,
 * 4. splice OGarr with product,
 * 5. until "null", send new OGarr back to "step 1" and repeat "steps 1 -5" 
 * 6. when "null" returned from "current ordered operation function", move onto next ordered operation function
 */

 const findMultiplication = (arr) => {
    if(arr.indexOf('*') === -1){
      return null;
    }

 }

 while (i < arr.length){

 }

 export const carveOutNewArr = (arr, opIndex) => {
  let nuArr = arr.splice();
  nuArr.slice()
 }

 export const buildNewArr = (arr, newElem) => {

 }