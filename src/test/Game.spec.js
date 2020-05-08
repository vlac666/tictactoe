import assert from "assert";
import { whosTurn } from "../Game";

describe("whosTurn", () => {
  describe("whosTurn( /* no args */", () => {
    test.todo("We should always check our params");
  });

  describe("whosTurn(0)", () => {
    it('should return "X" when called with move number 0 becasue X goes first', () => {
      assert.equal(whosTurn(2), "X");
    });
  });

  describe("whosTurn - based on even and odd move number", ()=> {
    it.each`
      numericValue | expected
      ${1}         | ${"O"}
      ${2}         | ${"X"}
      ${999999}    | ${"O"}
      ${100000}    | ${"X"}
    `(
      'should return "$expected" when number = $numericValue',
      ({ numericValue, expected }) => {
        expect(whosTurn(numericValue)).toBe(expected);
      }
    );
  });
});
