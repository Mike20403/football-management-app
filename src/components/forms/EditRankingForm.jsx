import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const EditForm = ({ editedTeam, handleEditChange, exitEditMode, handleSubmit }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formWins">
          <Form.Label>Wins:</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[0].value}
            onChange={(e) => handleEditChange(0, e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formLoss">
          <Form.Label>Loss:</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[1].value}
            onChange={(e) => handleEditChange(1, e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formDraws">
          <Form.Label>Draws:</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[2].value}
            onChange={(e) => handleEditChange(2, e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGames">
          <Form.Label>Games:</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[3].value}
            onChange={(e) => handleEditChange(3, e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGF">
          <Form.Label>Goals For (GF):</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[4].value}
            onChange={(e) => handleEditChange(4, e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGA">
          <Form.Label>Goals Against (GA):</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[5].value}
            onChange={(e) => handleEditChange(5, e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formPoints">
          <Form.Label>Points:</Form.Label>
          <Form.Control
            type="number"
            value={editedTeam.stats[6].value}
            onChange={(e) => handleEditChange(6, e.target.value)}
          />
        </Form.Group>
      </Row>

      {/* Add similar input fields for other stats */}

      <Button variant="secondary" type="button" onClick={exitEditMode} className="me-2">
        Cancel
      </Button>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default EditForm;
