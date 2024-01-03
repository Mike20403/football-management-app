import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { mockDataWith30Teams } from '../../components/Table';
import { useNavigate } from 'react-router-dom';

const teams = mockDataWith30Teams.data.standings;

export const TeamPage = () => {
	const navigate = useNavigate();
	const [selectedTeam, setSelectedTeam] = useState(undefined);

	const loadTeamPlayer = (id) => {
		setSelectedTeam(teams[id]);
	}


	return (
		<Container className="mt-4">
			<Row>
				{/* First Column: List of Teams */}
				<Col md={3}>
					<h2>Teams</h2>
					<ListGroup >
						{teams.map((team, index) => (
							<ListGroup.Item action href={`#link${index}`} 
								onClick={() => loadTeamPlayer(index)}
								key={index}>{team.team.name}</ListGroup.Item>
						))}
					</ListGroup>
				</Col>

				{/* Second Column: Grid List of Players */}
				<Col md={9}>
					<h2>Players</h2>
					<Row>
						{
							selectedTeam ?
								selectedTeam.team.players.map(player => (
									<Col key={player.id} md={3} className="mb-4">
										<Card style={{
											cursor: "pointer"
										}} onClick={() => navigate(`/player/${player.id}/details`)}>
											<Card.Img variant="top" 
												onError={(e) => e.currentTarget.src = "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"}
												style={{
													width: "100%",
													height: "200px"
												}} src={player.imgUrl} alt={player.name} />
											<Card.Body>
												<Card.Title>{player.name}</Card.Title>
											</Card.Body>
										</Card>
									</Col>
								)) : (<Col md={12} style={{ 
									marginTop: '30px',
									textAlign: 'center'
								}}>
									<h2 style={{
										color: "gray"
									}}>Please pick a Team to shows Player List</h2>
								</Col>)
						}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};


