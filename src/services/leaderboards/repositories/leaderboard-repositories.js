import prisma from "../../../../prisma/libs/prisma.js";

class LeaderboardRepositories {
  constructor() {
    this.prisma = prisma;
  }

  async getLeaderboards() {
    const leaderboards = await this.prisma.leaderboards.findMany({
      include: { user: true },
      orderBy: { score: "desc" },
    });

    return leaderboards;
  }
}

export default new LeaderboardRepositories();
