const functions = require('./functions.js');
const assert = require('assert');

it('Проверка пустой почты', () => {
    assert.equal(functions.validateEmail(""), false);
});

it('Тестирование существующей почты 1', () => {
    assert.equal(functions.validateEmail("igorlov2604@gmail.com"), true);
});

it('Тестирование существующей почты 2', () => {
    assert.equal(functions.validateEmail("igorlov2604@mail.ru"), true);
});

it('Тестирование неверной почты 1', () => {
    assert.equal(functions.validateEmail("igorlov2604#gmail.com"), false);
});

it('Тестирование неверной почты 2', () => {
    assert.equal(functions.validateEmail("igorlov2604@.com"), false);
});

it('Тестирование неверной почты 3', () => {
    assert.equal(functions.validateEmail("igorlov2604@gmail."), false);
});

it('Тестирование неверной почты 4', () => {
    assert.equal(functions.validateEmail("igorlov2604@."), false);
});

it('Тестирование неверной почты 5', () => {
    assert.equal(functions.validateEmail("@."), false);
});

it('Тестирование пустого номера', () => {
    assert.equal(functions.validatePhone(""), false);
});

it('Тестирование существующего номера 1', () => {
    assert.equal(functions.validatePhone("+79523096126"), true);
});

it('Тестирование существующего номера 2', () => {
    assert.equal(functions.validatePhone("+7 952 309 61 26"), true);
});

it('Тестирование существующего номера 3', () => {
    assert.equal(functions.validatePhone("+7-952-309-61-26"), true);
});

it('Тестирование существующего номера 4', () => {
    assert.equal(functions.validatePhone("+7 (952)-309-61-26"), true);
});

it('Тестирование существующего номера 5', () => {
    assert.equal(functions.validatePhone("8 (952)-309-61-26"), true);
});

it('Тестирование несуществующего номера 1', () => {
    assert.equal(functions.validatePhone("+7 (952)-309-61-262"), false);
});

it('Тестирование несуществующего номера 2', () => {
    assert.equal(functions.validatePhone("+7 ()-309-61-26"), false);
});

it('Тестирование несуществующего номера 3', () => {
    assert.equal(functions.validatePhone("+7 (952)-309-61-sim"), false);
})




