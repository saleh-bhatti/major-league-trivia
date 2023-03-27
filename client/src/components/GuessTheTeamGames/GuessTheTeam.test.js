import React from "react";
import { render } from "@testing-library/react";
import NBAGuessTheTeam from "./NBAGuessTheTeam";
import EPLGuessTheTeam from "./EPLGuessTheTeam";
import NFLGuessTheTeam from "./NFLGuessTheTeam";

describe("NBAGuessTheTeam", () => {
  it("renders without crashing", () => {
    render(<NBAGuessTheTeam />);
  });
});

describe("EPLGuessTheTeam", () => {
    it("renders without crashing", () => {
      render(<EPLGuessTheTeam />);
    });
  });

  describe("NFLGuessTheTeam", () => {
    it("renders without crashing", () => {
      render(<NFLGuessTheTeam />);
    });
  });
