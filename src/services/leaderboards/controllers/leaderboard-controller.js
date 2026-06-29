import response from "../../../utils/response.js";
import LeaderboardRepositories from "../repositories/leaderboard-repositories.js";

export const getLeaderboards = async (req, res, next) => {
  const leaderboards = await LeaderboardRepositories.getLeaderboards();

  return response(res, 200, "ok", { leaderboards });
};
