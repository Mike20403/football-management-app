// PlayerDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { playersWithDetails } from '../../components/Table';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import PlayerInfoCard from '../../components/PlayerInfoCard';
import ClubHistoryTimeline from '../../components/ClubHistoryTimeline';

const PlayerDetails = () => {
  const { id } = useParams();
  const player = playersWithDetails.find((p) => p.id === parseInt(id, 10));
  console.log(player);

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={4}>
          <Card className='p-3'>
            <Card.Img
              variant="top"
              onError={(e) =>
              (e.currentTarget.src =
                'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg')
              }
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
              }}
              src={player.imgUrl}
              alt={player.name}
            />
          </Card>
          <ClubHistoryTimeline clubs={[...player.previousClubs, player.currentClub]} />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body className='p-4'>
              <Card.Title className="mb-4 d-flex align-items-center">
                <h1 className="d-inline-block">{player.name}</h1>
                <Badge variant="primary" style={{
                  fontSize: "1.5rem"
                }} className="ms-3">
                  #{player.jerseyNumber}
                </Badge>
              </Card.Title>

              {/* Personal Information */}
              <h4 className="mt-5">Personal Information</h4>
              <Row>
                <Col md={4}>
                  <PlayerInfoCard title="Age" value={player.age} />
                </Col>
                <Col md={4}>
                  <PlayerInfoCard title="Family" value={player.family} />
                </Col>
                <Col md={4}>
                  <PlayerInfoCard title="Hometown" value={player.hometown} />
                </Col>
              </Row>

              {/* Football Stats */}
              <h4 className="mt-5">Football Stats</h4>
              <Row>
                <Col md={3}>
                  <PlayerInfoCard title="Total Score" value={player.totalScore} />
                </Col>
                <Col md={3}>
                  <PlayerInfoCard title="Assist Rate" value={player.assistRate} />
                </Col>
                <Col md={3}>
                  <PlayerInfoCard title="Assist Goals" value={player.assistGoals} />
                </Col>
                <Col md={3}>
                  <PlayerInfoCard title="Goals Scored" value={player.goalsScored} />
                </Col>
              </Row>

              {/* Physical Attributes */}
              <h4 className="mt-5">Physical Attributes</h4>
              <Row>
                <Col md={6}>
                  <PlayerInfoCard title="Height" value={player.height} />
                </Col>
                <Col md={6}>
                  <PlayerInfoCard title="Weight" value={player.weight} />
                </Col>
              </Row>

              {/* Club and International Details */}
              <h4 className="mt-5">Club and International Details</h4>
              <Row>
                <Col md={6}>
                  <PlayerInfoCard title="Current Club" value={player.currentClub} />
                </Col>
                <Col md={6}>
                  <PlayerInfoCard title="Previous Clubs" value={player.previousClubs.join(', ')} />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <PlayerInfoCard title="International Caps" value={player.internationalCaps} />
                </Col>
                <Col md={6}>
                  <PlayerInfoCard title="International Goals" value={player.internationalGoals} />
                </Col>
              </Row>
              {/* Add more Club and International Details fields as needed */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerDetails;
