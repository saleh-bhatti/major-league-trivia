import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuessComponent from ".";

describe("GuessComponent", () => {
  it("renders without crashing", () => {
    render(<GuessComponent correctAnswer="test" />);
  });
});






