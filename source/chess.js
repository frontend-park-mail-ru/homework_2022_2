'use strict';

/**
 * Функция, рисующая квадратную ASCII шахматную доску
 * @param {number} n - размер шахматной доски
 * @returns {string} | {null}
 * @throws исключения в случае невалидного аргумента: пустого, не являющегося натуральным числом, 
 * бесконечного
 * @example
 * chess(4) return '* * 
 *                   * *
 *                  * *
 *                   * *'
 */ 
 const chess = (n) => {
  const nNum = Number(n);
  if (!nNum || !isFinite(nNum)) {
    throw new TypeError('Некорректный входной параметр функции chess');
  }

  if (!Number.isInteger(nNum)) {
    throw new TypeError('Входной параметр не является целым числом');
  }

  if (nNum < 1 || nNum > 100) {
    throw new RangeError('Функция chess принимает на вход натуральные числа от 2 до 100');
  }

  if (nNum === 1) {
    return null;
  }

  let result = '';
  
  for (let i = 0; i < nNum; i++) {
    result += "* ".repeat(nNum / 2 + 1).substring(i % 2, nNum + i % 2); 
    result += '\n';
  }

  return result;
}
