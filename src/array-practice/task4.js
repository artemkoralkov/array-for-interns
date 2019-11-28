/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */
function union(arr1, arr2) {
  const result = [];
  arr1 = arr1.concat(arr2);
  for (const val of arr1) {
    if (!result.includes(val)) {
      result.push(val);
    }
  }
  return result;
}
export { union };
