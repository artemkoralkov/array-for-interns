/**
 * Реализовать функцию membersOnActiveMeetups в этом файле, и экспортировать ее.
 *
 * Функция принимает массив meetups,
 * и возвращает суммарное количество человек, находящихся на активных митапах
 *
 * Пример вызова с нижним набором данных
 * membersOnActiveMeetups(meetups); // 1500
 */

// Раскомментировать нижнее, при начале реализации
function membersOnActiveMeetups(arr) {
  return arr.reduce((accum, value) => {
    if (value.isActive === true) {
      accum += value.members;
    }
    return accum;
  }, 0);
}
export { membersOnActiveMeetups };