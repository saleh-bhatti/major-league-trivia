const questions = [
  {
    answer: "Atlanta Hawks",
    question: "https://i.ibb.co/HB46Ztz/Screen-Shot-2023-03-26-at-9-14-52-PM.png"
  },
  {
    answer: "Boston Celtics",
    question: "https://i.ibb.co/hYPFZkz/Screen-Shot-2023-03-26-at-9-16-04-PM.png"
  },
  {
    answer: "Brooklyn Nets",
    question: "https://i.ibb.co/b5GY2C6/Screen-Shot-2023-03-26-at-9-17-40-PM.png"
  },
  {
    answer: "Charlotte Hornets",
    question: "https://i.ibb.co/vqN2J2J/Screen-Shot-2023-03-26-at-9-18-16-PM.png"
  },
  {
    answer: "Chicago Bulls",
    question: "https://i.ibb.co/89GFfhd/Screen-Shot-2023-03-26-at-9-18-49-PM.png"
  },
  {
    answer: "Cleveland Cavaliers",
    question: "https://i.ibb.co/HdsBgNj/Screen-Shot-2023-03-26-at-9-19-20-PM.png"
  },
  {
    answer: "Dallas Mavericks",
    question: "https://i.ibb.co/qnhqYSp/Screen-Shot-2023-03-26-at-9-19-57-PM.png"
  },
  {
    answer: "Denver Nuggets",
    question: "https://i.ibb.co/Ns1YjTF/Screen-Shot-2023-03-26-at-9-20-22-PM.png"
  },
  {
    answer: "Detroit Pistons",
    question: "https://i.ibb.co/nMVqQvN/Screen-Shot-2023-03-26-at-9-20-53-PM.png"
  },
  {
    answer: "Golden State Warriors",
    question: "https://i.ibb.co/wdqgnY7/Screen-Shot-2023-03-26-at-9-21-29-PM.png"
  },
  {
    answer: "Houston Rockets",
    question: "https://i.ibb.co/xhk2605/Screen-Shot-2023-03-26-at-9-21-56-PM.png"
  },
  {
    answer: "Indiana Pacers",
    question: "https://i.ibb.co/3M1LsVb/Screen-Shot-2023-03-26-at-9-22-22-PM.png"
  },
  {
    answer: "Los Angeles Clippers",
    question: "https://i.ibb.co/pzYmw79/Screen-Shot-2023-03-26-at-9-23-15-PM.png"
  },
  {
    answer: "Los Angeles Lakers",
    question: "https://i.ibb.co/4Mq8JKb/Screen-Shot-2023-03-26-at-9-23-49-PM.png"
  },
  {
    answer: "Memphis Grizzlies",
    question: "https://i.ibb.co/Byzs0g1/Screen-Shot-2023-03-26-at-9-24-18-PM.png"
  },
  {
    answer: "Miami Heat",
    question: "https://i.ibb.co/z4wRsy1/Screen-Shot-2023-03-26-at-9-24-50-PM.png"
  },
  {
    answer: "Milwaukee Bucks",
    question: "https://i.ibb.co/hMRT5vL/Screen-Shot-2023-03-26-at-9-25-12-PM.png"
  },
  {
    answer: "Minnesota Timberwolves",
    question: "https://i.ibb.co/XJFWgJ4/Screen-Shot-2023-03-26-at-9-25-36-PM.png"
  },
  {
    answer: "New Orleans Pelicans",
    question: "https://i.ibb.co/2vGYKJN/Screen-Shot-2023-03-26-at-9-26-08-PM.png"
  },
  {
    answer: "New York Knicks",
    question: "https://i.ibb.co/s5Kv8WD/Screen-Shot-2023-03-26-at-9-26-37-PM.png"
  },
  {
    answer: "Oklahoma City Thunder",
    question: "https://i.ibb.co/vPXcC4v/Screen-Shot-2023-03-26-at-9-27-21-PM.png"
  },
  {
    answer: "Orlando Magic",
    question: "https://i.ibb.co/J2MYT43/Screen-Shot-2023-03-26-at-9-27-44-PM.png"
  },
  {
    answer: "Philadelphia 76ers",
    question: "https://i.ibb.co/gP21vh1/Screen-Shot-2023-03-26-at-9-28-15-PM.png"
  },
  {
    answer: "Phoenix Suns",
    question: "https://i.ibb.co/1vCxw0M/Screen-Shot-2023-03-26-at-9-28-38-PM.png"
  },
  {
    answer: "Portland Trail Blazers",
    question: "https://i.ibb.co/F3MX9YD/Screen-Shot-2023-03-26-at-9-28-57-PM.png"
  },
  {
    answer: "Sacramento Kings",
    question: "https://i.ibb.co/B44SNs4/Screen-Shot-2023-03-26-at-9-29-24-PM.png"
  },
  {
    answer: "San Antonio Spurs",
    question: "https://i.ibb.co/RbYfGLr/Screen-Shot-2023-03-26-at-9-29-44-PM.png"
  },
  {
    answer: "Toronto Raptors",
    question: "https://i.ibb.co/swtBkwc/Screen-Shot-2023-03-26-at-9-30-03-PM.png"
  },
  {
    answer: "Utah Jazz",
    question: "https://i.ibb.co/Hnxxyqs/Screen-Shot-2023-03-26-at-9-31-04-PM.png"
  },
  {
    answer: "Washington Wizards",
    question: "https://i.ibb.co/SRbf27Q/Screen-Shot-2023-03-26-at-9-31-31-PM.png"
  },
  {
    answer: "Washington Wizards",
    question: "https://i.ibb.co/TwP8XFt/wizards.png"
  },
  {
    answer: "Golden State Warriors",
    question: "https://i.ibb.co/MR0D4h6/warriors.png"
  },
  {
    answer: "Portland Trailblazers",
    question: "https://i.ibb.co/k2RwfKG/trailblazers.png"
  },
  {
    answer: "Minnesota Timberwolves",
    question: "https://i.ibb.co/VxVb7GS/timberwolves.png"
  },
  {
    answer: "Pheonix Suns",
    question: "https://i.ibb.co/H20NT4N/suns.png"
  },
  {
    answer: "San Antonio Spurs",
    question: "https://i.ibb.co/Lnc31CP/spurs.png"
  },
  {
    answer: "Houston Rockets",
    question: "https://i.ibb.co/BGhVs1T/rockets.png"
  },
  {
    answer: "Portland Trailblazers",
    question: "https://i.ibb.co/k2RwfKG/trailblazers.png"
  },
  {
    answer: "Toronto Raptors",
    question: "https://i.ibb.co/z4bHFDm/raptors.png"
  },
  {
    answer: "Detroit Pistons",
    question: "https://i.ibb.co/yNBh23w/pistons.png"
  },
  {
    answer: "New Orleans Pelicans",
    question: "https://i.ibb.co/cQ06fVt/pelicans.png"
  },
  {
    answer: "Indiana Pacers",
    question: "https://i.ibb.co/NpjfgD8/pacers.png"
  },
  {
    answer: "New Orleans Pelicans",
    question: "https://i.ibb.co/cQ06fVt/pelicans.png"
  },
  {
    answer: "Denver Nuggets",
    question: "https://i.ibb.co/6WwpxCx/nugs.png"
  },
  {
    answer: "Brooklyn Nets",
    question: "https://i.ibb.co/nD35V3M/nets.png"
  },
  {
    answer: "New Orleans Pelicans",
    question: "https://i.ibb.co/cQ06fVt/pelicans.png"
  },
  {
    answer: "Dallas Mavericks",
    question: "https://i.ibb.co/X7vyKYP/mavs.png"
  },
  {
    answer: "Los Angeles Lakers",
    question: "https://i.ibb.co/wcM7VK4/lakers.png"
  },
  {
    answer: "New York Knicks",
    question: "https://i.ibb.co/Jc0nGfc/knicks.png"
  },
  {
    answer: "Charlotte Hornets",
    question: "https://i.ibb.co/kXDSp0F/hornets.png"
  },
  {
    answer: "Miami Heat",
    question: "https://i.ibb.co/SV98tB9/heat.png"
  },
  {
    answer: "Sacremento Kings",
    question: "https://i.ibb.co/b73RHQM/kings.png"
  },
  {
    answer: "Memphis Grizzlies",
    question: "https://i.ibb.co/HNgtMBB/grizzlies.png"
  },
  {
    answer: "Los Angeles Clippers",
    question: "https://i.ibb.co/LRs1x23/clippers.png"
  },
  {
    answer: "Cleveland Cavaliers",
    question: "https://i.ibb.co/wC2zDJC/cavs.png"
  },
  {
    answer: "Chicago Bulls",
    question: "https://i.ibb.co/nkQPn3w/bulls.png"
  },
  {
    answer: "Milwaukee Bucks",
    question: "https://i.ibb.co/MGhmVVr/bucks.png"
  },
  {
    answer: "Boston Celtics",
    question: "https://i.ibb.co/4T1s36n/boston.png"
  },
  {
    answer: "Atlanta Hawks",
    question: "https://i.ibb.co/XC8r3nn/atlanta.png"
  },
];

    const NBATeamQuestions = questions.sort(() => Math.random() - 0.5)
export default NBATeamQuestions;

