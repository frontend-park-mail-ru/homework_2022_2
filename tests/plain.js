'use strict';

QUnit.module('Тестируем функцию plain', function () {
	QUnit.test('Работает с единственным элементом', function (assert) {
		assert.deepEqual(plain([]), [], 'Работает с пустым массивом');
		assert.deepEqual(plain([42]), [42], 'Работает с массивом из одного элемента');
		assert.deepEqual(plain([1, 2, 3, 4]), [1, 2, 3, 4], 'Сохраняет порядок элементов');
	});

	QUnit.test('Работает с единственным массивом', function (assert) {
		assert.deepEqual(plain([[]]), []);
		assert.deepEqual(plain([[42]]), [42]);
		assert.deepEqual(plain([[1, 2, 3, 4]]), [1, 2, 3, 4]);
	});

	QUnit.test('Работает со смешанными значениями', function (assert) {
		assert.deepEqual(plain([[], 42]), [42]);
		assert.deepEqual(plain([[42], 0]), [42, 0]);
		assert.deepEqual(plain([[1, 2, 3, 4], 5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
	});

	QUnit.test('Работает с несколькими массивами', function (assert) {
		assert.deepEqual(plain([[], []]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([[42], [42]]), [42, 42]);
		assert.deepEqual(plain([[42, 42], [42]]), [42, 42, 42]);
		assert.deepEqual(plain([[1], [2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
	});

	QUnit.test('Работает с вложенными массивами', function (assert) {
		assert.deepEqual(plain([[], [[], [], []]]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([[42], [[42], [], [42]], [42]]), [42, 42, 42, 42]);
		assert.deepEqual(plain([[42, 42], [42, [42, [42, 42], 42]]]), [42, 42, 42, 42, 42, 42, 42]);
		assert.deepEqual(plain([[1], [2], [3], [4, 5, [6, 7, 8, [9]], 10], 11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
	});

	QUnit.test('Работает с элементами разных типов', function (assert) {
		assert.deepEqual(plain([['abcde'], [['f'], [null, false], [NaN, NaN], NaN], -Infinity]), ['abcde', 'f', null, false, NaN, NaN, NaN, -Infinity]);
	});

	// Мои тесты

	QUnit.test('№1 Работает с undefined NaN null', function (assert) {
		assert.deepEqual(plain([null, NaN, undefined]), [null, NaN, undefined]);
		assert.deepEqual(plain([[null, NaN], [undefined, null]]), [null, NaN, undefined, null]);
	});

	QUnit.test('№2 Работает с объектами', function (assert) {
		let obj1 = {};
		let obj2 = { '#2': 1 };
		let obj3 = { '#3': null };
		let obj4 = { '#4': NaN };
		assert.deepEqual(plain([[obj1, obj2], obj3, [obj4, obj4]]), [obj1, obj2, obj3, obj4, obj4]);
	});

	QUnit.test('№3 Работает с невалидными данными', function (assert) {
		const err = new TypeError('Invalid input data');
		assert.throws(() => { plain(NaN); }, err);
		assert.throws(() => { plain(null); }, err);
		assert.throws(() => { plain(undefined); }, err);
		assert.throws(() => { plain('str'); }, err);
		assert.throws(() => { plain(123); }, err);
		assert.throws(() => { plain({}); }, err);
	});
});
