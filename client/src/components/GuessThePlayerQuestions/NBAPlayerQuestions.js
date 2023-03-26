const questions = [
    {
      question: "In 2021-22, this player played for the Philadelphia 76ers, and averaged 30.6 Points, 11.7 Rebounds, and 4.2 Assists.",
      answer: "Joel Embiid"
    },
    {
      question: "In 2021-22, this player played for the Los Angeles Lakers, and averaged 30.3 Points, 8.2 Rebounds, and 6.2 Assists.",
      answer: "LeBron James"
    },
    {
      question: "In 2021-22, this player played for the Milwaukee Bucks, and averaged 29.9 Points, 11.6 Rebounds, and 5.8 Assists.",
      answer: "Giannis Antetokounmpo"
    },
    {
      question: "In 2021-22, this player played for the Brooklyn Nets, and averaged 29.9 Points, 7.4 Rebounds, and 6.4 Assists.",
      answer: "Kevin Durant"
    },
    {
      question: "In 2021-22, this player played for the Dallas Mavericks, and averaged 28.4 Points, 9.1 Rebounds, and 8.7 Assists.",
      answer: "Luka Doncic"
    },
    {
      question: "In 2021-22, this player played for the Atlanta Hawks, and averaged 28.4 Points, 3.7 Rebounds, and 9.7 Assists.",
      answer: "Trae Young"
    },
    {
      question: "In 2021-22, this player played for the Chicago Bulls, and averaged 27.9 Points, 5.2 Rebounds, and 4.9 Assists.",
      answer: "DeMar DeRozan"
    },
    {
      question: "In 2021-22, this player played for the Brooklyn Nets, and averaged 27.4 Points, 4.4 Rebounds, and 5.8 Assists.",
      answer: "Kyrie Irving"
    },
    {
      question: "In 2021-22, this player played for the Memphis Grizzlies, and averaged 27.4 Points, 5.7 Rebounds, and 6.7 Assists.",
      answer: "Ja Morant"
    },
    {
      question: "In 2021-22, this player played for the Denver Nuggets, and averaged 27.1 Points, 13.8 Rebounds, and 7.9 Assists.",
      answer: "Nikola Jokic"
    },
    {
        question: "In 2021-22, this player played for the Boston Celtics, and averaged 26.9 Points, 8 Rebounds, and 4.4 Assists.",
        answer: "Jayson Tatum"
      },
      {
        question: "In 2021-22, this player played for the Phoenix Suns, and averaged 26.8 Points, 5 Rebounds, and 4.8 Assists.",
        answer: "Devin Booker"
      },
      {
        question: "In 2021-22, this player played for the Utah Jazz, and averaged 25.9 Points, 4.2 Rebounds, and 5.3 Assists.",
        answer: "Donovan Mitchell"
      },
      {
        question: "In 2021-22, this player played for the Golden State Warriors, and averaged 25.5 Points, 5.2 Rebounds, and 6.3 Assists",
        answer: "Stephen Curry"
      },
      {
        question: "In 2021-22, this player played for the Minnesota Timberwolves, and averaged 24.6 Points, 9.8 Rebounds, and 3.6 Assists",
        answer: "Karl-Anthony Towns"
      },
      {
        question: "In 2021-22, this player played for the Oklahoma City Thunder, and averaged 24.5 Points, 5 Rebounds, and 5.9 Assists",
        answer: "Shai Gilgeous-Alexander"
      },
      {
        question: "In 2021-22, this player played for the Chicago Bulls, and averaged 24.4 Points, 4.6 Rebounds, and 4.5 Assists",
        answer: "Zach LaVine"
      },
      {
        question: "In 2021-22, this player played for the Los Angeles Clippers, and averaged 24.3 Points, 6.9 Rebounds, and 5.7 Assists",
        answer: "Paul George"
      },
      {
        question: "In 2021-22, this player played for the Portland Trailblazers, and averaged 24 Points, 4.1 Rebounds, and 7.3 Assists",
        answer: "Damian Lillard"
      },
      {
        question: "In 2021-22, this player played for the Boston Celtics, and averaged 23.6 Points, 6.1 Rebounds, and 3.5 Assists",
        answer: "Jaylen Brown"
      },
      {
        question: "In 2021-22, this player played for the Washington Wizards, and averaged 23.2 Points, 4.7 Rebounds, and 6.6 Assists",
        answer: "Bradley Beal"
      },
      {
        question: "In 2021-22, this player played for the Los Angeles Lakers, and averaged 23.2 Points, 9.9 Rebounds, and 3.1 Assists",
        answer: "Anthony Davis"
      },
      {
        question: "In 2021-22, this player played for the Sacremento Kings, and averaged 23.2 Points, 3.9 Rebounds, and 5.6 Assists",
        answer: "De'Aaron Fox"
      },
      {
        question: "In 2021-22, this player played for the Toronto Raptors, and averaged 22.8 Points, 8.5 Rebounds, and 5.3 Assists",
        answer: "Pascal Siakam"
      },
      {
        question: "In 2021-22, this player played for the New Orleans Pelicans, and averaged 22.7 Points, 5.8 Rebounds, and 5.6 Assists",
        answer: "Brandon Ingram"
      },
      {
        question: "In 2021-22, this player played for the Cleveland Cavaliers, and averaged 21.7 Points, 3.3 Rebounds, and 8.6 Assists",
        answer: "Darius Garland"
      },
      {
        question: "In 2021-22, this player played for the Miami Heat, and averaged 21.4 Points, 5.9 Rebounds, and 5.5 Assists.",
        answer: "Jimmy Butler"
      },
      {
        question: "In 2021-22, this player played for the Los Angeles Clippers, and averaged 21.4 Points, 2.8 Rebounds, and 2.8 Assists.",
        answer: "Norman Powell"
      },
      {
        question: "In 2021-22, this player played for the Minnesota Timberwolves, and averaged 21.3 Points, 4.8 Rebounds, and 3.8 Assists.",
        answer: "Anthony Edwards"
      },
      {
        question: "In 2021-22, this player played for the San Antonio Spurs, and averaged 21.1 Points, 8.3 Rebounds, and 9.2 Assists.",
        answer: "Dejounte Murray"
      }
  ];
  
  const NBAPlayerQuestions = questions.sort(() => Math.random() - 0.5)

  export default NBAPlayerQuestions;