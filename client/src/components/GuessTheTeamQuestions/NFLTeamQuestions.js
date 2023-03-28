const questions = [
  { answer: "Arizona Cardinals", question: "https://i.ibb.co/sHGJy3d/Screen-Shot-2023-03-27-at-9-12-38-PM.png" },
  { answer: "Atlanta Falcons", question: "https://i.ibb.co/B2YBTxW/Screen-Shot-2023-03-27-at-9-01-07-PM.png" },
  { answer: "Baltimore Ravens", question: "https://i.ibb.co/mFKz2rT/Screen-Shot-2023-03-27-at-7-00-27-PM.png" },
  { answer: "Buffalo Bills", question: "https://i.ibb.co/zxkQGkf/Screen-Shot-2023-03-27-at-6-53-09-PM.png" },
  { answer: "Carolina Panthers", question: "https://i.ibb.co/vsmMxg6/Screen-Shot-2023-03-27-at-9-08-02-PM.png" },
  { answer: "Chicago Bears", question: "https://i.ibb.co/WkX6SLT/Screen-Shot-2023-03-27-at-8-55-14-PM.png" },
  { answer: "Cincinnati Bengals", question: "https://i.ibb.co/LnyRqsY/Screen-Shot-2023-03-27-at-7-01-37-PM.png" },
  { answer: "Cleveland Browns", question: "https://i.ibb.co/Vw9DTSp/Screen-Shot-2023-03-27-at-7-03-11-PM.png" },
  { answer: "Dallas Cowboys", question: "https://i.ibb.co/DYDjzqD/Screen-Shot-2023-03-27-at-7-22-35-PM.png" },
  { answer: "Denver Broncos", question: "https://i.ibb.co/8zRWBjW/Screen-Shot-2023-03-27-at-7-15-13-PM.png" },
  { answer: "Detroit Lions", question: "https://i.ibb.co/yd40rKm/Screen-Shot-2023-03-27-at-8-56-37-PM.png" },
  { answer: "Green Bay Packers", question: "https://i.ibb.co/6JXSXZW/Screen-Shot-2023-03-27-at-8-58-23-PM.png" },
  { answer: "Houston Texans", question: "https://i.ibb.co/kDVfP7J/Screen-Shot-2023-03-27-at-7-06-10-PM.png" },
  { answer: "Indianapolis Colts", question: "https://i.ibb.co/SDTs4qk/Screen-Shot-2023-03-27-at-7-07-27-PM.png" },
  { answer: "Jacksonville Jaguars", question: "https://i.ibb.co/BPm2ZRb/Screen-Shot-2023-03-27-at-7-12-04-PM.png" },
  { answer: "Kansas City Chiefs", question: "https://i.ibb.co/9bzZv6D/Screen-Shot-2023-03-27-at-7-17-39-PM.png" },
  { answer: "Las Vegas Raiders", question: "https://i.ibb.co/D9PLzKy/Screen-Shot-2023-03-27-at-7-21-02-PM.png" },
  { answer: "Los Angeles Chargers", question: "https://i.ibb.co/zJM6SZy/Screen-Shot-2023-03-27-at-7-19-17-PM.png" },
  { answer: "Los Angeles Rams", question: "https://i.ibb.co/Fs2n7KL/Screen-Shot-2023-03-27-at-6-50-30-PM.png" },
  { answer: "Miami Dolphins", question: "https://i.ibb.co/59bXYxw/Screen-Shot-2023-03-27-at-6-55-23-PM.png" },
  { answer: "Minnesota Vikings", question: "https://i.ibb.co/741Z9Ms/Screen-Shot-2023-03-27-at-8-59-43-PM.png" },
  { answer: "New England Patriots", question: "https://i.ibb.co/B2w08sY/Screen-Shot-2023-03-27-at-6-56-56-PM.png" },
  { answer: "New Orleans Saints", question: "https://i.ibb.co/LSdkMsr/Screen-Shot-2023-03-27-at-9-09-58-PM.png" },
  { answer: "New York Giants", question: "https://i.ibb.co/YdPnzLm/Screen-Shot-2023-03-27-at-7-24-02-PM.png" },
  { answer: "New York Jets", question: "https://i.ibb.co/jwkwP10/Screen-Shot-2023-03-27-at-6-58-24-PM.png" },
  { answer: "Philadelphia Eagles", question: "https://i.ibb.co/hWzPKF8/Screen-Shot-2023-03-27-at-7-27-31-PM.png" },
  { answer: "San Francisco 49ers", question: "https://i.ibb.co/SddQq2K/Screen-Shot-2023-03-27-at-9-14-48-PM.png" },
  { answer: "Seattle Seahawks", question: "https://i.ibb.co/0yGyDt0/Screen-Shot-2023-03-27-at-9-13-34-PM.png" },
  { answer: "Tampa Bay Buccaneers", question: "https://i.ibb.co/W5N8jLB/Screen-Shot-2023-03-27-at-9-11-16-PM.png" },
  { answer: "Tennessee Titans", question: "https://i.ibb.co/ZS11vcV/Screen-Shot-2023-03-27-at-7-13-51-PM.png" },
  { answer: "Washington Commanders", question: "https://i.ibb.co/Q6DBKj7/Screen-Shot-2023-03-27-at-7-28-57-PM.png" },
  { answer: "Pittsburgh Steelers ", question: "https://i.ibb.co/yh9TMjg/Screen-Shot-2023-03-27-at-7-04-26-PM.png" }
];



const NFLTeamQuestions = questions.sort(() => Math.random() - 0.5)

export default NFLTeamQuestions;

