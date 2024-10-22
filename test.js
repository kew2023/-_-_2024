const functions = require('./functions.js');
const assert = require('assert');

describe('Email Validation', () => {
    it('should return false for empty email', () => {
        const email = "";
        const result = functions.validateEmail(email);
        assert.equal(result, false);
    });

    it('should return true for valid email 1', () => {
        const email = "igorlov2604@gmail.com";
        const result = functions.validateEmail(email);
        assert.equal(result, true);
    });

    it('should return true for valid email 2', () => {
        const email = "igorlov2604@mail.ru";
        const result = functions.validateEmail(email);
        assert.equal(result, true);
    });

    it('should return false for invalid email 1', () => {
        const email = "igorlov2604#gmail.com";
        const result = functions.validateEmail(email);
        assert.equal(result, false);
    });

    it('should return false for invalid email 2', () => {
        const email = "igorlov2604@.com";
        const result = functions.validateEmail(email);
        assert.equal(result, false);
    });

    it('should return false for invalid email 3', () => {
        const email = "igorlov2604@gmail.";
        const result = functions.validateEmail(email);
        assert.equal(result, false);
    });

    it('should return false for invalid email 4', () => {
        const email = "igorlov2604@.";
        const result = functions.validateEmail(email);
        assert.equal(result, false);
    });

    it('should return false for invalid email 5', () => {
        const email = "@.";
        const result = functions.validateEmail(email);
        assert.equal(result, false);
    });
});

describe('Phone Validation', () => {
    it('should return false for empty phone number', () => {
        const phone = "";
        const result = functions.validatePhone(phone);
        assert.equal(result, false);
    });

    it('should return true for valid phone number 1', () => {
        const phone = "+79523096126";
        const result = functions.validatePhone(phone);
        assert.equal(result, true);
    });

    it('should return true for valid phone number 2', () => {
        const phone = "+7 952 309 61 26";
        const result = functions.validatePhone(phone);
        assert.equal(result, true);
    });

    it('should return true for valid phone number 3', () => {
        const phone = "+7-952-309-61-26";
        const result = functions.validatePhone(phone);
        assert.equal(result, true);
    });

    it('should return true for valid phone number 4', () => {
        const phone = "+7 (952)-309-61-26";
        const result = functions.validatePhone(phone);
        assert.equal(result, true);
    });

    it('should return true for valid phone number 5', () => {
        const phone = "8 (952)-309-61-26";
        const result = functions.validatePhone(phone);
        assert.equal(result, true);
    });

    it('should return false for invalid phone number 1', () => {
        const phone = "+7 (952)-309-61-262";
        const result = functions.validatePhone(phone);
        assert.equal(result, false);
    });

    it('should return false for invalid phone number 2', () => {
        const phone = "+7 ()-309-61-26";
        const result = functions.validatePhone(phone);
        assert.equal(result, false);
    });

    it('should return false for invalid phone number 3', () => {
        const phone = "+7 (952)-309-61-sim";
        const result = functions.validatePhone(phone);
        assert.equal(result, false);
    });
});
