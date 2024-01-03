import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap"
import EditForm from "./forms/EditRankingForm";

const teamName = ['Liverpool', 'Manchester United', 'Tottenham', 'West Ham', 'Brighton', 'Newcastle', 'FullHam', 'Crystal Palace', 'Chelsea', 'Wolves']
const teamLogo = ['https://upload.wikimedia.org/wikipedia/vi/thumb/0/0c/Liverpool_FC.svg/175px-Liverpool_FC.svg.png',
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

const mockDataWith30Teams = {
	data: {
		standings: Array.from({ length: 10 }, (_, index) => ({
			team: {
				logos: [{ href: `${teamLogo[index]}` }],
				name: `${teamName[index]}`,
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

const TableComp = ({ season, id, tournament }) => {
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

export default TableComp;