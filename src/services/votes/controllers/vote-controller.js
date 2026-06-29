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

  return response(res, 201, "Thread Upvoted", { vote });
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
