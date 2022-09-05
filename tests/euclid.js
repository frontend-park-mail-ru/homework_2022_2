'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД для пары натуральных чисел', function (assert) {
		assert.strictEqual(euclid(14, 21), 7, 'euclid(14,21) === 7');
		assert.strictEqual(euclid(11, 33), 11, 'euclid(11, 33) === 11');
		assert.strictEqual(euclid(33, 15), 3, 'euclid(33, 15) === 3');
		assert.strictEqual(euclid(22, 33), 11, 'euclid(33, 22) === 11');
		assert.strictEqual(euclid(33, 33), 33, 'euclid(33, 33) === 33');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(84, 14, 21), 7, 'euclid(84, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1, 'euclid(1, 1, 1, 1, 1, 1, 1) === 1');
		assert.strictEqual(euclid(21, 84, 14, 15), 1, 'euclid(21, 84, 14, 15) === 1');
		assert.strictEqual(euclid(2, 44, 11, 33), 1, 'euclid(2, 44, 11, 33) === 1');
		assert.strictEqual(euclid(2, 44, 66, 144), 2, 'euclid(2, 44, 66, 144) === 2');

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test('Функция выбрасывает ошибку в случае вызова без агрументов', function (assert) {
		assert.throws(
			function () { euclid(); },
			function (err) { return err.toString() === 'SyntaxError: Function <euclid> was called without arguments' },
			'Error thrown'
		);
	});

	QUnit.test('Функция выбрасывает ошибку в случае вызова с некорретными типами данных', function (assert) {
		assert.throws(
			function () { euclid("12", "42", "24"); },
			function (err) { return err.toString() === 'TypeError: Invalid data were passed to the function <euclid>' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid("0"); },
			function (err) { return err.toString() === 'TypeError: Invalid data were passed to the function <euclid>' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid("www", "qwerty", "abc"); },
			function (err) { return err.toString() === 'TypeError: Invalid data were passed to the function <euclid>' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid(""); },
			function (err) { return err.toString() === 'TypeError: Invalid data were passed to the function <euclid>' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid(2, 4, 8, "", 24); },
			function (err) { return err.toString() === 'TypeError: Invalid data were passed to the function <euclid>' },
			'Error thrown'
		);
	});

	QUnit.test('Функция выбрасывает ошибку в случае вызова с ненатуральными числами', function (assert) {
		assert.throws(
			function () { euclid(5, 6, 9, -1); },
			function (err) { return err.toString() === 'TypeError: Function <euclid> works only with natural numbers' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid(5, 6, 9, 0, 23); },
			function (err) { return err.toString() === 'TypeError: Function <euclid> works only with natural numbers' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid(5, 6, 9, -0, 23); },
			function (err) { return err.toString() === 'TypeError: Function <euclid> works only with natural numbers' },
			'Error thrown'
		);

		assert.throws(
			function () { euclid(5, 6, 9.34); },
			function (err) { return err.toString() === 'TypeError: Function <euclid> works only with natural numbers' },
			'Error thrown'
		);
	});
});
