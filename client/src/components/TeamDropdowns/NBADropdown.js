import React from "react";
import NBATeams from "../TeamLists/NBATeams";

const NbaTeamDropdown = ({ handleTeamSelection }) => {
  return (
    <div>
      <label htmlFor="nba-team-dropdown">Select an NBA team:</label>
      <select id="nba-team-dropdown" onChange={(e) => handleTeamSelection(e.target.value)}>
        <option value="">--Select an NBA team--</option>
        {NBATeams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NbaTeamDropdown;