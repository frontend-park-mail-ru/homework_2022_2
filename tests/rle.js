'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle мои тесты', function (assert) {
		assert.strictEqual(rle('A'), 'A');
		assert.strictEqual(rle('ABCABCABC'), 'ABCABCABC');
		assert.strictEqual(rle('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ'), 'Z36');
		assert.strictEqual(rle(''), '');
		assert.throws(() => rle(' '), Error, 'Incorrect string');
		assert.throws(() => rle('+'), Error, 'Incorrect string');
		assert.throws(() => rle('AAAFSD3W'), Error, 'Incorrect string');
		assert.throws(() => rle('a'), Error, 'Incorrect string');
		assert.throws(() => rle(null), TypeError, 'Incorrect object');
		assert.throws(() => rle(Infinity), TypeError, 'Incorrect object');
		assert.throws(() => rle(NaN), TypeError, 'Incorrect object');
		assert.throws(() => rle([1,2,5,2]), TypeError, 'Incorrect object');
	});
});
