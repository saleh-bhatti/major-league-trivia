import React from "react";
import { render } from "@testing-library/react";
import GuessComponent from ".";

describe("GuessComponent", () => {
  it("renders without crashing", () => {
    render(<GuessComponent correctAnswer="test" />);
  });
});






