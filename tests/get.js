'use strict';

QUnit.module('Тестируем функцию get', function () {
	QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			foo: 'bar',
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, ' .foo '), object.foo);
		assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);

		assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
		assert.deepEqual(get(object, '.deep'), object.deep);
		assert.deepEqual(get(object, '.'), object);
	});

	QUnit.test('get работает правильно c массивами', function (assert) {
		const object = {
			foo: 'bar',
			baz: [ 1, 2, 3 ],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[ 0 ]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[ 0 ]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[ 0 ].foobar);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.foo.baz'), undefined);
		assert.strictEqual(get(object, '.baz.0'), undefined);
		assert.strictEqual(get(object, '.baz.length'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
	});

	QUnit.test('get выбрасывает исключение TypeError, если первый аргумент не Object или null', function (assert) {
		assert.throws(function() {
			get(12, '.baz.length');
		}, new TypeError('Incorrect type of arguments'));
		
		assert.throws(function() {
			get(true, '.baz.length');
		}, new TypeError('Incorrect type of arguments'));
		
		assert.throws(function() {
			get(undefined, '.baz.length');
		}, new TypeError('Incorrect type of arguments'));
		
		assert.throws(function() {
			get(null, '.baz.length');
		}, new TypeError('Incorrect type of arguments'));
	});

	QUnit.test('get выбрасывает исключение TypeError, если второй аргумент не string', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.throws(function() {
			get(object, 53);
		}, new TypeError('Incorrect type of arguments'));

		assert.throws(function() {
			get(object, undefined);
		}, new TypeError('Incorrect type of arguments'));

		assert.throws(function() {
			get(object, false);
		}, new TypeError('Incorrect type of arguments'));
		
		assert.throws(function() {
			get(object, null);
		}, new TypeError('Incorrect type of arguments'));
	});
});

