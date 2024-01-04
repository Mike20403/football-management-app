import { Container, Tab, Tabs } from "react-bootstrap";
import Round from "../../components/Round";
import { rounds } from "./roundsData";
import { useState } from "react";

const MatchPage = () => {
	const [totalRounds, setRounds] = useState(rounds);
	return (
		<>
			<Container className="text-dark">
				<Tabs justify
					defaultActiveKey="round1"
					id="uncontrolled-tab-example"
					className="mb-3 text-dark text-center align-items-center" >
					{totalRounds.map((round, index) => {
						return (
							<Tab eventKey={`round${index + 1}`} title={`Vòng ${index + 1}`}>
								<Round round={rounds[index]}>
							
								</Round>
							</Tab>
						)
					})
					}
				
				</Tabs>
			</Container>
		</>
	)
}


export default MatchPage;