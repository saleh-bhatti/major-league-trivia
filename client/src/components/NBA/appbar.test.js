import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from ".";

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<NavBar/>);
  });
});