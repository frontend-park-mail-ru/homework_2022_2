'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});

	QUnit.test('Функция работает с большим уровнем вложенности', function (assert) {
		const obj = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: {
				data: "some data",
				question: {
					author: "Oleg",
					name: {
						title: "How JS perfect"
					}
				}
			}
		};

		const obj2 = {
			a: 1,
			b: 22222,
			c: null,
			d: 4,
			e: {
				data: "some data123",
				question: {
					author: "Oleg123",
					name: {
						title: "How JS perfect123"
					}
				}
			}
		};

		const obj3 = {
			fra: 22222,
			da: {
				fra: "some data123",
				fra__: {
					fra____: "Oleg123",
					fra______: {
						fra_______: "How JS perfect123"
					}
				}
			}
		};

		const res = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: {
				data: "some data",
				question: {
					author: "Oleg",
					name: {
						title: "How JS perfect"
					}
				},
			},
			fra: 22222,
			da: {
				fra: "some data123",
				fra__: {
					fra____: "Oleg123",
					fra______: {
						fra_______: "How JS perfect123"
					}
				}
			}
		};

		assert.deepEqual(zip(obj, obj2, obj3), res);
	});

	QUnit.test('Функция выбрасывает ошибку в случае вызова без аргументов', function (assert) {
		assert.throws(
			function () { zip(); },
			function (err) { return err.toString() === 'Error: Function was called without arguments' },
			'Error thrown'
		);
	});

	QUnit.test('Функция выбрасывает ошибку в случае вызова с некорректными типами данных', function (assert) {
		assert.throws(
			function () { zip(12, "str", "24"); },
			function (err) { return err.toString() === 'TypeError: Arguments must be objects - custom data types' },
			'Error thrown'
		);

		assert.throws(
			function () { zip({name: 'age'}, "str", "24"); },
			function (err) { return err.toString() === 'TypeError: Arguments must be objects - custom data types' },
			'Error thrown'
		);
	});
});
