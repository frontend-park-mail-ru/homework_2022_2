'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

	QUnit.test('Оставляет один пробел, остальные удаляет. Если нет флага, то удаляет все повторяющиеся символы', function (assert) {
		assert.strictEqual(letters('пп рр оо лл дд'), '');
		assert.strictEqual(letters('пп рр оо лл дд', true), 'п ролд');
		assert.strictEqual(letters('пп рр оо лл дд', false), 'прол д');
	});

	QUnit.test('Проверка на строку состояющую из одного символа', function (assert) {
		assert.strictEqual(letters('п'), 'п');
		assert.strictEqual(letters('п', true), 'п');
		assert.strictEqual(letters('п', false), 'п');
		assert.strictEqual(letters('пппппппппппппппп'), '');
		assert.strictEqual(letters('пппппппппппппппп', true), 'п');
		assert.strictEqual(letters('пппппппппппппппп', false), 'п');
	});

	QUnit.test('Проверка на некорректные данные', function (assert) {
		assert.throws(() => letters(2), TypeError("Некорректный тип str"))
		assert.throws(() => letters(new Date()), TypeError("Некорректный тип str"))
		assert.throws(() => letters([1, 2, 3]), TypeError("Некорректный тип str"))
		assert.throws(() => letters(["test"]), TypeError("Некорректный тип str"))
		assert.throws(() => letters("sdf", [1, 2 ,3]), TypeError("Некорректный тип flag"))
		assert.throws(() => letters("sdf", 1), TypeError("Некорректный тип flag"))
	})
});
