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

    return thread;
  }

  async getAllThreads() {
    const threads = await this.prisma.threads.findMany();

    return threads;
  }

  async getDetailThread(id) {
    const thread = await this.prisma.threads.findUnique({
      where: { id },
      include: { user: true },
    });

    return thread;
  }
}

export default new ThreadRepositories();
