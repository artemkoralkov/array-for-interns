/**
 * При запуске приложения через yarn start,
 * этот файл будет исполняться автоматически при его редактировании
 * или редактировании тех файлов, которые вы импортировали в этот файл через import.
 * Браузер сам будет перезагружать страницу, когда происходят сохранения изменений
 * в отслеживаемых файлах.
 *
 * Для удобства работы пока все закомментированно.
 * При работе над задачами раскомментируйте нужные импорты и изменяйте этот файл, как вам удобно.
 *
 * Решение каждой из задач оформляйте в том файле, где задача была описана.
 * Далее, импортируете функцию сюда, и вызывайте ее.
 *
 * Для задач на es-features, ниже, уже подготовлены вызовы функций из задач.
 *
 * Для задач на array-practice импортируйте написанные функции сюда и проверяйте их работу тут.
 */
import any from './array-practice/task1';
import arrayDiff from './array-practice/task2';
import forEachRight from './array-practice/task3';
import union from './array-practice/task4';
import createGenerator from './array-practice/task5';
import transformArrayToNumber from './array-practice/task6';
import take from './array-practice/task7';
import without from './array-practice/task8';
import indexOfAll from './array-practice/task9';
import membersOnActiveMeetups from './array-practice/task10';

console.log('start');
console.log(any([0, 1, 2, 0], x => x >= 2));
console.log(any([0, 0, 1, 0]));
console.log(any([0, 0, 0, 0]));
console.log(arrayDiff([1, 2, 3], [1, 2, 4]));
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4']));
forEachRight([1, 2, 3, 4], val => console.log(val));
console.log(union([5, 1, 2, 3, 3], [4, 3, 2]));
console.log(union([5, 1, 3, 3, 4], [1, 3, 4]));
const generator = createGenerator([1, '6', 3, 2]);
generator.next();
generator.next();
generator.next();
generator.next();
generator.next();
generator.next();
console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc + item));
console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc + item, 10));
console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc * item));
console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc * item, 1));
console.log(transformArrayToNumber([10, 20, 30], (acc, item) => acc - item));
console.log(take([1, 2, 3], 2));
console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 10, 20], 1, 2));
console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
console.log(indexOfAll([1, 2, 3], 4));
const meetups = [
  { name: 'JavaScript', isActive: true, members: 100 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
];
console.log(membersOnActiveMeetups(meetups));
console.log('end');
