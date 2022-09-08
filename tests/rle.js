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
		assert.strictEqual(rle('+'), 'Incorrect string');
		assert.strictEqual(rle('AAAFSD3W'), 'Incorrect string');
		assert.strictEqual(rle('a'), 'Incorrect string');
		assert.strictEqual(rle(null), 'Incorrect object');
	});
});
