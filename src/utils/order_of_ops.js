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