// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import MatchPage from '../pages/matches/MatchPage';
import PlayerDetails from '../pages/player/PlayerDetail';
import PlayerStatistics from "../pages/playerStatistics/playerStatistics";
import RankingBoard from '../pages/ranking/RankingBoardPage';
import RulePage from '../pages/rule/RulePage';
import { TeamPage } from '../pages/team/TeamPage';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingBoard />} />
      <Route path="/rules" element={<RulePage />} />
      <Route path="/matches" element={<MatchPage />} />
      <Route path="/teams" element={<TeamPage />} />
      <Route path="/player/:id/details" element={<PlayerDetails />}></Route>
      <Route path="/player-statistics" element={<PlayerStatistics />}></Route>

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default MainRoutes;
