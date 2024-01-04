import { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import { playerData, players } from "../../components/Table";

// let tempPlayerDate = playerData;

const PlayerStatistics = () => {
  const [topScorers, setTopScorers] = useState([]);
  const [topAssists, setTopAssists] = useState([]);
  const [topYellowCard, setTopYellowCard] = useState([]);
  const [topRedCard, setTopRedCard] = useState([]);
  const [dataSelected, setDataSelected] = useState({});
  const [tempPlayerDate, setTempPlayerDate] = useState(playerData);
  const [type, setType] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Sắp xếp mảng theo số bàn thắng giảm dần
    const sortedByGoals = [...tempPlayerDate].sort((a, b) => b.goals - a.goals);

    // Lấy top 5 cầu thủ có số bàn thắng cao nhất
    const topScorersFiltered = sortedByGoals.slice(0, 5);

    // Sắp xếp mảng theo số lần giúp bàn giảm dần
    const sortedByAssists = [...tempPlayerDate].sort(
      (a, b) => b.assists - a.assists
    );

    // Lấy top 5 cầu thủ có số lần giúp bàn cao nhất
    const topAssistsFiltered = sortedByAssists.slice(0, 5);

    // Sắp xếp mảng theo số thẻ vàng giảm dần
    const sortedByYellowCard = [...tempPlayerDate].sort(
      (a, b) => b.yellowCards - a.yellowCards
    );

    // Lấy top 5 cầu thủ có số thẻ vàng cao nhất
    const topYellowCardFiltered = sortedByYellowCard.slice(0, 5);

    // Sắp xếp mảng theo số thẻ đỏ giảm dần
    const sortedByRedCard = [...tempPlayerDate].sort(
      (a, b) => b.redCards - a.redCards
    );

    // Lấy top 5 cầu thủ có số thẻ đỏ cao nhất
    const topRedCardFiltered = sortedByRedCard.slice(0, 5);

    setTopScorers(topScorersFiltered);
    setTopAssists(topAssistsFiltered);
    setTopYellowCard(topYellowCardFiltered);
    setTopRedCard(topRedCardFiltered);
  }, [tempPlayerDate]);

  const handleEditClick = (data, type) => {
    setDataSelected(data);
    setType(type);
    handleShow();
  };

  const handleSaveData = () => {
    const index = tempPlayerDate.findIndex(
      (item) => item.id === dataSelected.id
    );

    const changePalyerData = [...tempPlayerDate];
    changePalyerData[index] = dataSelected;
    setTempPlayerDate(changePalyerData);
    handleClose();
    // console.log(changePalyerData);

    // console.log(tempPlayerDate);
  };

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNewGoals">
              <Form.Label>New Goals:</Form.Label>
              <Form.Control
                type="number"
                value={
                  type === "goal"
                    ? dataSelected.goals
                    : type === "assist"
                    ? dataSelected.assists
                    : type === "redCard"
                    ? dataSelected.redCards
                    : dataSelected.yellowCards
                }
                onChange={(event) => {
                  if (type === "goal") {
                    const data = {
                      ...dataSelected,
                      goals: parseInt(event.target.value, 10),
                    };
                    console.log(data);
                    setDataSelected(data);
                  } else if (type === "assist") {
                    const data = {
                      ...dataSelected,
                      assists: parseInt(event.target.value, 10),
                    };
                    console.log(data);
                    setDataSelected(data);
                  } else if (type === "yellowCard") {
                    const data = {
                      ...dataSelected,
                      yellowCards: parseInt(event.target.value, 10),
                    };
                    console.log(data);
                    setDataSelected(data);
                  } else {
                    const data = {
                      ...dataSelected,
                      redCards: parseInt(event.target.value, 10),
                    };
                    console.log(data);
                    setDataSelected(data);
                  }
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <p className="h2 my-3">Top players with the most goals</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Goals</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {topScorers.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{players[player.id].name}</td>
              <td>{player.goals}</td>
              <td>
                <Button
                  onClick={() => handleEditClick(player, "goal")}
                  variant="info"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p className="h2 my-3">Top players with the most assists</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Assists</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {topAssists.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{players[player.id].name}</td>
              <td>{player.assists}</td>
              <td>
                <Button
                  onClick={() => handleEditClick(player, "assist")}
                  variant="info"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p className="h2 my-3">Top players with the most yellow card</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Yellow card</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {topYellowCard.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{players[player.id].name}</td>
              <td>{player.yellowCards}</td>
              <td>
                <Button
                  onClick={() => handleEditClick(player, "yellowCard")}
                  variant="info"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p className="h2 my-3">Top players with the most red card</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Red card</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {topRedCard.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{players[player.id].name}</td>
              <td>{player.redCards}</td>
              <td>
                <Button
                  onClick={() => handleEditClick(player, "redCard")}
                  variant="info"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PlayerStatistics;
