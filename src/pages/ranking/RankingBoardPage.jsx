import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { TableComp } from "../../components/Table";

const RankingBoard = () => {
  const [league, setLeague] = useState();
  const [id, setId] = useState("eng.1");
  const [season, setSeason] = useState("2022");
  const [tournament, setTournament] = useState("Giải bóng đá VĐQG");

  const year = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <div className="d-flex flex-row justify-content-between w-25 m-auto mt-5 text-center">
              <Dropdown>
                <Dropdown.Toggle variant="primary">
                  Select League
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {league &&
                    league.map((league, key) => (
                      <Dropdown.Item
                        key={key}
                        onClick={() => {
                          setId(league.id);
                          setTournament(league.name);
                        }}
                      >
                        {league.name}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary">
                  Select Season
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {year &&
                    year.map((year, key) => (
                      <Dropdown.Item key={key} onClick={() => setSeason(year)}>
                        {year}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <TableComp season={season} id={id} tournament={tournament} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RankingBoard;
