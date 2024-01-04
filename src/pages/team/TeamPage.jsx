import { commonPlayerDetails, players, playersWithDetails } from '../../components/Table';
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Button, Form, Modal, Toast, ToastContainer, FormControl } from 'react-bootstrap';
import { mockDataWith30Teams } from '../../components/Table';
import { useNavigate } from 'react-router-dom';
import RemoveConfirmDialog from '../../components/forms/RemoveConfirmFormDialog';

const teamsData = mockDataWith30Teams.data.standings;

export const TeamPage = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [teams, setTeams] = useState(teamsData);
	const [selectedTeam, setSelectedTeam] = useState(undefined);
	const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);
	const [newPlayerData, setNewPlayerData] = useState({
		...commonPlayerDetails,
		id: playersWithDetails.length,
		name: '',
		imgUrl: '',
		// Add other fields as needed
	});

	const [showRemoveDialog, setShowRemoveDialog] = useState(false);
	const [selectedPlayer, setSelectedPlayer] = useState(null);
	const [showAddTeam, toggleShowAddTeam] = useState(false);

	const handleAddTeam = (teamName) => {
		if (!teamName) return;
		console.log([...teams, {
			team: {
				logos: [{ href: `https://validuspharma.com/wp-content/uploads/2019/06/nologo.png` }],
				name: `${teamName}`,
				players: [],
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
		}])
		setTeams([...teams, {
			team: {
				logos: [{ href: `https://validuspharma.com/wp-content/uploads/2019/06/nologo.png` }],
				name: `${teamName}`,
				players: [],
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
		}])
	}

	const handleRemoveConfirm = () => {
		// Add logic to handle removal (e.g., delete the team)
		console.log(`Successfully removed: ${selectedPlayer.name}`);
		setSelectedTeam({
			...selectedTeam, team: {
				...selectedTeam.team, players: [...selectedTeam.team.players].filter(
					e => e.id != selectedPlayer.id
				)
			}
		})
		// Close the dialog
		setShowRemoveDialog(false);
	};

	const handleRemoveCancel = () => {
		// Cancel removal
		setShowRemoveDialog(false);
	};

	const handleRemoveClick = () => {
		// Set the selected team and show the remove dialog
		setSelectedTeam(selectedTeam); // Replace with actual data
		setShowRemoveDialog(true);
	};


	const toggleShowA = () => setShowA(!showA);

	const loadTeamPlayer = (id) => {
		setSelectedTeam(teams[id]);
	};

	const handleAddPlayerClick = () => {
		if (!selectedTeam) {
			return setShow(true);
		}
		setShowAddPlayerModal(true);
	};

	const handleAddPlayerModalClose = () => {
		setShowAddPlayerModal(false);
		// Reset the form data when the modal is closed
		setNewPlayerData({
			...commonPlayerDetails,
			id: playersWithDetails.length,
			age: 0,
			name: '',
			imgUrl: ''
			// Reset other fields as needed
		});
	};

	const handleAddPlayerFormSubmit = (e) => {
		e.preventDefault();
		// Add logic to handle form submission, e.g., send data to the server
		// Reset the form data after submission
		console.log({ ...selectedTeam, team: { ...selectedTeam.team, players: [...selectedTeam.team.players, newPlayerData] } })
		
		setSelectedTeam({ ...selectedTeam, team: { ...selectedTeam.team, players: [...selectedTeam.team.players, newPlayerData] } });
		playersWithDetails.push(newPlayerData);
		// Reset the form data when the modal is closed
		setNewPlayerData({
			...commonPlayerDetails,
			id: playersWithDetails.length,
			age: 0,
			name: '',
			imgUrl: ''
			// Reset other fields as needed
		});

		// Close the modal
		setShowAddPlayerModal(false);
	};

	const variant = 'Danger';

	return (

		<Container className="mt-4">
			<RemoveConfirmDialog
				show={showRemoveDialog}
				onHide={handleRemoveCancel}
				onConfirm={handleRemoveConfirm}
				itemName={selectedPlayer ? selectedPlayer.name : ''}
			/>
			<ToastContainer position='bottom-center'>
				<Toast
					onClose={() => setShow(false)} show={show} delay={3000} autohide
					className="d-inline-block m-1"
					bg={variant.toLowerCase()}
					key={'1'}
				>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto">Alert</strong>
						<small>11 mins ago</small>
					</Toast.Header>
					<Toast.Body className={'text-white'}>
						Please choose a team on your left before adding a player!!
					</Toast.Body>
				</Toast>
			</ToastContainer>
			<Row className='d-flex justify-content-end'>
				<Button className='d-inline-block' style={{ width: "10rem" }} onClick={handleAddPlayerClick}>
					Thêm cầu thủ
				</Button>
			</Row>

			{/* Add Player Modal */}
			<Modal show={showAddPlayerModal} onHide={handleAddPlayerModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Thêm cầu thủ</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleAddPlayerFormSubmit}>
						<Form.Group controlId="name">
							<Form.Label>Tên cầu thủ</Form.Label>
							<Form.Control
								type="text"
								placeholder="Nhập tên cầu thủ"
								value={newPlayerData.name}
								onChange={(e) => setNewPlayerData({ ...newPlayerData, name: e.target.value })}
							/>
						</Form.Group>

						<Form.Group controlId="age">
							<Form.Label>Tuổi</Form.Label>
							<Form.Control
								type="text"
								placeholder="Nhập tuổi"
								value={newPlayerData.age}
								onChange={(e) => setNewPlayerData({ ...newPlayerData, age: e.target.value })}
							/>
						</Form.Group>

						<div style={{
							textAlign: 'center',
							margin: '20px 0',
						}}>
							<img className='text-center'
								onError={(e) =>
								(e.currentTarget.src =
									'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg')
								}
								style={{

									width: '200px',
									height: '200px',
									objectFit: 'cover',
								}}
								src={newPlayerData.imgUrl} />

						</div>
						
								
						
						<Form.Group controlId="imgUrl" >
							<Form.Label>Đường dẫn chân dung:</Form.Label>
							<Form.Control
								type="url"
								placeholder="Đường dẫn chân dung"
								value={newPlayerData.imgUrl}
								onChange={(e) => setNewPlayerData({ ...newPlayerData, imgUrl: e.target.value })}
							/>
						</Form.Group>

						<Form.Group controlId="hometown">
							<Form.Label>Tuổi</Form.Label>
							<Form.Control
								type='text'
								placeholder="Nhập quê quán"
								value={newPlayerData.hometown}
								onChange={(e) => setNewPlayerData({ ...newPlayerData, hometown: e.target.value })}
							/>
						</Form.Group>


						{/* Add other form fields as needed */}
						<div className='d-flex justify-content-end mt-3'>
							<Button variant="primary" type="submit" className='me-4'>
								Thêm cầu thủ
							</Button>
							<Button variant="secondary" onClick={handleAddPlayerModalClose} className="ml-2">
								Đóng
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>

			<Row>
				{/* First Column: List of Teams */}
				<Col md={3}>
					<h2>Teams</h2>
					<ListGroup >
						{teams.map((item, index) => (
							<ListGroup.Item action href={`#link${index}`} 
								onClick={() => loadTeamPlayer(index)}
								key={index}>{item.team.name}</ListGroup.Item>
						))}
						{	

							<>
								<ListGroup.Item hidden={!showAddTeam}>
									<FormControl 
										onBlur={(e) => {
											handleAddTeam(e.target.value);
											toggleShowAddTeam(false)
										}}
									>
									</FormControl>
								</ListGroup.Item>
								<ListGroup.Item 
									hidden={showAddTeam}
									onClick={() => toggleShowAddTeam(true)}

									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "scale(1.05)";
										e.currentTarget.querySelector('.footer-overlay').style.opacity = 1; // Show the footer
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "scale(1)";
										e.currentTarget.querySelector('.footer-overlay').style.opacity = 0; // Hide the footer
									}} 
									style={
										{
											backgroundColor: "gray",
											color: "white",
											cursor: "pointer",
										}}>
									Click to add new Team
								</ListGroup.Item>
							</>
							
						}
					</ListGroup>
				</Col>

				{/* Second Column: Grid List of Players */}
				<Col md={9}>
					<h2>Players</h2>
					<Row>
						{
							selectedTeam ?
								selectedTeam.team.players.map(player => (

									<>
										<Col key={player.id} md={3} className="mb-4">
											<Card style={{
												position: "relative",
												cursor: "pointer",
												transition: "transform 0.2s"
											}} onClick={() => navigate(`/player/${player.id}/details`)}
												onMouseEnter={(e) => {
													e.currentTarget.style.transform = "scale(1.05)";
													e.currentTarget.querySelector('.footer-overlay').style.opacity = 1; // Show the footer
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.transform = "scale(1)";
													e.currentTarget.querySelector('.footer-overlay').style.opacity = 0; // Hide the footer
												}}>
												<Card.Img variant="top" 
													onError={(e) => e.currentTarget.src = "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"}
													style={{
														width: "100%",
														height: "200px"
													}} src={player.imgUrl} alt={player.name} />
												<Card.Body style={{
													marginBottom: "20px"
												}}>
													<Card.Title>{player.name}</Card.Title>
												</Card.Body>


												<Card.Footer
													onClick={(e) => {
														e.stopPropagation();
														setSelectedPlayer(player);
														setShowRemoveDialog(true);
													
													}}
													className="footer-overlay"
													style={{
														backgroundColor: "red",
														color: "white",
														position: "absolute",
														bottom: 0,
														width: '100%',
														left: '0',
														textAlign: 'center',
														opacity: 0, // Initially hidden
														transition: "opacity 0.2s", // Add transition for smooth appearance
													}}
												>
													Loại bỏ cầu thủ
												</Card.Footer>
											</Card>
										</Col>
									</>
									
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

