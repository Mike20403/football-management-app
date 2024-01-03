import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap"
import EditForm from "./forms/EditRankingForm";

export const teamName = ['Liverpool', 'Manchester United', 'Tottenham', 'West Ham', 'Brighton', 'Newcastle', 'FullHam', 'Crystal Palace', 'Chelsea', 'Wolves']
export const teamLogo = ['https://upload.wikimedia.org/wikipedia/vi/thumb/0/0c/Liverpool_FC.svg/175px-Liverpool_FC.svg.png',
	'https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg',
	'https://upload.wikimedia.org/wikipedia/vi/thumb/b/bd/Tottenham_Hotspur_FC.svg/1200px-Tottenham_Hotspur_FC.svg.png',
	'https://upload.wikimedia.org/wikipedia/vi/b/b1/WestHam.png',
	'https://upload.wikimedia.org/wikipedia/vi/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/800px-Brighton_%26_Hove_Albion_logo.svg.png',
	'https://upload.wikimedia.org/wikipedia/vi/0/0d/Newcastle_United_FC.png',
	'https://upload.wikimedia.org/wikipedia/vi/8/8d/Fulham_FC.png',
	'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png',
	'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
	'https://upload.wikimedia.org/wikipedia/vi/6/6c/Wolverhampton_Wanderers.png'
]

export const players = [
	{
		id: 0,
		name: "Mohamed Salah",
		imgUrl: "https://c8.alamy.com/zooms/9/c1cbbbcdeb47431c84e3d9ce476d940c/2jaf9p9.jpg"
	},
	{
		id: 1,
		name: "Sadio Mane",
		imgUrl: "https://themuslim500.com/wp-content/uploads/2020/10/sadio-mane-2022.jpg"
	},
	{
		id: 2,
		name: "Cristiano Ronaldo",
		imgUrl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-971463110.jpg"
	},
	{
		id: 3,
		name: "Lionel Messi",
		imgUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254"
	},
	{
		id: 4,
		name: "Harry Kane",
		imgUrl: "https://i.pinimg.com/736x/32/43/3d/32433dade363bf766c66aeff2f34efbc.jpg"
	},
	{
		id: 5,
		name: "Erling Haland",
		imgUrl: "https://img.uefa.com/imgml/TP/players/1/2024/324x324/250103758.jpg"
	},
	{
		id: 6,
		name: "Kylian-Mbappe",
		imgUrl: "https://s.hs-data.com/bilder/spieler/gross/284095.jpg?fallback=png"
	},
	{
		id: 7,
		name: "Robert Lewandowski",
		imgUrl: "https://i2-prod.football.london/incoming/article21650115.ece/ALTERNATES/s1200c/0_GettyImages-1232099341.jpg"
	},
	{
		id: 8,
		name: "Neymar Jr.",
		imgUrl: "https://www.fifplay.com/img/fifa22/players/190871.png"
	},
	{
		id: 9,
		name: "Kevin De Bruyne",
		imgUrl: "https://i2-prod.football.london/incoming/article20172437.ece/ALTERNATES/s1200/1_GettyImages-1229804668.jpg"
	},
	{
		id: 10,
		name: "Antoine Griezmann",
		imgUrl: "https://i2-prod.football.london/incoming/article20329954.ece/ALTERNATES/s1200/0_GettyImages-1229828455.jpg"
	},
	{
		id: 11,
		name: "Paul Pogba",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article21568716.ece/ALTERNATES/s1200/1_GettyImages-1206514844.jpg"
	},
	{
		id: 12,
		name: "Luis Suarez",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article19554290.ece/ALTERNATES/s1200/0_GettyImages-1268930087.jpg"
	},
	{
		id: 13,
		name: "Raheem Sterling",
		imgUrl: "https://i2-prod.birminghammail.co.uk/incoming/article20378192.ece/ALTERNATES/s1200/0_GettyImages-1311620861.jpg"
	},
	{
		id: 14,
		name: "Gareth Bale",
		imgUrl: "https://i2-prod.football.london/incoming/article21470364.ece/ALTERNATES/s1200/1_GettyImages-1230183366.jpg"
	},
	{
		id: 15,
		name: "Bruno Fernandes",
		imgUrl: "https://i2-prod.football.london/incoming/article19875786.ece/ALTERNATES/s1200/0_GettyImages-1268587780.jpg"
	},
	{
		id: 16,
		name: "Sergio Ramos",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article22866141.ece/ALTERNATES/s1200/0_GettyImages-1228279399.jpg"
	},
	{
		id: 17,
		name: "Virgil van Dijk",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article20165974.ece/ALTERNATES/s1200/0_GettyImages-1297898567.jpg"
	},
	{
		id: 18,
		name: "Alisson Becker",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24092961.ece/ALTERNATES/s1200/0_GettyImages-1230581601.jpg"
	},
	{
		id: 19,
		name: "Thiago Alcantara",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article19796410.ece/ALTERNATES/s1200/0_GettyImages-1301931765.jpg"
	},
	{
		id: 20,
		name: "Eduardo Camavinga",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24770009.ece/ALTERNATES/s1200/0_GettyImages-1346160305.jpg"
	},
	{
		id: 21,
		name: "Jadon Sancho",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article21000766.ece/ALTERNATES/s1200/0_GettyImages-1326111324.jpg"
	},
	{
		id: 22,
		name: "Hakim Ziyech",
		imgUrl: "https://i2-prod.football.london/incoming/article21346495.ece/ALTERNATES/s1200/0_GettyImages-1329381841.jpg"
	},
	{
		id: 23,
		name: "Andrew Robertson",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg"
	},
	{
		id: 24,
		name: "Joao Cancelo",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article23234589.ece/ALTERNATES/s1200/1_GettyImages-1359820724.jpg"
	},
	{
		id: 25,
		name: "Frenkie de Jong",
		imgUrl: "https://i2-prod.football.london/incoming/article23591265.ece/ALTERNATES/s1200/0_GettyImages-1357853159.jpg"
	},
	{
		id: 26,
		name: "Son Heung-min",
		imgUrl: "https://i2-prod.football.london/incoming/article20347078.ece/ALTERNATES/s1200/0_GettyImages-1232958319.jpg"
	},
	{
		id: 27,
		name: "Jamie Vardy",
		imgUrl: "https://i2-prod.football.london/incoming/article19140472.ece/ALTERNATES/s1200/0_GettyImages-1219978724.jpg"
	},
	{
		id: 28,
		name: "Kai Havertz",
		imgUrl: "https://i2-prod.football.london/incoming/article24770084.ece/ALTERNATES/s1200/0_GettyImages-1346161765.jpg"
	},
	{
		id: 29,
		name: "Gianluigi Donnarumma",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24151323.ece/ALTERNATES/s1200/0_GettyImages-1234181969.jpg"
	},
	{
		id: 30,
		name: "Romelu Lukaku",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article23293408.ece/ALTERNATES/s1200/0_GettyImages-1362788193.jpg"
	},
	{
		id: 31,
		name: "Ciro Immobile",
		imgUrl: "https://i2-prod.football.london/incoming/article24770016.ece/ALTERNATES/s1200/0_GettyImages-1346160534.jpg"
	},
	{
		id: 32,
		name: "Lautaro Martinez",
		imgUrl: "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg"
	},
	{
		id: 33,
		name: "Riyad Mahrez",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg"
	},
	{
		id: 34,
		name: "Marc-André ter Stegen",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 35,
		name: "Lorenzo Insigne",
		imgUrl: "https://i2-prod.football.london/incoming/article24770037.ece/ALTERNATES/s1200/0_GettyImages-1346160668.jpg"
	},
	{
		id: 36,
		name: "Marquinhos",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article22987073.ece/ALTERNATES/s1200/1_GettyImages-1228279126.jpg"
	},
	{
		id: 37,
		name: "Keylor Navas",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 38,
		name: "Andrew Robertson",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg"
	},
	{
		id: 39,
		name: "Sergio Ramos",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article22866141.ece/ALTERNATES/s1200/0_GettyImages-1228279399.jpg"
	},
	{
		id: 40,
		name: "Luka Modric",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 41,
		name: "Vinicius Jr.",
		imgUrl: "https://i2-prod.football.london/incoming/article24770037.ece/ALTERNATES/s1200/0_GettyImages-1346160668.jpg"
	},
	{
		id: 42,
		name: "Ederson",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 43,
		name: "Ruben Dias",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 44,
		name: "Federico Chiesa",
		imgUrl: "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg"
	},
	{
		id: 45,
		name: "Georginio Wijnaldum",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article23591304.ece/ALTERNATES/s1200/0_GettyImages-1357887046.jpg"
	},
	{
		id: 46,
		name: "Federico Valverde",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 47,
		name: "Kai Havertz",
		imgUrl: "https://i2-prod.football.london/incoming/article24770084.ece/ALTERNATES/s1200/0_GettyImages-1346161765.jpg"
	},
	{
		id: 48,
		name: "Jack Grealish",
		imgUrl: "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg"
	},
	{
		id: 49,
		name: "Marcus Rashford",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 50,
		name: "Mason Mount",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	}, {
		id: 51,
		name: "Antoine Griezmann",
		imgUrl: "https://i2-prod.football.london/incoming/article23591304.ece/ALTERNATES/s1200/0_GettyImages-1357887046.jpg"
	},
	{
		id: 52,
		name: "Phil Foden",
		imgUrl: "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg"
	},
	{
		id: 53,
		name: "Roberto Firmino",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg"
	},
	{
		id: 54,
		name: "Thiago Alcantara",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 55,
		name: "Bernardo Silva",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 56,
		name: "Trent Alexander-Arnold",
		imgUrl: "https://i2-prod.liverpoolecho.co.uk/incoming/article24042274.ece/ALTERNATES/s1200/0_GettyImages-1336450621.jpg"
	},
	{
		id: 57,
		name: "Jadon Sancho",
		imgUrl: "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg"
	},
	{
		id: 58,
		name: "Aymeric Laporte",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article23591304.ece/ALTERNATES/s1200/0_GettyImages-1357887046.jpg"
	},
	{
		id: 59,
		name: "Hakim Ziyech",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 60,
		name: "Rodri",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 61,
		name: "Paul Pogba",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg"
	},
	{
		id: 62,
		name: "Bruno Fernandes",
		imgUrl: "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg"
	},
	{
		id: 63,
		name: "Nicolas Pepe",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 64,
		name: "Raphael Varane",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 65,
		name: "Marcus Rashford",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 66,
		name: "Mason Mount",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 67,
		name: "N'Golo Kanté",
		imgUrl: "https://i2-prod.football.london/incoming/article24770037.ece/ALTERNATES/s1200/0_GettyImages-1346160668.jpg"
	},
	{
		id: 68,
		name: "Christian Pulisic",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 69,
		name: "James Maddison",
		imgUrl: "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg"
	},
	{
		id: 70,
		name: "Wilfred Ndidi",
		imgUrl: "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg"
	},
	{
		id: 71,
		name: "Youri Tielemans",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 72,
		name: "Harvey Barnes",
		imgUrl: "https://i2-prod.birminghammail.co.uk/incoming/article24617146.ece/ALTERNATES/s1200/1_GettyImages-1338340347.jpg"
	},
	{
		id: 73,
		name: "Riyad Mahrez",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg"
	},
	{
		id: 74,
		name: "Kevin De Bruyne",
		imgUrl: "https://i2-prod.football.london/incoming/article24682755.ece/ALTERNATES/s1200/0_GettyImages-1340507749.jpg"
	}, {
		id: 75,
		name: "Phil Foden",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 76,
		name: "Jack Grealish",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 77,
		name: "Riyad Mahrez",
		imgUrl: "https://i2-prod.football.london/incoming/article24151323.ece/ALTERNATES/s1200/0_GettyImages-1234181969.jpg"
	},
	{
		id: 78,
		name: "Ruben Dias",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 79,
		name: "John Stones",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 80,
		name: "Kyle Walker",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 81,
		name: "João Cancelo",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 82,
		name: "Rodri",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 83,
		name: "Kevin De Bruyne",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 84,
		name: "Bernardo Silva",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 85,
		name: "Fernandinho",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 86,
		name: "Philipp Lahm",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 87,
		name: "Andres Iniesta",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 88,
		name: "Xavi Hernandez",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 89,
		name: "Luis Suarez",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 90,
		name: "Zlatan Ibrahimovic",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 91,
		name: "David Alaba",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 92,
		name: "Leroy Sane",
		imgUrl: "https://i2-prod.mirror.co.uk/incoming/article22694576.ece/ALTERNATES/s1200/0_GettyImages-1219261044.jpg"
	},
	{
		id: 93,
		name: "Kai Havertz",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 94,
		name: "Timo Werner",
		imgUrl: "https://i2-prod.football.london/incoming/article24770045.ece/ALTERNATES/s1200/0_GettyImages-1346160745.jpg"
	},
	{
		id: 95,
		name: "Mason Mount",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 96,
		name: "Hakim Ziyech",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 97,
		name: "Christian Pulisic",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	},
	{
		id: 98,
		name: "Romelu Lukaku",
		imgUrl: "https://i2-prod.manchestereveningnews.co.uk/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 99,
		name: "Eden Hazard",
		imgUrl: "https://i2-prod.football.london/incoming/article24151331.ece/ALTERNATES/s1200/0_GettyImages-1233466489.jpg"
	},
	{
		id: 100,
		name: "Thibaut Courtois",
		imgUrl: "https://i2-prod.football.london/incoming/article24151312.ece/ALTERNATES/s1200/0_GettyImages-1232695412.jpg"
	}
]

const commonPlayerDetails = {
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
				players: playersWithDetails.slice(index * 11, 11 * (index + 1))
			},
			stats: [
				{ value: Math.floor(Math.random() * 20) + 1 },  // Wins
				{ value: Math.floor(Math.random() * 20) + 1 },  // Loss
				{ value: Math.floor(Math.random() * 10) + 1 },  // Draws
				{ value: Math.floor(Math.random() * 30) + 1 },  // Games
				{ value: Math.floor(Math.random() * 40) + 1 },  // GF
				{ value: Math.floor(Math.random() * 30) + 1 },  // GA
				{ value: Math.floor(Math.random() * 50) + 1 },  // Points
			],
		})),
	},
};

export const TableComp = ({ season, id, tournament }) => {
	const [rankedTeams, setRankedTeams] = React.useState([...mockDataWith30Teams.data.standings].sort((a, b) => b.stats[6].value - a.stats[6].value));
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
		setEditedTeam(prevTeam => ({ ...prevTeam, stats: prevTeam.stats.map((stat, index) => (index === field ? { ...stat, value } : stat)) }));
	};

	const exitEditMode = () => {
		setEditMode(false);
		setEditedTeam(null);
	};

	const handleSubmit = () => {
		// Find the index of the edited team in rankedTeams
		const editedIndex = team.findIndex((t) => t.team.name === editedTeam.team.name);

		if (editedIndex !== -1) {
			// Update the team at the found index with the editedTeam
			const updatedTeams = [...team];
			updatedTeams[editedIndex] = editedTeam;

			// Update the state with the new ranked teams
			setRankedTeams(updatedTeams.sort((a, b) => b.stats[6].value - a.stats[6].value));
			setTeam(updatedTeams);
			
		}

		exitEditMode();

	};

	return (
		<>
			<h1 className='tournament my-4'>{tournament} - Season {season}</h1>

			<div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				{editMode ? (
					<EditForm
						editedTeam={editedTeam}
						handleEditChange={handleEditChange}
						exitEditMode={exitEditMode}
						handleSubmit={handleSubmit}
					/>
				) : (
					<Table striped hover responsive size={window.innerWidth > 556 ? 'xl' : 'lg'}>
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
							{team && team.map((team, key) => {
								return (
									<tr key={key}>
										<td>{key + 1}</td>
										<td><img src={team.team.logos[0].href} alt='team logo' width={window.innerWidth > 556 ? 40 : 15} height={window.innerWidth > 556 ? 40 : 15} /></td>
										<td>{team.team.name}</td>
										<td>{team.stats[0].value}</td> {/* wins */}
										<td>{team.stats[1].value}</td> {/* loss */}
										<td>{team.stats[2].value}</td> {/* draws */}
										<td>{team.stats[3].value}</td> {/* games */}
										<td>{team.stats[4].value}</td> {/* GF */}
										<td>{team.stats[5].value}</td> {/* GA */}
										<td style={{ fontWeight: 'bold' }}>{team.stats[6].value}</td> {/* points */}
										<td>
											<button onClick={() => enterEditMode(team)}>Edit</button>
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
}
