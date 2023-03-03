import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NFLteamSelection from ".";

describe("NFLteamSelection", () => {
  it("renders without crashing", () => {
    render(<NFLteamSelection/>);
  });
});