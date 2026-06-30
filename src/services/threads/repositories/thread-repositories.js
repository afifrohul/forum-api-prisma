import prisma from "../../../../prisma/libs/prisma.js";

class ThreadRepositories {
  constructor() {
    this.prisma = prisma;
  }

  async createThread({ title, body, category, userId }) {
    const thread = await this.prisma.threads.create({
      data: {
        title,
        body,
        category,
        userId,
      },
    });

    const leaderboardUser = await this.prisma.leaderboards.findFirst({
      where: { userId },
    });

    await this.prisma.leaderboards.update({
      where: { userId },
      data: { score: Number(leaderboardUser.score + 1) },
    });

    const detailThread = await this.getDetailThread(thread.id);

    return detailThread;
  }

  async getAllThreads() {
    const threads = await this.prisma.threads.findMany({
      include: {
        comments: true,
        threadVotes: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return threads;
  }

  async getDetailThread(id) {
    const thread = await this.prisma.threads.findUnique({
      where: { id },
      include: {
        user: true,
        threadVotes: true,
        comments: {
          include: {
            user: true,
            commentVotes: true,
          },
        },
      },
    });

    return thread;
  }
}

export default new ThreadRepositories();
