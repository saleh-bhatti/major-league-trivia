import React from "react";
import { render } from "@testing-library/react";
import NavBar from ".";

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<NavBar />);
  });
});