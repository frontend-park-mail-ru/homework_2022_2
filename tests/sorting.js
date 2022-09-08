'use strict';

QUnit.module('Тестируем функцию sorting', function () {
	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{ prop1: 1 },
			{ prop1: 2 },
			{ prop1: 3 },
			{ prop1: 4 }
		];
		const actual = sorting(initial, []);

		const expected = [
			{ prop1: 1 },
			{ prop1: 2 },
			{ prop1: 3 },
			{ prop1: 4 }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{ prop1: 30 },
			{ prop1: 1000 },
			{ prop1: 4 },
			{ prop1: 200 }
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{ prop1: 4 },
			{ prop1: 30 },
			{ prop1: 200 },
			{ prop1: 1000 }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству pt. 1', function (assert) {
		const initial = [
			{ prop1: '30' },
			{ prop1: '1000' },
			{ prop1: '4' },
			{ prop1: '200' }
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{ prop1: '1000' },
			{ prop1: '200' },
			{ prop1: '30' },
			{ prop1: '4' }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству pt. 2', function (assert) {
		const initial = [
			{ prop1: 'Maria' },
			{ prop1: 'Alexander' },
			{ prop1: 'Sofia' },
			{ prop1: 'Vanya' },
			{ prop1: 'Veronika' },
			{ prop1: 'Andrey' }
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{ prop1: 'Alexander' },
			{ prop1: 'Andrey' },
			{ prop1: 'Maria' },
			{ prop1: 'Sofia' },
			{ prop1: 'Vanya' },
			{ prop1: 'Veronika' }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку pt. 1', function (assert) {
		const initial = [
			{ prop1: 3, id: 1 },
			{ prop1: 3, id: 2 },
			{ prop1: 1, id: 1 },
			{ prop1: 1, id: 2 },
			{ prop1: 4, id: 1 },
			{ prop1: 4, id: 2 },
			{ prop1: 2, id: 1 },
			{ prop1: 2, id: 2 }
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{ prop1: 1, id: 1 },
			{ prop1: 1, id: 2 },
			{ prop1: 2, id: 1 },
			{ prop1: 2, id: 2 },
			{ prop1: 3, id: 1 },
			{ prop1: 3, id: 2 },
			{ prop1: 4, id: 1 },
			{ prop1: 4, id: 2 }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку pt. 2', function (assert) {
		const initial = [
			{ prop1: 3, id: 'Max' },
			{ prop1: 3, id: 'Yana' },
			{ prop1: 1, id: 'Boris' },
			{ prop1: 1, id: 'Avrora' },
			{ prop1: 4, id: 'Viktoria' },
			{ prop1: 4, id: 'Roman' },
			{ prop1: 2, id: 'Tim' },
			{ prop1: 2, id: 'Vasya' }
		];
		const actual = sorting(initial, ['id']);

		const expected = [
			{ prop1: 1, id: 'Avrora' },
			{ prop1: 1, id: 'Boris' },
			{ prop1: 3, id: 'Max' },
			{ prop1: 4, id: 'Roman' },
			{ prop1: 2, id: 'Tim' },
			{ prop1: 2, id: 'Vasya' },
			{ prop1: 4, id: 'Viktoria' },
			{ prop1: 3, id: 'Yana' }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям pt. 1', function (assert) {
		const initial = [
			{ prop1: 3, id: '1' },
			{ prop1: 3, id: '2' },
			{ prop1: 1, id: '1' },
			{ prop1: 1, id: '2' },
			{ prop1: 4, id: '1' },
			{ prop1: 4, id: '2' },
			{ prop1: 2, id: '1' },
			{ prop1: 2, id: '2' }
		];
		const actual = sorting(initial, ['id', 'prop1']);

		const expected = [
			{ prop1: 1, id: '1' },
			{ prop1: 2, id: '1' },
			{ prop1: 3, id: '1' },
			{ prop1: 4, id: '1' },
			{ prop1: 1, id: '2' },
			{ prop1: 2, id: '2' },
			{ prop1: 3, id: '2' },
			{ prop1: 4, id: '2' }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям pt. 2', function (assert) {
		const initial = [
			{ prop1: 3, id: '1', name: "Vanya" },
			{ prop1: 3, id: '2', name: "Valya" },
			{ prop1: 1, id: '1', name: "Vasya" },
			{ prop1: 1, id: '2', name: "Ann" },
			{ prop1: 4, id: '1', name: "Ann" },
			{ prop1: 4, id: '2', name: "Ben" },
			{ prop1: 2, id: '1', name: "Bob" },
			{ prop1: 2, id: '2', name: "Serafima" }
		];
		const actual = sorting(initial, ['name', 'prop1', 'id']);

		const expected = [
			{ prop1: 1, id: '2', name: 'Ann' },
			{ prop1: 4, id: '1', name: 'Ann' },
			{ prop1: 4, id: '2', name: 'Ben' },
			{ prop1: 2, id: '1', name: 'Bob' },
			{ prop1: 2, id: '2', name: 'Serafima' },
			{ prop1: 3, id: '2', name: 'Valya' },
			{ prop1: 3, id: '1', name: 'Vanya' },
			{ prop1: 1, id: '1', name: 'Vasya' }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting возвращает пустой массив в случае записи на входе мусора pt. 1', function (assert) {
		const actual = sorting(NaN, ['name', 'prop1', 'id']);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting возвращает пустой массив в случае записи на входе мусора pt. 2', function (assert) {
		const actual = sorting(NaN, null);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting возвращает пустой массив в случае записи на входе мусора pt. 3', function (assert) {
		let emptyVariable;
		const actual = sorting(emptyVariable, ['name', 'prop1', 'id']);

		const expected = [];

		assert.deepEqual(actual, expected);
	});
});
