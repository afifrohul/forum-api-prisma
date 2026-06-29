import { InvariantError, NotFoundError } from "../../../exceptions/index.js";
import response from "../../../utils/response.js";
import ThreadRepositories from "../repositories/thread-repositories.js";

export const createThread = async (req, res, next) => {
  const userId = req.user.id;
  const { title, body, category } = req.validated;

  const thread = await ThreadRepositories.createThread({
    title,
    body,
    category,
    userId,
  });

  if (!thread) {
    return next(new InvariantError("Failed to create thread"));
  }

  const { userId: ownerId, comments, user, threadVotes, ...rest } = thread;

  const responseData = {
    ...rest,
    ownerId,
    upVotesBy: threadVotes
      .filter((vote) => vote.voteType === 1)
      .map((vote) => vote.userId),
    downVotesBy: threadVotes
      .filter((vote) => vote.voteType === -1)
      .map((vote) => vote.userId),
    totalComments: comments.length,
  };

  return response(res, 201, "Thread created", { thread: responseData });
};

export const getAllThreads = async (req, res, next) => {
  const threads = await ThreadRepositories.getAllThreads();

  const newThreads = threads.map(
    ({ userId: ownerId, comments, threadVotes, ...rest }) => {
      return {
        ...rest,
        ownerId,
        upVotesBy: threadVotes
          .filter((vote) => vote.voteType === 1)
          .map((vote) => vote.userId),
        downVotesBy: threadVotes
          .filter((vote) => vote.voteType === -1)
          .map((vote) => vote.userId),
        totalComments: comments.length,
      };
    },
  );

  return response(res, 200, "ok", { threads: newThreads });
};

export const getDetailThread = async (req, res, next) => {
  const id = req.params.id;
  const thread = await ThreadRepositories.getDetailThread(id);

  if (thread) {
    const {
      user: ownerThread,
      threadVotes,
      comments,
      ...threadDetail
    } = thread;

    const threadUpVotesBy = threadVotes
      .filter((vote) => vote.voteType === 1)
      .map((vote) => vote.userId);

    const threadDownVotesBy = threadVotes
      .filter((vote) => vote.voteType === -1)
      .map((vote) => vote.userId);

    const newComments = comments.map(({ user, commentVotes, ...rest }) => {
      return {
        ...rest,
        owner: user,
        upVotesBy: commentVotes
          .filter((vote) => vote.voteType === 1)
          .map((vote) => vote.userId),
        downVotesBy: commentVotes
          .filter((vote) => vote.voteType === -1)
          .map((vote) => vote.userId),
      };
    });

    const responseData = {
      ...threadDetail,
      upVotesBy: threadUpVotesBy,
      downVotesBy: threadDownVotesBy,
      owner: ownerThread,
      comments: newComments,
    };

    return response(res, 200, "ok", {
      detailThread: responseData,
    });
  }
};
