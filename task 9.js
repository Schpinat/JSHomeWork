/* Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */
var arr = [1,2,3,4,5,6];
for (i=arr.length-1; i>=0; i--) {
var desc = arr[i];
console.log(desc);
}