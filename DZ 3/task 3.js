/* Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать 
она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
``` */

function f (a,b,c) {
    let result = 0;
   
        if (!(typeof a === 'number')) {
            throw new Error ('Error: all parameters type should be a Number')
        } else if (!(typeof b === 'number')) {
            throw new Error ('Error: all parameters type should be a Number')
        } else if (!(typeof c === 'number')) {
            throw new Error ('Error: all parameters type should be a Number')
        }
        else {
            result = (a-b)/c;
            console.log(result);
        } 
    } 


f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number

