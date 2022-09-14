'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

	QUnit.test('Ёлочек отрицательной высоты не бывает', function (assert) {
		assert.strictEqual(tree(-4), null);
		assert.strictEqual(tree('-4'), null);
	});

	QUnit.test('Высота ёлочки может быть только числовым значением', function (assert) {
		assert.throws(() => tree('высокая'), TypeError('Очень странная высота для ёлочки'));
	});

	QUnit.test('Высота ёлочки должна быть целым числом', function (assert) {
		assert.throws(() => tree(6.5), TypeError('Очень странная высота для ёлочки'));
	})

	QUnit.test('Высота ёлочки не может равняться бесконечности', function (assert) {
		assert.throws(() => tree(Infinity), TypeError('Очень странная высота для ёлочки'));
	})

	QUnit.test('Высота ёлочки не может быть пустой', function (assert) {
		assert.throws(() => tree(NaN), TypeError('Очень странная высота для ёлочки'));
		assert.throws(() => tree(null), TypeError('Очень странная высота для ёлочки'));
	});


});
