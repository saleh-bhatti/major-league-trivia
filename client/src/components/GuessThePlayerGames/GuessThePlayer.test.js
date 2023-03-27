import React from "react";
import { render } from "@testing-library/react";
import NBAGuessThePlayer from "./NBAGuessThePlayer";
import EPLGuessThePlayer from "./EPLGuessThePlayer";
import NFLGuessThePlayer from "./NFLGuessThePlayer";

describe("NBAGuessThePlayer", () => {
  it("renders without crashing", () => {
    render(<NBAGuessThePlayer />);
  });
});

describe("EPLGuessThePlayer", () => {
    it("renders without crashing", () => {
      render(<EPLGuessThePlayer />);
    });
  });

  describe("NFLGuessThePlayer", () => {
    it("renders without crashing", () => {
      render(<NFLGuessThePlayer />);
    });
  });
