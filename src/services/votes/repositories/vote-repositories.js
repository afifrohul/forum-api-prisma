import prisma from "../../../../prisma/libs/prisma.js";

class VoteRepositories {
  constructor() {
    this.prisma = prisma;
  }

  async upVoteThread({ threadId, userId }) {
    const upVote = await this.prisma.threadVotes.upsert({
      where: {
        threadId_userId: {
          threadId,
          userId,
        },
      },
      update: { voteType: 1 },
      create: {
        threadId,
        userId,
        voteType: 1,
      },
    });

    return upVote;
  }

  async downVoteThread({ threadId, userId }) {
    const downVote = await this.prisma.threadVotes.upsert({
      where: {
        threadId_userId: {
          threadId,
          userId,
        },
      },
      update: { voteType: -1 },
      create: {
        threadId,
        userId,
        voteType: -1,
      },
    });

    return downVote;
  }

  async neutralVoteThread({ threadId, userId }) {
    const neutralVote = await this.prisma.threadVotes.upsert({
      where: {
        threadId_userId: {
          threadId,
          userId,
        },
      },
      update: { voteType: 0 },
      create: {
        threadId,
        userId,
        voteType: 0,
      },
    });

    return neutralVote;
  }
}

export default new VoteRepositories();
