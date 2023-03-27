const questions = [
  { answer: "Arizona Cardinals", question: "https://i.ibb.co/jGZjmzn/Screen-Shot-2023-03-26-at-3-57-01-PM.png" },
  { answer: "Atlanta Falcons", question: "https://i.ibb.co/kQcQt70/Screen-Shot-2023-03-26-at-3-58-09-PM.png" },
  { answer: "Baltimore Ravens", question: "https://i.ibb.co/Vj8gjvw/Screen-Shot-2023-03-26-at-3-59-01-PM.png" },
  { answer: "Buffalo Bills", question: "https://i.ibb.co/Wz0WKbs/Screen-Shot-2023-03-26-at-3-59-51-PM.png" },
  { answer: "Carolina Panthers", question: "https://i.ibb.co/qsfFCmG/Screen-Shot-2023-03-26-at-4-00-36-PM.png" },
  { answer: "Chicago Bears", question: "https://i.ibb.co/bsZZYbF/Screen-Shot-2023-03-26-at-4-01-19-PM.png" },
  { answer: "Cincinnati Bengals", question: "https://i.ibb.co/n8QPc2G/Screen-Shot-2023-03-26-at-4-01-58-PM.png" },
  { answer: "Cleveland Browns", question: "https://i.ibb.co/wSCbwTg/Screen-Shot-2023-03-26-at-4-02-35-PM.png" },
  { answer: "Dallas Cowboys", question: "https://i.ibb.co/FD9cMhn/Screen-Shot-2023-03-26-at-4-03-32-PM.png" },
  { answer: "Denver Broncos", question: "https://i.ibb.co/yXhqJFp/Screen-Shot-2023-03-26-at-4-04-24-PM.png" },
  { answer: "Detroit Lions", question: "https://i.ibb.co/DY11TzC/Screen-Shot-2023-03-26-at-4-05-11-PM.png" },
  { answer: "Green Bay Packers", question: "https://i.ibb.co/wpxfFj2/Screen-Shot-2023-03-26-at-4-05-48-PM.png" },
  { answer: "Houston Texans", question: "https://i.ibb.co/ZL5ny33/Screen-Shot-2023-03-26-at-4-06-27-PM.png" },
  { answer: "Indianapolis Colts", question: "https://i.ibb.co/fFgzwP4/Screen-Shot-2023-03-26-at-4-07-10-PM.png" },
  { answer: "Jacksonville Jaguars", question: "https://i.ibb.co/K0FNFbF/Screen-Shot-2023-03-26-at-4-07-41-PM.png" },
  { answer: "Kansas City Chiefs", question: "https://i.ibb.co/XtNr8pk/Screen-Shot-2023-03-26-at-4-08-36-PM.png" },
  { answer: "Las Vegas Raiders", question: "https://i.ibb.co/k84vpPx/Screen-Shot-2023-03-26-at-4-09-10-PM.png" },
  { answer: "Los Angeles Chargers", question: "https://i.ibb.co/Hqfvq2L/Screen-Shot-2023-03-26-at-5-24-25-PM.png" },
  { answer: "Los Angeles Rams", question: "https://i.ibb.co/FJzBFcm/Screen-Shot-2023-03-26-at-5-25-11-PM.png" },
  { answer: "Miami Dolphins", question: "https://i.ibb.co/2ygQMtG/Screen-Shot-2023-03-26-at-5-25-46-PM.png" },
  { answer: "Minnesota Vikings", question: "https://i.ibb.co/BnPQ720/Screen-Shot-2023-03-26-at-5-26-24-PM.png" },
  { answer: "New England Patriots", question: "https://i.ibb.co/VQbtWSW/Screen-Shot-2023-03-26-at-5-27-07-PM.png" },
  { answer: "New Orleans Saints", question: "https://i.ibb.co/94Z3Jvp/Screen-Shot-2023-03-26-at-5-27-45-PM.png" },
  { answer: "New York Giants", question: "https://i.ibb.co/7WCp0z9/Screen-Shot-2023-03-26-at-5-28-36-PM.png" },
  { answer: "New York Jets", question: "https://i.ibb.co/M5rxsVh/Screen-Shot-2023-03-26-at-5-29-13-PM.png" },
  { answer: "Philadelphia Eagles", question: "https://i.ibb.co/zN4hXN6/Screen-Shot-2023-03-26-at-5-29-59-PM.png" },
  { answer: "San Francisco 49ers", question: "https://i.ibb.co/w0nCnJS/Screen-Shot-2023-03-26-at-5-31-35-PM.png" },
  { answer: "Seattle Seahawks", question: "https://i.ibb.co/xh0Jkjr/Screen-Shot-2023-03-26-at-5-32-19-PM.png" },
  { answer: "Tampa Bay Buccaneers", question: "https://i.ibb.co/mySPBZw/Screen-Shot-2023-03-26-at-5-32-56-PM.png" },
  { answer: "Tennessee Titans", question: "https://i.ibb.co/YP9F5Zy/Screen-Shot-2023-03-26-at-5-33-38-PM.png" },
  { answer: "Washington Commanders", question: "https://i.ibb.co/jvkKdjG/Screen-Shot-2023-03-26-at-5-34-34-PM.png" }
];

const NFLTeamQuestions = questions.sort(() => Math.random() - 0.5)

export default NFLTeamQuestions;

