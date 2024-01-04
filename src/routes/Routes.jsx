import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RulePage from "../pages/rule/RulePage";
import RankingBoard from "../pages/ranking/RankingBoardPage";
import { TeamPage } from "../pages/team/TeamPage";
import PlayerDetails from "../pages/player/PlayerDetail";
import PlayerStatistics from "../pages/playerStatistics/playerStatistics";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingBoard />} />
      <Route path="/rules" element={<RulePage />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/teams" element={<TeamPage />} />
      <Route path="/player/:id/details" element={<PlayerDetails />}></Route>
      <Route path="/player-statistics" element={<PlayerStatistics />}></Route>

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default MainRoutes;
