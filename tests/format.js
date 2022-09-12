'use strict';

QUnit.module('Тестируем функцию format', function () {
    QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
        const input = [0, 1, 2, 10, 100, 1000, 10000];

        const expected =
            '    0\n' +
            '    1\n' +
            '    2\n' +
            '   10\n' +
            '  100\n' +
            ' 1000\n' +
            '10000';

        assert.strictEqual(format(input, 1), expected);
    });

    QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
        const input = [0, 1, 2, 10, 100, -100, 1000, 10000, -10000];

        const expected =
            '     0\n' +
            '     1\n' +
            '     2\n' +
            '    10\n' +
            '   100\n' +
            '  -100\n' +
            '  1000\n' +
            ' 10000\n' +
            '-10000';

        assert.strictEqual(format(input, 1), expected);
    });

    QUnit.test('format работает правильно c несколькими колонками', function (assert) {
        const input = [0, 1, 2, 10, 100, -100, 1000, 10000, -10000];

        const expected2 =
            '     0     1\n' +
            '     2    10\n' +
            '   100  -100\n' +
            '  1000 10000\n' +
            '-10000';

        const expected3 =
            '   0     1      2\n' +
            '  10   100   -100\n' +
            '1000 10000 -10000';

        assert.strictEqual(format(input, 2), expected2);
        assert.strictEqual(format(input, 3), expected3);
    });

    QUnit.test('format работает правильно и выкидывает исключения при наличии не числа в массиве', function (assert) {
        const input1 = [0, 1, 2, "str", 100, -100, 1000, 10000];
        assert.throws(() => format(input1, 2), TypeError("its not a numbers"));

        const input2 = [0, 1, 2, [1,2,3,4], 100, -100, 1000, 10000];
        assert.throws(() => format(input2, 2), TypeError("its not a numbers"));

        const input3 = [0, 1, 2, "w11w", 100, -100, 1000, 10000];
        assert.throws(() => format(input3, 2), TypeError("its not a numbers"));

        const input4 = [0, 1, 2, "  10  ", 100, -100, 1000, 10000, -10000];

                const expected =
            '     0     1\n' +
            '     2    10\n' +
            '   100  -100\n' +
            '  1000 10000\n' +
            '-10000';
        assert.strictEqual(format(input4, 2), expected);

        const input5 = [0, 1, 2, "11 1", 100, -100, 1000, 10000];
        assert.throws(() => format(input5, 2), TypeError("its not a numbers"));
    });
});
