import { InvariantError, NotFoundError } from "../../../exceptions/index.js";
import response from "../../../utils/response.js";
import CommentRepositories from "../repositories/comment-repositories.js";

export const createComment = async (req, res, next) => {
  const userId = req.user.id;
  const threadId = req.params.threadId;
  const { content } = req.validated;

  const comment = await CommentRepositories.createComment({
    content,
    userId,
    threadId,
  });

  if (!comment) {
    return next(new InvariantError("Failed to create comment"));
  }

  if (comment) {
    const { user: owner, commentVotes, ...commentDetail } = comment;
    const responseData = {
      ...commentDetail,
      upVotesBy: commentVotes
        .filter((vote) => vote.voteType === 1)
        .map((vote) => vote.userId),
      downVotesBy: commentVotes
        .filter((vote) => vote.voteType === -1)
        .map((vote) => vote.userId),
      owner,
    };

    return response(res, 201, "Comment created", { comment: responseData });
  }
};
