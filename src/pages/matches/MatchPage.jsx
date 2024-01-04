import { Container, Tab, Tabs } from "react-bootstrap";


const MatchPage = () => {
	return (
		<>
			<Container className="text-dark">
				<Tabs
					defaultActiveKey="profile"
					id="uncontrolled-tab-example"
					className="mb-3 text-dark">
					<Tab eventKey="home" title="Home">
						Tab content for Home
					</Tab>
					<Tab
						eventKey="profile" title="Profile">
						Tab content for Profile
					</Tab>
					<Tab eventKey="contact" title="Contact" disabled>
						Tab content for Contact
					</Tab>
				</Tabs>
			</Container >
		</>
	)
}


export default MatchPage;