'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);

		const nested3 = {
			deep: {
				"foo": {
					"aaa": 1,
					"bbb": 2,
					"ccc": 3
				}
			}
		};

		const plain3 = {
			'deep.foo.aaa': 1,
			'deep.foo.bbb': 2,
			'deep.foo.ccc': 3
		};

		assert.deepEqual(plainify(nested3), plain3);

		const nested4 = {
			deep: {
				asd: {
					fgh: {
						jkl: {
							qwe: undefined,
							1: {}
						}
					}
				}
			}
		};

		const plain4 = {
			'deep.asd.fgh.jkl.qwe': undefined,
			'deep.asd.fgh.jkl.1': undefined
		};

		assert.deepEqual(plainify(nested4), plain4);
	});

	QUnit.test('plainify выдает ошибку, если входные данные некорректного типа', function (assert) {
		
		assert.throws(
			() => {plainify(5);},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify('');},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify("as",'df');},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify(Infinity);},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify(undefined);},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify(NaN);},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify(NaN, undefined, Infinity);},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify(function func(){});},
			new TypeError('Invalid data was passed to the function')
		);

		assert.throws(
			() => {plainify(new String("Hello"));},
			new TypeError('Invalid data was passed to the function')
		);
	});

	QUnit.test('plainify выдает ошибку, если на вход подается null', function (assert) {
		
		assert.throws(
			() => {plainify(null);},
			new TypeError('A null argument was passed to the function')
		);

	});

	QUnit.test('plainify выдает ошибку, если на вход подается пустой объект', function (assert) {
		
		assert.throws(
			() => {plainify({});},
			new TypeError('Function argument must not be an empty object')
		);

		assert.throws(
			() => {plainify([]);},
			new TypeError('Function argument must not be an empty object')
		);

	});
});
