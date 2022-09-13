'use strict';

QUnit.module('Тестируем функцию roman', function () {
    QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
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

    QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
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

    QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
        assert.strictEqual(roman('1904'), 'MCMIV');
        assert.strictEqual(roman('1990'), 'MCMXC');
        assert.strictEqual(roman('2017'), 'MMXVII');
    });

QUnit.module('Custom tests for roman', function () {

        QUnit.test('roman(): arabic -> roman', function (assert) {
            assert.strictEqual(roman(494), 'CDXCIV');
            assert.strictEqual(roman(' 949 '), 'CMXLIX');
            assert.strictEqual(roman(1), 'I');
            assert.strictEqual(roman(3999), 'MMMCMXCIX');
        });
});

QUnit.module('Checkin input is correctness', function () {

        QUnit.test('isArabic()', function (assert) {
            assert.deepEqual(isArabic(666), true);
            assert.deepEqual(isArabic(' 505 '), true);
            assert.deepEqual(isArabic(' 949!'), false);
            assert.deepEqual(isArabic(' 94l9'), false);
            assert.deepEqual(isArabic(null), false);
            assert.deepEqual(isArabic(undefined), false);
        });

        QUnit.test('isRoman()', function (assert) {
            assert.deepEqual(isRoman(494), false);
            assert.deepEqual(isRoman('989'), false);
            assert.deepEqual(isRoman('MCmXc'), true);
            assert.deepEqual(isRoman('MC!mXc'), false);
            assert.deepEqual(isRoman((new String('IV'))), true);
            assert.deepEqual(isRoman((String('Vi'))), true);
            assert.deepEqual(isRoman(null), false);
            assert.deepEqual(isRoman(undefined), false);
        });

        QUnit.test('roman() throws', function (assert) {
            assert.throws(() => roman(' 9499'));
            assert.throws(() => roman('-1'));
            assert.throws(() => roman('0'));
            assert.throws(() => roman('23.435'));
            assert.throws(() => roman(Infinity));
            assert.throws(() => roman(NaN));
            assert.throws(() => roman(null));
            assert.throws(() => roman(undefined));
        });
});
