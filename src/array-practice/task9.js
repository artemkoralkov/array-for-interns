/**
 * Реализовать функцию indexOfAll в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - значение
 *
 * Функция возвращает массив со всеми индексами, которые соответствуют переданному значению
 * ([1, 2, 3, 1, 2, 3], 1) -> 1ца в массиве присутствует на 0ой и 3ей позиции. Вернули [0, 3]
 * ([1, 2, 3], 4) -> 4ка в массиве НЕ присутствует. Вернули пустой массив []
 *
 * console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
 * console.log(indexOfAll([1, 2, 3], 4)); -> []
 */
function indexOfAll(arr, val) {
  const newArr = [];
  while (arr.includes(val)) {
    newArr.push(arr.indexOf(val));
    delete arr[arr.indexOf(val)];
  }
  return newArr;
}
export {indexOfAll};
