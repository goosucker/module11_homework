export function getPercent(percent, number) {
  let result;
  if (!isNaN(percent) && !isNaN(number)) {
    if (percent > 100 || percent < 0) {
      return result = 'Введите значение процента от 0 до 100';
    } else {
      result = number / 100 * percent;
      return result;
    }
  } else {
    return result = 'Вы ввели не числа!';
  }
}
