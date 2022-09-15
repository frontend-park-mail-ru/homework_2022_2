'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', (assert) => {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iiii'), 4);
		assert.strictEqual(roman('CM'), 900);

		assert.strictEqual(roman('MCMIV'), 1904);
		assert.strictEqual(roman('MCMXC'), 1990);
		assert.strictEqual(roman('mmxvii'), 2017);
	});

	QUnit.test('roman правильно переводит из десятичной системы счисления', (assert) => {
		assert.strictEqual(roman(1), 'I');
		assert.strictEqual(roman(5), 'V');
		assert.strictEqual(roman(1000), 'M');
		assert.strictEqual(roman(50), 'L');
		assert.strictEqual(roman(500), 'D');

		assert.strictEqual(roman(4), 'IV');
		assert.strictEqual(roman(900), 'CM');

		assert.strictEqual(roman(1904), 'MCMIV');
		assert.strictEqual(roman(1990), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
	});

	QUnit.test('roman правильно определяет, что было передано на вход', (assert) => {
		assert.strictEqual(roman('1904'), 'MCMIV');
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman('2017'), 'MMXVII');
		assert.strictEqual(roman('10000'), 'MMMMMMMMMM');
		assert.strictEqual(roman('12345'), 'MMMMMMMMMMMMCCCXLV');
	});
	
	QUnit.test('roman должен вернуть TypeError, если передано некорректное представление в римской системе счисления', (assert) => {
		assert.throws(function() {
			roman('ZXCVBN');
		}, TypeError('Incorrect input data. Expected string of chars: "I", "V", "X", "L", "C", "D", "M" of upper or lower case.'));
		assert.throws(function() {
			roman('QWERTY');
		}, TypeError('Incorrect input data. Expected string of chars: "I", "V", "X", "L", "C", "D", "M" of upper or lower case.'));
	});
	
	QUnit.test('roman должен вернуть TypeError, если передано отрицательное число, или 0 или число с плавающей точкой', (assert) => {
		assert.throws(function() {
			roman(0);
		}, TypeError('Incorrect input data. Expected integer > 0.'));
		assert.throws(function() {
			roman('0');
		}, TypeError('Incorrect input data. Expected integer > 0.'));
		
		assert.throws(function() {
			roman(-777);
		}, TypeError('Incorrect input data. Expected integer > 0.'));
		assert.throws(function() {
			roman('-777');
		}, TypeError('Incorrect input data. Expected integer > 0.'));
		
		assert.throws(function() {
			roman(-333);
		}, TypeError('Incorrect input data. Expected integer > 0.'));
		assert.throws(function() {
			roman('-333');
		}, TypeError('Incorrect input data. Expected integer > 0.'));
		
		assert.throws(function() {
			roman(-1.678);
		}, TypeError('Incorrect input data. Expected integer or string.'));
		assert.throws(function() {
			roman('-1.678');
		}, TypeError('Incorrect input data. Expected string of chars: "I", "V", "X", "L", "C", "D", "M" of upper or lower case.'));
		
		
		assert.throws(function() {
			roman(1.678);
		}, TypeError('Incorrect input data. Expected integer or string.'));
		assert.throws(function() {
			roman('1.678');
		}, TypeError('Incorrect input data. Expected string of chars: "I", "V", "X", "L", "C", "D", "M" of upper or lower case.'));
	});
	
	QUnit.test('roman должен вернуть TypeError, если переданы неверные типы данных', (assert) => {
		assert.throws(function() {
			roman(['MM', 'IVV', 'C']);
		}, TypeError('Incorrect input data. Expected integer or string.'));
		assert.throws(function() {
			roman(true);
		}, TypeError('Incorrect input data. Expected integer or string.'));
		assert.throws(function() {
			roman(null);
		}, TypeError('Incorrect input data. Expected integer or string.'));
		assert.throws(function() {
			roman(NaN);
		}, TypeError('Incorrect input data. Expected integer or string.'));
		assert.throws(function() {
			roman(undefined);
		}, TypeError('Incorrect input data. Expected integer or string.'));
	});
});
