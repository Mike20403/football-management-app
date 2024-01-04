// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RulePage from '../pages/rule/RulePage';
import RankingBoard from '../pages/ranking/RankingBoardPage';
import { TeamPage } from '../pages/team/TeamPage';
import PlayerDetails from '../pages/player/PlayerDetail';
import MatchPage from '../pages/matches/MatchPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingBoard />} />
      <Route path="/rules" element={<RulePage />} />
      <Route path="/matches" element={<MatchPage />} />
      <Route path="/teams" element={<TeamPage />} />
      <Route path="/player/:id/details" element={<PlayerDetails />}></Route>
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default MainRoutes;
