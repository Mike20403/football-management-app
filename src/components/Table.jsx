import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import EditForm from "./forms/EditRankingForm";

export const teamName = [
  "Liverpool",
  "Manchester United",
  "Tottenham",
  "West Ham",
  "Brighton",
  "Newcastle",
  "FullHam",
  "Crystal Palace",
  "Chelsea",
  "Wolves",
];
export const teamLogo = [
  "https://upload.wikimedia.org/wikipedia/vi/thumb/0/0c/Liverpool_FC.svg/175px-Liverpool_FC.svg.png",
  "https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg",
  "https://upload.wikimedia.org/wikipedia/vi/thumb/b/bd/Tottenham_Hotspur_FC.svg/1200px-Tottenham_Hotspur_FC.svg.png",
  "https://upload.wikimedia.org/wikipedia/vi/b/b1/WestHam.png",
  "https://upload.wikimedia.org/wikipedia/vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/800px-Brighton_%26_Hove_Albion_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/vi/0/0d/Newcastle_United_FC.png",
  "https://upload.wikimedia.org/wikipedia/vi/8/8d/Fulham_FC.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png",
  "https://upload.wikimedia.org/wikipedia/vi/6/6c/Wolverhampton_Wanderers.png",
];

export const players = [
  {
    id: 0,
    name: "Mohamed Salah",
    imgUrl:
      "https://c8.alamy.com/zooms/9/c1cbbbcdeb47431c84e3d9ce476d940c/2jaf9p9.jpg",
  },
  {
    id: 1,
    name: "Sadio Mane",
    imgUrl:
      "https://themuslim500.com/wp-content/uploads/2020/10/sadio-mane-2022.jpg",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    imgUrl:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-971463110.jpg",
  },
  {
    id: 3,
    name: "Lionel Messi",
    imgUrl:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254",
  },
  {
    id: 4,
    name: "Harry Kane",
    imgUrl:
      "https://i.pinimg.com/736x/32/43/3d/32433dade363bf766c66aeff2f34efbc.jpg",
  },
  {
    id: 5,
    name: "Erling Haland",
    imgUrl:
      "https://img.uefa.com/imgml/TP/players/1/2024/324x324/250103758.jpg",
  },
  {
    id: 6,
    name: "Kylian-Mbappe",
    imgUrl:
      "https://s.hs-data.com/bilder/spieler/gross/284095.jpg?fallback=png",
  },
  {
    id: 7,
    name: "Robert Lewandowski",
    imgUrl:
      "https://i2-prod.football.london/incoming/article21650115.ece/ALTERNATES/s1200c/0_GettyImages-1232099341.jpg",
  },
  {
    id: 8,
    name: "Neymar Jr.",
    imgUrl: "https://www.fifplay.com/img/fifa22/players/190871.png",
  },
  {
    id: 9,
    name: "Kevin De Bruyne",
    imgUrl:
      "https://i2-prod.football.london/incoming/article20172437.ece/ALTERNATES/s1200/1_GettyImages-1229804668.jpg",
  },
  {
    id: 10,
    name: "Antoine Griezmann",
    imgUrl:
      "https://i2-prod.football.london/incoming/article20329954.ece/ALTERNATES/s1200/0_GettyImages-1229828455.jpg",
  },
  {
    id: 11,
    name: "Paul Pogba",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article21568716.ece/ALTERNATES/s1200/1_GettyImages-1206514844.jpg",
  },
  {
    id: 12,
    name: "Luis Suarez",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article19554290.ece/ALTERNATES/s1200/0_GettyImages-1268930087.jpg",
  },
  {
    id: 13,
    name: "Raheem Sterling",
    imgUrl:
      "https://i2-prod.birminghammail.co.uk/incoming/article20378192.ece/ALTERNATES/s1200/0_GettyImages-1311620861.jpg",
  },
  {
    id: 14,
    name: "Gareth Bale",
    imgUrl:
      "https://i2-prod.football.london/incoming/article21470364.ece/ALTERNATES/s1200/1_GettyImages-1230183366.jpg",
  },
  {
    id: 15,
    name: "Bruno Fernandes",
    imgUrl:
      "https://i2-prod.football.london/incoming/article19875786.ece/ALTERNATES/s1200/0_GettyImages-1268587780.jpg",
  },
  {
    id: 16,
    name: "Sergio Ramos",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article22866141.ece/ALTERNATES/s1200/0_GettyImages-1228279399.jpg",
  },
  {
    id: 17,
    name: "Virgil van Dijk",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article20165974.ece/ALTERNATES/s1200/0_GettyImages-1297898567.jpg",
  },
  {
    id: 18,
    name: "Alisson Becker",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24092961.ece/ALTERNATES/s1200/0_GettyImages-1230581601.jpg",
  },
  {
    id: 19,
    name: "Thiago Alcantara",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article19796410.ece/ALTERNATES/s1200/0_GettyImages-1301931765.jpg",
  },
  {
    id: 20,
    name: "Eduardo Camavinga",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24770009.ece/ALTERNATES/s1200/0_GettyImages-1346160305.jpg",
  },
  {
    id: 21,
    name: "Jadon Sancho",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article21000766.ece/ALTERNATES/s1200/0_GettyImages-1326111324.jpg",
  },
  {
    id: 22,
    name: "Hakim Ziyech",
    imgUrl:
      "https://i2-prod.football.london/incoming/article21346495.ece/ALTERNATES/s1200/0_GettyImages-1329381841.jpg",
  },
  {
    id: 23,
    name: "Andrew Robertson",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg",
  },
  {
    id: 24,
    name: "Joao Cancelo",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article23234589.ece/ALTERNATES/s1200/1_GettyImages-1359820724.jpg",
  },
  {
    id: 25,
    name: "Frenkie de Jong",
    imgUrl:
      "https://i2-prod.football.london/incoming/article23591265.ece/ALTERNATES/s1200/0_GettyImages-1357853159.jpg",
  },
  {
    id: 26,
    name: "Son Heung-min",
    imgUrl:
      "https://i2-prod.football.london/incoming/article20347078.ece/ALTERNATES/s1200/0_GettyImages-1232958319.jpg",
  },
  {
    id: 27,
    name: "Jamie Vardy",
    imgUrl:
      "https://i2-prod.football.london/incoming/article19140472.ece/ALTERNATES/s1200/0_GettyImages-1219978724.jpg",
  },
  {
    id: 28,
    name: "Kai Havertz",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770084.ece/ALTERNATES/s1200/0_GettyImages-1346161765.jpg",
  },
  {
    id: 29,
    name: "Gianluigi Donnarumma",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24151323.ece/ALTERNATES/s1200/0_GettyImages-1234181969.jpg",
  },
  {
    id: 30,
    name: "Romelu Lukaku",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article23293408.ece/ALTERNATES/s1200/0_GettyImages-1362788193.jpg",
  },
  {
    id: 31,
    name: "Ciro Immobile",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770016.ece/ALTERNATES/s1200/0_GettyImages-1346160534.jpg",
  },
  {
    id: 32,
    name: "Lautaro Martinez",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg",
  },
  {
    id: 33,
    name: "Riyad Mahrez",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg",
  },
  {
    id: 34,
    name: "Marc-André ter Stegen",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 35,
    name: "Lorenzo Insigne",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770037.ece/ALTERNATES/s1200/0_GettyImages-1346160668.jpg",
  },
  {
    id: 36,
    name: "Marquinhos",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article22987073.ece/ALTERNATES/s1200/1_GettyImages-1228279126.jpg",
  },
  {
    id: 37,
    name: "Keylor Navas",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 38,
    name: "Andrew Robertson",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg",
  },
  {
    id: 39,
    name: "Sergio Ramos",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article22866141.ece/ALTERNATES/s1200/0_GettyImages-1228279399.jpg",
  },
  {
    id: 40,
    name: "Luka Modric",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 41,
    name: "Vinicius Jr.",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770037.ece/ALTERNATES/s1200/0_GettyImages-1346160668.jpg",
  },
  {
    id: 42,
    name: "Ederson",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 43,
    name: "Ruben Dias",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 44,
    name: "Federico Chiesa",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg",
  },
  {
    id: 45,
    name: "Georginio Wijnaldum",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article23591304.ece/ALTERNATES/s1200/0_GettyImages-1357887046.jpg",
  },
  {
    id: 46,
    name: "Federico Valverde",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 47,
    name: "Kai Havertz",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770084.ece/ALTERNATES/s1200/0_GettyImages-1346161765.jpg",
  },
  {
    id: 48,
    name: "Jack Grealish",
    imgUrl:
      "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg",
  },
  {
    id: 49,
    name: "Marcus Rashford",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 50,
    name: "Mason Mount",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 51,
    name: "Antoine Griezmann",
    imgUrl:
      "https://i2-prod.football.london/incoming/article23591304.ece/ALTERNATES/s1200/0_GettyImages-1357887046.jpg",
  },
  {
    id: 52,
    name: "Phil Foden",
    imgUrl:
      "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg",
  },
  {
    id: 53,
    name: "Roberto Firmino",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg",
  },
  {
    id: 54,
    name: "Thiago Alcantara",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 55,
    name: "Bernardo Silva",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 56,
    name: "Trent Alexander-Arnold",
    imgUrl:
      "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg",
  },
  {
    id: 57,
    name: "Jadon Sancho",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg",
  },
  {
    id: 58,
    name: "Aymeric Laporte",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article23591304.ece/ALTERNATES/s1200/0_GettyImages-1357887046.jpg",
  },
  {
    id: 59,
    name: "Hakim Ziyech",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 60,
    name: "Rodri",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 61,
    name: "Paul Pogba",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg",
  },
  {
    id: 62,
    name: "Bruno Fernandes",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg",
  },
  {
    id: 63,
    name: "Nicolas Pepe",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 64,
    name: "Raphael Varane",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 65,
    name: "Marcus Rashford",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 66,
    name: "Mason Mount",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 67,
    name: "N'Golo Kanté",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770037.ece/ALTERNATES/s1200/0_GettyImages-1346160668.jpg",
  },
  {
    id: 68,
    name: "Christian Pulisic",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 69,
    name: "James Maddison",
    imgUrl:
      "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg",
  },
  {
    id: 70,
    name: "Wilfred Ndidi",
    imgUrl:
      "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg",
  },
  {
    id: 71,
    name: "Youri Tielemans",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 72,
    name: "Harvey Barnes",
    imgUrl:
      "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg",
  },
  {
    id: 73,
    name: "Riyad Mahrez",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg",
  },
  {
    id: 74,
    name: "Kevin De Bruyne",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg",
  },
  {
    id: 75,
    name: "Phil Foden",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 76,
    name: "Jack Grealish",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 77,
    name: "Riyad Mahrez",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151323.ece/ALTERNATES/s1200/0_GettyImages-1234181969.jpg",
  },
  {
    id: 78,
    name: "Ruben Dias",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 79,
    name: "John Stones",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 80,
    name: "Kyle Walker",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 81,
    name: "João Cancelo",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 82,
    name: "Rodri",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 83,
    name: "Kevin De Bruyne",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 84,
    name: "Bernardo Silva",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 85,
    name: "Fernandinho",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 86,
    name: "Philipp Lahm",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 87,
    name: "Andres Iniesta",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 88,
    name: "Xavi Hernandez",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 89,
    name: "Luis Suarez",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 90,
    name: "Zlatan Ibrahimovic",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 91,
    name: "David Alaba",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 92,
    name: "Leroy Sane",
    imgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg",
  },
  {
    id: 93,
    name: "Kai Havertz",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 94,
    name: "Timo Werner",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg",
  },
  {
    id: 95,
    name: "Mason Mount",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 96,
    name: "Hakim Ziyech",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 97,
    name: "Christian Pulisic",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
  {
    id: 98,
    name: "Romelu Lukaku",
    imgUrl:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 99,
    name: "Eden Hazard",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg",
  },
  {
    id: 100,
    name: "Thibaut Courtois",
    imgUrl:
      "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg",
  },
];

export const commonPlayerDetails = {
  // Basic details
  age: 25,
  family: "Married",
  hometown: "London",

  // Performance stats
  totalScore: 50,
  assistRate: 0.75,
  assistGoals: 10,
  goalsScored: 20,
  yellowCards: 2,
  redCards: 0,
  cleanSheets: 5,
  minutesPlayed: 1800,

  // Additional football stats
  goalsConceded: 15,
  tackles: 30,
  interceptions: 12,
  foulsCommitted: 5,
  foulsSuffered: 8,
  successfulPasses: 500,
  passAccuracy: 85.5,
  shotsOnTarget: 25,
  shotsOffTarget: 10,
  successfulDribbles: 15,
  aerialDuelsWon: 20,
  aerialDuelsLost: 5,

  // Personal details
  height: "180cm",
  weight: "75kg",
  preferredFoot: "Right",
  position: "Midfielder",
  jerseyNumber: 10,
  preferredFormation: "4-3-3",
  preferredRole: "Playmaker",
  currentClub: "City FC",
  previousClubs: ["United FC", "Arsenal FC"],
  internationalCaps: 20,
  internationalGoals: 5,

  // Add any other football or personal stats as needed
};

export const playerData = [
  {
    id: 0,
    name: "Player 0",
    goals: 20,
    assists: 3,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 1,
    name: "Player 1",
    goals: 15,
    assists: 2,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 2,
    name: "Player 2",
    goals: 4,
    assists: 3,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 3,
    name: "Player 3",
    goals: 10,
    assists: 13,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 4,
    name: "Player 4",
    goals: 7,
    assists: 13,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 5,
    name: "Player 5",
    goals: 10,
    assists: 3,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 6,
    name: "Player 6",
    goals: 14,
    assists: 7,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 7,
    name: "Player 7",
    goals: 2,
    assists: 14,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 8,
    name: "Player 8",
    goals: 9,
    assists: 9,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 9,
    name: "Player 9",
    goals: 11,
    assists: 10,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 10,
    name: "Player 10",
    goals: 7,
    assists: 3,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 11,
    name: "Player 11",
    goals: 14,
    assists: 12,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 12,
    name: "Player 12",
    goals: 16,
    assists: 14,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 13,
    name: "Player 13",
    goals: 5,
    assists: 14,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 14,
    name: "Player 14",
    goals: 20,
    assists: 1,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 15,
    name: "Player 15",
    goals: 11,
    assists: 9,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 16,
    name: "Player 16",
    goals: 4,
    assists: 6,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 17,
    name: "Player 17",
    goals: 7,
    assists: 15,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 18,
    name: "Player 18",
    goals: 12,
    assists: 1,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 19,
    name: "Player 19",
    goals: 4,
    assists: 3,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 20,
    name: "Player 20",
    goals: 18,
    assists: 3,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 21,
    name: "Player 21",
    goals: 8,
    assists: 6,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 22,
    name: "Player 22",
    goals: 9,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 23,
    name: "Player 23",
    goals: 3,
    assists: 12,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 24,
    name: "Player 24",
    goals: 9,
    assists: 14,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 25,
    name: "Player 25",
    goals: 18,
    assists: 14,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 26,
    name: "Player 26",
    goals: 8,
    assists: 2,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 27,
    name: "Player 27",
    goals: 13,
    assists: 12,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 28,
    name: "Player 28",
    goals: 11,
    assists: 1,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 29,
    name: "Player 29",
    goals: 8,
    assists: 9,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 30,
    name: "Player 30",
    goals: 12,
    assists: 12,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 31,
    name: "Player 31",
    goals: 4,
    assists: 3,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 32,
    name: "Player 32",
    goals: 5,
    assists: 1,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 33,
    name: "Player 33",
    goals: 18,
    assists: 14,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 34,
    name: "Player 34",
    goals: 4,
    assists: 15,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 35,
    name: "Player 35",
    goals: 16,
    assists: 6,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 36,
    name: "Player 36",
    goals: 10,
    assists: 7,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 37,
    name: "Player 37",
    goals: 13,
    assists: 6,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 38,
    name: "Player 38",
    goals: 8,
    assists: 14,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 39,
    name: "Player 39",
    goals: 19,
    assists: 12,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 40,
    name: "Player 40",
    goals: 3,
    assists: 12,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 41,
    name: "Player 41",
    goals: 7,
    assists: 7,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 42,
    name: "Player 42",
    goals: 17,
    assists: 12,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 43,
    name: "Player 43",
    goals: 12,
    assists: 1,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 44,
    name: "Player 44",
    goals: 9,
    assists: 7,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 45,
    name: "Player 45",
    goals: 12,
    assists: 6,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 46,
    name: "Player 46",
    goals: 8,
    assists: 11,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 47,
    name: "Player 47",
    goals: 15,
    assists: 3,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 48,
    name: "Player 48",
    goals: 12,
    assists: 5,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 49,
    name: "Player 49",
    goals: 20,
    assists: 11,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 50,
    name: "Player 50",
    goals: 7,
    assists: 9,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 51,
    name: "Player 51",
    goals: 10,
    assists: 2,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 52,
    name: "Player 52",
    goals: 4,
    assists: 6,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 53,
    name: "Player 53",
    goals: 20,
    assists: 6,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 54,
    name: "Player 54",
    goals: 19,
    assists: 15,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 55,
    name: "Player 55",
    goals: 19,
    assists: 14,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 56,
    name: "Player 56",
    goals: 4,
    assists: 11,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 57,
    name: "Player 57",
    goals: 12,
    assists: 13,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 58,
    name: "Player 58",
    goals: 11,
    assists: 6,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 59,
    name: "Player 59",
    goals: 14,
    assists: 12,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 60,
    name: "Player 60",
    goals: 4,
    assists: 15,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 61,
    name: "Player 61",
    goals: 20,
    assists: 6,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 62,
    name: "Player 62",
    goals: 4,
    assists: 5,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 63,
    name: "Player 63",
    goals: 6,
    assists: 8,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 64,
    name: "Player 64",
    goals: 4,
    assists: 6,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 65,
    name: "Player 65",
    goals: 9,
    assists: 4,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 66,
    name: "Player 66",
    goals: 19,
    assists: 11,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 67,
    name: "Player 67",
    goals: 12,
    assists: 6,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 68,
    name: "Player 68",
    goals: 19,
    assists: 4,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 69,
    name: "Player 69",
    goals: 11,
    assists: 4,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 70,
    name: "Player 70",
    goals: 20,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 71,
    name: "Player 71",
    goals: 4,
    assists: 15,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 72,
    name: "Player 72",
    goals: 20,
    assists: 10,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 73,
    name: "Player 73",
    goals: 5,
    assists: 15,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 74,
    name: "Player 74",
    goals: 8,
    assists: 11,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 75,
    name: "Player 75",
    goals: 4,
    assists: 3,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 76,
    name: "Player 76",
    goals: 20,
    assists: 7,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 77,
    name: "Player 77",
    goals: 16,
    assists: 7,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 78,
    name: "Player 78",
    goals: 15,
    assists: 14,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 79,
    name: "Player 79",
    goals: 14,
    assists: 10,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 80,
    name: "Player 80",
    goals: 4,
    assists: 8,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 81,
    name: "Player 81",
    goals: 17,
    assists: 1,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 82,
    name: "Player 82",
    goals: 9,
    assists: 4,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 83,
    name: "Player 83",
    goals: 14,
    assists: 8,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 84,
    name: "Player 84",
    goals: 10,
    assists: 4,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 85,
    name: "Player 85",
    goals: 2,
    assists: 13,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 86,
    name: "Player 86",
    goals: 6,
    assists: 11,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 87,
    name: "Player 87",
    goals: 11,
    assists: 1,
    yellowCards: 0,
    redCards: 1,
  },
  {
    id: 88,
    name: "Player 88",
    goals: 10,
    assists: 6,
    yellowCards: 3,
    redCards: 1,
  },
  {
    id: 89,
    name: "Player 89",
    goals: 10,
    assists: 3,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 90,
    name: "Player 90",
    goals: 1,
    assists: 6,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 91,
    name: "Player 91",
    goals: 2,
    assists: 12,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 92,
    name: "Player 92",
    goals: 3,
    assists: 10,
    yellowCards: 4,
    redCards: 1,
  },
  {
    id: 93,
    name: "Player 93",
    goals: 13,
    assists: 8,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 94,
    name: "Player 94",
    goals: 17,
    assists: 13,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 95,
    name: "Player 95",
    goals: 15,
    assists: 7,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 96,
    name: "Player 96",
    goals: 2,
    assists: 11,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 97,
    name: "Player 97",
    goals: 6,
    assists: 10,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 98,
    name: "Player 98",
    goals: 6,
    assists: 6,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 99,
    name: "Player 99",
    goals: 20,
    assists: 2,
    yellowCards: 2,
    redCards: 0,
  },
  {
    id: 100,
    name: "Player 100",
    goals: 8,
    assists: 14,
    yellowCards: 0,
    redCards: 0,
  },
];

export const matchData = [
  {
    id: 1,
    team1: "Real Madrid",
    team2: "Barcelona",
    date: "2024-01-10",
    time: "15:00",
    location: "Santiago Bernabeu",
  },
  {
    id: 2,
    team1: "Real Madrid",
    team2: "Manchester United",
    date: "2024-01-15",
    time: "18:30",
    location: "Old Trafford",
  },
  {
    id: 3,
    team1: "Manchester United",
    team2: "Bayern Munich",
    date: "2024-01-20",
    time: "20:00",
    location: "Allianz Arena",
  },
];

// Add player details using a loop
export const playersWithDetails = players.map((player) => ({
  ...player,
  ...commonPlayerDetails,
}));

export const mockDataWith30Teams = {
  data: {
    standings: Array.from({ length: 10 }, (_, index) => ({
      team: {
        logos: [{ href: `${teamLogo[index]}` }],
        name: `${teamName[index]}`,
        players: playersWithDetails.slice(index * 11, 11 * (index + 1)),
      },
      stats: [
        { value: Math.floor(Math.random() * 20) + 1 }, // Wins
        { value: Math.floor(Math.random() * 20) + 1 }, // Loss
        { value: Math.floor(Math.random() * 10) + 1 }, // Draws
        { value: Math.floor(Math.random() * 30) + 1 }, // Games
        { value: Math.floor(Math.random() * 40) + 1 }, // GF
        { value: Math.floor(Math.random() * 30) + 1 }, // GA
        { value: Math.floor(Math.random() * 50) + 1 }, // Points
      ],
    })),
  },
};

export const TableComp = ({ season, id, tournament }) => {
  const [rankedTeams, setRankedTeams] = React.useState(
    [...mockDataWith30Teams.data.standings].sort(
      (a, b) => b.stats[6].value - a.stats[6].value
    )
  );
  const [team, setTeam] = React.useState(rankedTeams);
  const [editMode, setEditMode] = React.useState(false);
  const [editedTeam, setEditedTeam] = React.useState(null);

  // useEffect(() => {
  // 	axios.get(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${season}&sort=asc`)
  // 		.then(res => {
  // 			setteam(res.data.data.standings)
  // 		}).catch(err => {
  // 			console.log(err);
  // 		})
  // }, [id, season]);

  const enterEditMode = (selectedTeam) => {
    setEditMode(true);
    setEditedTeam(selectedTeam);
  };

  const handleEditChange = (field, value) => {
    setEditedTeam((prevTeam) => ({
      ...prevTeam,
      stats: prevTeam.stats.map((stat, index) =>
        index === field ? { ...stat, value } : stat
      ),
    }));
  };

  const exitEditMode = () => {
    setEditMode(false);
    setEditedTeam(null);
  };

  const handleSubmit = () => {
    // Find the index of the edited team in rankedTeams
    const editedIndex = team.findIndex(
      (t) => t.team.name === editedTeam.team.name
    );

    if (editedIndex !== -1) {
      // Update the team at the found index with the editedTeam
      const updatedTeams = [...team];
      updatedTeams[editedIndex] = editedTeam;

      // Update the state with the new ranked teams
      setRankedTeams(
        updatedTeams.sort((a, b) => b.stats[6].value - a.stats[6].value)
      );
      setTeam(updatedTeams);
    }

    exitEditMode();
  };

  return (
    <>
      <h1 className="tournament my-4">
        {tournament} - Season {season}
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {editMode ? (
          <EditForm
            editedTeam={editedTeam}
            handleEditChange={handleEditChange}
            exitEditMode={exitEditMode}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Table
            striped
            hover
            responsive
            size={window.innerWidth > 556 ? "xl" : "lg"}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Loss</th>
                <th>Draws</th>
                <th>Games</th>
                <th>GF</th>
                <th>GA</th>
                <th>Points</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {team &&
                team.map((team, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>
                        <img
                          src={team.team.logos[0].href}
                          alt="team logo"
                          width={window.innerWidth > 556 ? 40 : 15}
                          height={window.innerWidth > 556 ? 40 : 15}
                        />
                      </td>
                      <td>{team.team.name}</td>
                      <td>{team.stats[0].value}</td> {/* wins */}
                      <td>{team.stats[1].value}</td> {/* loss */}
                      <td>{team.stats[2].value}</td> {/* draws */}
                      <td>{team.stats[3].value}</td> {/* games */}
                      <td>{team.stats[4].value}</td> {/* GF */}
                      <td>{team.stats[5].value}</td> {/* GA */}
                      <td style={{ fontWeight: "bold" }}>
                        {team.stats[6].value}
                      </td>{" "}
                      {/* points */}
                      <td>
                        <button onClick={() => enterEditMode(team)}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};
