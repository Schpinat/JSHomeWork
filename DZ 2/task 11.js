/* 
Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. 
С помощью цикла `for` и оператора `if` выведите на экран столбец 
тех элементов массива, которые больше 3-х, но меньше 10.

**Внимание**!

- Не разрашается использовать специальные методы массивов. */
var arr = [2, 5, 9, 15, 0, 4];
var new_arr;
for (i=0; i<arr.length; i++) {
if (arr[i] > 3 && arr[i] < 10) {
    new_arr =arr[i];
    console.log(new_arr)
}

}