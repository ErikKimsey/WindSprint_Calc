

/**
 * Calculations.js
 * Provides the functions for fundamental calculations of app.
 * Considering "edge cases", specifically the case of multiple of the same operation occurring subsequently, I'm spreading the args and returning a value produced by the 'reduce' method on the args.
 */

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

export const equals = () => {}

console.log(add(3,4,7));
console.log(subtract(5,5,5,5,5,5,5,5,5))
console.log(divide(20,5,2))
console.log(multiply(3,4,2,2))