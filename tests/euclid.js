'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
		assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
	});

	QUnit.test('Функция должна правильно работать со строковым представлением чисел', function (assert) {
		assert.strictEqual(euclid('1'), 1, 'euclid(\'1\') === 1');
		assert.strictEqual(euclid('2 '), 2, 'euclid(\'2\') === 2');
		assert.strictEqual(euclid('2', '14 ', '16'), 2, 'euclid(\'2\', \'14\', \'16\') === 2');
		assert.strictEqual(euclid(' 7', '14', '21'), 7, 'euclid(\'7\', \'14\', \'21\') === 7');
	});

	QUnit.test('Функция должна выбрасывать исключение при передачи не чисел', function (assert) {
		assert.throws(function () {
			euclid('f')
		}, TypeError, 'euclid(\'f\') throw TypeError');
		assert.throws(function () {
			euclid(...'abrakadabra')
		}, TypeError, 'euclid(...\'abrakadabra\') throw TypeError');
	});

	QUnit.test('Функция должна выбрасывать исключение при передачи ненатуральных чисел', function (assert) {
		assert.throws(function () {
			euclid('1.2')
		}, RangeError, 'euclid(\'1.2\') throw RangeError');
		assert.throws(function () {
			euclid(false, '3.14')
		}, RangeError, 'euclid(\'false\', \'3.14\') throw RangeError');
		assert.throws(function () {
			euclid('-1')
		}, RangeError, 'euclid(\'-1\') throw RangeError');
		assert.throws(function () {
			euclid('0', '5')
		}, RangeError, 'euclid(\'0\', \'5\') throw RangeError');
	});
});
