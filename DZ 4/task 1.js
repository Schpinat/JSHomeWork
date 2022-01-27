/* Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {}); */

const arr = [4,6,8];


function print(x) {
console.log(x)
}

function forEach(arr, print) {
    if (!Array.isArray(arr)) {
    throw new Error("Неверный тип аргумента") }
else if (!print instanceof Function) {
    throw new Error("Неверный тип аргумента")
}
else {
    for (i of arr) {
        print(i)
}
}
}

forEach(arr, print);