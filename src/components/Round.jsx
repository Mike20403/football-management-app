import dayjs from "dayjs";
import { Accordion } from "react-bootstrap";

const Round = ({ round }) => {
	// console.log(round)
	const matchesByStartDate = round.matches.reduce((acc, match) => {
		const startDate = match.startDate.format('DD/MM/YYYY'); // Format the date as needed
		const startTime = match.startDate.format('hh:mm A');
		if (!acc[startDate]) {
			acc[startDate] = [];
		}

		acc[startDate].push(match);

		return acc;
	}, []);

	const keys = Object.keys(matchesByStartDate);
	console.log(matchesByStartDate);
	
	



	return (<>
		{keys.map((item, index) => {
			
			return (
				<Accordion className="mt-4">
					{
					
						<>
							<Accordion.Item eventKey={index + 1}>
								<Accordion.Header>{`Ngày thi đấu ${index + 1} - ${item}`}</Accordion.Header>
								<Accordion.Body>
									{
										matchesByStartDate[item].map((match, index) => {
											return (
												<>
													<div className="d-flex justify-content-between align-items-center">
														<p className="d-inline-block">{match.startDate.format('hh:mm A')}</p>
														<p className="d-inline-block"><p className="me-3 d-inline-block">Team A</p>   {match.homeTeam.goals} - {match.guestTeam.goals}  <p className="ms-3 d-inline-block">Team B</p></p>
														<p></p>
													</div>
												</>
											)
										})
									}
									
									
								</Accordion.Body>
							</Accordion.Item>
						</>
								
								
								
						
					
					}
						
				</Accordion >
			)
		})
		}
	</>)	
}

export default Round;