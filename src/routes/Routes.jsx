// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RankingBoard from '../pages/ranking/RankingBoardPage';
import { TeamPage } from '../pages/team/TeamPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingBoard />} />
      <Route path="/teams" element={<TeamPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default MainRoutes;
