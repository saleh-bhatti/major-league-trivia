import React from "react";
import { render } from "@testing-library/react";
import NBAOverUnder from "./NBAOverUnder";
import EPLOverUnder from "./EPLOverUnder";
import NFLOverUnder from "./NFLOverUnder";

describe("NBAOverUnder", () => {
  it("renders without crashing", () => {
    render(<NBAOverUnder />);
  });
});

describe("EPLOverUnder", () => {
    it("renders without crashing", () => {
      render(<EPLOverUnder />);
    });
  });

  describe("NFLOverUnder", () => {
    it("renders without crashing", () => {
      render(<NFLOverUnder />);
    });
  });
