import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { matchData } from "../../components/Table";

const Schedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [tempMatchData, setTempMatchData] = useState(matchData);
  const [id, setId] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const handleMatchClick = (match) => {
    setIsAdd(false);
    setId(match.id);
    setTeam1(match.team1);
    setTeam2(match.team2);
    setDate(match.date);
    setTime(match.time);
    setLocation(match.location);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    const index = tempMatchData.findIndex((item) => item.id === id);

    const changeMatchData = [...tempMatchData];
    console.log(typeof date);
    const match = {
      id: index + 1,
      team1: team1,
      team2: team2,
      date: date,
      time: time,
      location: location,
    };
    changeMatchData[index] = match;
    setTempMatchData(changeMatchData);
    setShowModal(false);
  };

  const handleAddMatch = () => {
    setIsAdd(true);
    setId("");
    setTeam1("");
    setTeam2("");
    setDate("");
    setTime("");
    setLocation("");
    setShowModal(true);
  };

  const handleAddToList = () => {
    const match = {
      id: tempMatchData.length + 1,
      team1: team1,
      team2: team2,
      date: date,
      time: time,
      location: location,
    };

    const changeMatchData = [...tempMatchData];
    changeMatchData.push(match);
    setTempMatchData(changeMatchData);
    setShowModal(false);
  };

  const handleDeleteClick = (id) => {
    setShowModal(false);
    const updatedMatchData = tempMatchData.filter((match) => match.id !== id);
    setTempMatchData(updatedMatchData);
    setShowModal(false);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col xs={2} className="h1 m-0">
          Schedule
        </Col>
        <Col>
          <Button variant="primary" onClick={handleAddMatch}>
            Add
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isAdd ? "Add match" : "Model edit"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Thêm các trường thông tin cần chỉnh sửa vào đây */}
            <Form.Group controlId="formTeam1">
              <Form.Label>Team 1</Form.Label>
              <Form.Control
                type="text"
                value={team1}
                onChange={(e) => setTeam1(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTeam2">
              <Form.Label>Team 2</Form.Label>
              <Form.Control
                type="text"
                value={team2}
                onChange={(e) => setTeam2(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          {isAdd ? (
            <Button variant="primary" onClick={handleAddToList}>
              Add match
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSaveChanges}>
              Save change
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Row>
        {tempMatchData.map((match) => (
          <Col key={match.id} lg={4} className="mb-4">
            <Card>
              <Card.Body
                onClick={() => handleMatchClick(match)}
                style={{ cursor: "pointer" }}
              >
                <Card.Title>
                  {match.team1} vs {match.team2}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Date: {match.date} - {match.time}
                </Card.Subtitle>
                <Card.Text>Location: {match.location}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteClick(match.id)}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Schedule;
