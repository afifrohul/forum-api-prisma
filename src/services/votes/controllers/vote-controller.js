import { InvariantError, NotFoundError } from "../../../exceptions/index.js";
import response from "../../../utils/response.js";
import VoteRepositories from "../repositories/vote-repositories.js";

export const upVoteThread = async (req, res, next) => {
  const userId = req.user.id;
  const threadId = req.params.threadId;

  const vote = await VoteRepositories.upVoteThread({
    threadId,
    userId,
  });

  if (!vote) {
    return next(new InvariantError("Failed to up vote thread"));
  }

  return response(res, 201, "Thread upvoted", { vote });
};

export const downVoteThread = async (req, res, next) => {
  const userId = req.user.id;
  const threadId = req.params.threadId;

  const vote = await VoteRepositories.downVoteThread({
    threadId,
    userId,
  });

  if (!vote) {
    return next(new InvariantError("Failed to down vote thread"));
  }

  return response(res, 201, "Thread downvoted", { vote });
};

export const neutralVoteThread = async (req, res, next) => {
  const userId = req.user.id;
  const threadId = req.params.threadId;

  const vote = await VoteRepositories.neutralVoteThread({
    threadId,
    userId,
  });

  if (!vote) {
    return next(new InvariantError("Failed to neutral vote thread"));
  }

  return response(res, 201, "Thread vote neutralized", { vote });
};

export const upVoteComment = async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.params.commentId;

  const vote = await VoteRepositories.upVoteComment({
    commentId,
    userId,
  });

  if (!vote) {
    return next(new InvariantError("Failed to up vote comment"));
  }

  return response(res, 201, "Comment upvoted", { vote });
};

export const downVoteComment = async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.params.commentId;

  const vote = await VoteRepositories.downVoteComment({
    commentId,
    userId,
  });

  if (!vote) {
    return next(new InvariantError("Failed to down vote comment"));
  }

  return response(res, 201, "Comment downvoted", { vote });
};

export const neutralVoteComment = async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.params.commentId;

  const vote = await VoteRepositories.neutralVoteComment({
    commentId,
    userId,
  });

  if (!vote) {
    return next(new InvariantError("Failed to neutral vote comment"));
  }

  return response(res, 201, "Comment vote neutralized", { vote });
};
