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

  async upVoteComment({ commentId, userId }) {
    const upVote = await this.prisma.commentVotes.upsert({
      where: {
        commentId_userId: {
          commentId,
          userId,
        },
      },
      update: { voteType: 1 },
      create: {
        commentId,
        userId,
        voteType: 1,
      },
    });

    return upVote;
  }

  async downVoteComment({ commentId, userId }) {
    const upVote = await this.prisma.commentVotes.upsert({
      where: {
        commentId_userId: {
          commentId,
          userId,
        },
      },
      update: { voteType: -1 },
      create: {
        commentId,
        userId,
        voteType: -1,
      },
    });

    return upVote;
  }

  async neutralVoteComment({ commentId, userId }) {
    const upVote = await this.prisma.commentVotes.upsert({
      where: {
        commentId_userId: {
          commentId,
          userId,
        },
      },
      update: { voteType: 0 },
      create: {
        commentId,
        userId,
        voteType: 0,
      },
    });

    return upVote;
  }
}

export default new VoteRepositories();
