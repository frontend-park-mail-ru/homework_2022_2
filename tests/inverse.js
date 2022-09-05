'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([1]), [1]);
		assert.deepEqual(inverse(['a']), ['a']);
		assert.deepEqual(inverse([null]), [null]);
		assert.deepEqual(inverse([false]), [false]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
		assert.deepEqual(inverse([null, false, 0, Infinity, '']), ['', Infinity, 0, false, null]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse([1, 2, 5], 1), [1, 5, 2]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5, 6, 7, 8], 15), [1, 2, 3, 4, 5, 6, 7, 8]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse([1, 2, 5], -1), [2, 1, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5, 6, 7, 8], -15), [1, 2, 3, 4, 5, 6, 7, 8]);
	});

	QUnit.test('Если второй аргумент не число функция возвращает "Wrong arguments"', function (assert) {
		assert.throws(function () {
			inverse([1, 2, 3, 4, 5], null)
		},
		new TypeError("wrong arguments")
		);
		assert.throws(function () {
			inverse([1, 2, 3, 4, 5], NaN)
		},
		new TypeError("wrong arguments")
		);
		assert.throws(function () {
			inverse([1, 2, 3, 4, 5], true)
		},
		new TypeError("wrong arguments")
		);
	});

	QUnit.test('Если второй аргумент не целое число функция возвращает "Wrong arguments"', function (assert) {
		assert.throws(function () {
			inverse([1, 2, 3, 4, 5], 5.4)
		},
		new TypeError("wrong arguments")
		);
		assert.throws(function () {
			inverse([1, 2, 3, 4, 5], 0.1)
		},
		new TypeError("wrong arguments")
		);
	});
	
	QUnit.test('Если первый аргумент не массив функция возвращает "Wrong arguments"', function (assert) {
		assert.throws(function () {
			inverse({})
		},
		new TypeError("wrong arguments")
		);
		assert.throws(function () {
			inverse(1)
		},
		new TypeError("wrong arguments")
		);
		assert.throws(function () {
			inverse(NaN)
		},
		new TypeError("wrong arguments")
		);
	});
});
