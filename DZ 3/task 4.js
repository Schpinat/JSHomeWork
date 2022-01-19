/* Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает
 день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра,
  потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
``` */

function f  (day) {
    if (!(typeof day === "number" )) {
       throw new Error ('Error: parameter type is not a Number')
    } else if (day === 1) {
        console.log('Sunday')
    } else if (day === 2) {
        console.log('Monday')
    } else if (day === 3) {
        console.log('Tuesday')
    } else if (day === 4) {
        console.log('Wednesday')
    } else if (day === 5) {
        console.log('Thursday')
    } else if (day === 6) {
            console.log('Friday')
    } else if (day === 7) {
        console.log('Saturday')
    } else  {
        throw new Error ('Error: parameter should be in the range of 1 to 7')
    }
    }

f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number