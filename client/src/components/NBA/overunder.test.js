import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Overundergame from ".";

describe("Overundergame", () => {
  it("renders without crashing", () => {
    render(<Overundergame/>);
  });
});
