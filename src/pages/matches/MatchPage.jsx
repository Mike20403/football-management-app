import { Container, Tab, Tabs } from "react-bootstrap";


const MatchPage = () => {
	return (
		<>
			<Container className="text-dark">
				<Tabs
					justify
					defaultActiveKey="round1"
					id="uncontrolled-tab-example"
					className="mb-3 text-dark text-center align-items-center">
					<Tab eventKey="round1" title="Vòng 1">
						Tab content for Vòng 1
					</Tab>
					<Tab
						eventKey="round2" title="Vòng 2">
						Tab content for Vòng 2
					</Tab>
					<Tab eventKey="round3" title="Vòng 3" >
						Tab content for Vòng 3
					</Tab>
					<Tab eventKey="round4" title="Vòng 4" >
						Tab content for Vòng 4
					</Tab>
					<Tab eventKey="round5" title="Vòng 5" >
						Tab content for Vòng 5
					</Tab>
					<Tab eventKey="round6" title="Vòng 6" >
						Tab content for Vòng 6
					</Tab>
					<Tab eventKey="round7" title="Vòng 7" >
						Tab content for Vòng 7
					</Tab>
					<Tab eventKey="round8" title="Vòng 8" >
						Tab content for Vòng 8
					</Tab>
					<Tab eventKey="round9" title="Vòng 9" >
						Tab content for Vòng 9
					</Tab>
					<Tab eventKey="round10" title="Vòng 10" >
						Tab content for Vòng 10
					</Tab>
					

				</Tabs>
			</Container>
		</>
	)
}


export default MatchPage;