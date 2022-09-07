'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

    QUnit.test('Шахматной доски отрицательных размеров не бывает', function (assert) {
		assert.strictEqual(chess(-1), null);
		assert.strictEqual(chess('-1'), null);
	});

    QUnit.test('Шахматной доски не целых размеров не бывает', function (assert) {
		assert.throws (
		    function() {
		        chess(3.5)
		    },
		    TypeError('argument is not a natural number')
		);
		assert.throws (
		    function() {
		        chess('3.5')
		    },
		    TypeError('argument is not a natural number')
		);
	});

    QUnit.test('Размер шахматной доски не может быть указан не числом', function (assert) {
        assert.throws (
            function() {
                chess('five')
            },
            TypeError('argument is not a natural number')
        );
	});

    QUnit.test('Размер шахматной доски не может быть бесконечным', function (assert) {
		assert.throws (
		    function() {
		        chess(Infinity)
		    },
		    TypeError('argument is not a natural number')
		);
		assert.throws (
		    function() {
		        chess(-Infinity)
		    },
		    TypeError('argument is not a natural number')
		);
	});

});
