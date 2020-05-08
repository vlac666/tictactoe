import assert from "assert";
import { whosTurn } from "../Game";

describe("whosTurn", () => {
  describe("whosTurn( /* no args */", () => {
    test.todo("We should always check our params");
  });

  describe("whosTurn(Odd Number)", () => {
    it('should return "O" (oohh) when called with 1', () => {
      assert.equal(whosTurn(1), "O");
    });
    it('should return "O" (oohh) when called with 9', () => {
      assert.equal(whosTurn(1), "O");
    });
  });

  describe("whosTurn(Even Number)", () => {
    it('should return "X" when called with 2', () => {
      assert.equal(whosTurn(2), "X");
    });
    it('should return "X" when called with 8', () => {
      assert.equal(whosTurn(8), "X");
    });
  });

  describe("whosTurn(0)", () => {
    it('should return "X" when called with 2', () => {
      assert.equal(whosTurn(2), "X");
    });
  });
});

/**
 * 
    describe('toText() - 1,000,000 to 999,999,999', function () {
        it('should return "one million" when value is 1,000,000', function () {
            assert.equal(numberText.toText(1000000), "one million")
        });
        it('should return "eleven million and one" when value is 11,000,001', function () {
            assert.equal(numberText.toText(11000001), "eleven million and one")
        });
    });
 * 
 * 
 * 
 *     describe('toText() - 1,000 to 999,999', function () {
        it.each`
        numericValue | expected
        ${1000}        | ${'one thousand'}
        ${11101}        | ${'eleven thousand one hundred and one'}
        ${999999}        | ${'nine hundred and ninety nine thousand nine hundred and ninety nine'}
     `('should return "$expected" when number = $numericValue', ({ numericValue, expected }) => {
            expect(numberText.toText(numericValue)).toBe(expected);
        });
    });

 */
