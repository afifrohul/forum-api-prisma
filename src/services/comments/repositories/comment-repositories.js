import prisma from "../../../../prisma/libs/prisma.js";

class CommentRepositories {
  constructor() {
    this.prisma = prisma;
  }

  async createComment({ content, userId, threadId }) {
    const comment = await this.prisma.comments.create({
      data: {
        content,
        userId,
        threadId,
      },
    });

    const commentDetail = await this.prisma.comments.findUnique({
      where: { id: comment.id },
      include: { user: true },
    });

    return commentDetail;
  }
}

export default new CommentRepositories();
