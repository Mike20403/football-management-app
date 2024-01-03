// ClubHistoryTimeline.jsx
import React from 'react';
import { Row, Col, Card, Image, CardTitle, CardBody } from 'react-bootstrap';

const clubsLogo = ['https://upload.wikimedia.org/wikipedia/vi/thumb/0/0c/Liverpool_FC.svg/175px-Liverpool_FC.svg.png',
  'https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg',
  'https://upload.wikimedia.org/wikipedia/vi/thumb/b/bd/Tottenham_Hotspur_FC.svg/1200px-Tottenham_Hotspur_FC.svg.png']

const ClubHistoryTimeline = ({ clubs }) => {
  return (
    <> 

      <Card className='p-3 mt-4'>
        <CardTitle> 
          <h3>Clubs History: </h3>
        </CardTitle>
        <CardBody>
          <Row >
            {clubs.map((club, index) => (
              <Col key={index} md={4} className="mb-3 d-flex p-0 align-items-center">         
                <Card className='p-0' >
                  <Card.Header className="text-center">
                    <Image
                      src={clubsLogo[index]}
                      style={{
                        width: "50px",
                        height: "50px"
                      }}
                      alt={`Club ${index + 1}`}
                      fluid
                      className="timeline-image"
                    />
                  </Card.Header>
                  <Card.Body style={{
                    width: "100%",
                    textAlign: "center",
                    height: "3rem"
                  }}>
                    <p style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap"
                    }}>{club}</p>
                  </Card.Body>
            
                </Card>
                {index != clubs.length - 1 ? 
                  <h6 style={{
                    whiteSpace: "nowrap",

                  }}>{"----->"}</h6> : null}
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
     
      
    </>
    
  );
};

export default ClubHistoryTimeline;
