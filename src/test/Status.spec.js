import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Status } from "../Status";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Status winningPlayer={player|''} isDraw={Boolean} nextPlayer={player}>", () => {
  describe("should always render the winningPlayer if it is not empty", () => {
    test.each`
      params                                                              | matchPattern
      ${{ winningPlayer: "WINNER", isDraw: false, nextPlayer: "PLAYER" }} | ${"WINNER"}
      ${{ winningPlayer: "WINNER", isDraw: true, nextPlayer: "PLAYER" }}  | ${"WINNER"}
    `('render "$matchPattern" params = $params', ({ params, matchPattern }) => {
      act(() => {
        render(<Status {...params} />, container);
      });
      expect(container.textContent).toMatch(matchPattern);
    });
  });

  describe("Draw renders when isDraw is true, unless we have a winner", () => {
    test.each`
      params                                                       | matchPattern
      ${{ winningPlayer: "", isDraw: true, nextPlayer: "PLAYER" }} | ${"DRAW"}
    `('render "$matchPattern" params = $params', ({ params, matchPattern }) => {
      act(() => {
        render(<Status {...params} />, container);
      });
      expect(container.textContent).toMatch(matchPattern);
    });
  });

  describe("next player renders when winningPLayer and isDraw are falsy", () => {
    test.each`
      params                                                        | matchPattern
      ${{ winningPlayer: "", isDraw: false, nextPlayer: "PLAYER" }} | ${"PLAYER"}
    `('render "$matchPattern" params = $params', ({ params, matchPattern }) => {
      act(() => {
        render(<Status {...params} />, container);
      });
      expect(container.textContent).toMatch(matchPattern);
    });
  });
});
