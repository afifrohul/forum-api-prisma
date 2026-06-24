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
    return next(new InvariantError("Thread gagal ditambahkan"));
  }

  return response(res, 201, "Thread berhasil ditambahkan", { thread });
};

export const getAllThreads = async (req, res, next) => {
  const threads = await ThreadRepositories.getAllThreads();

  return response(res, 200, "Thread berhasil ditampilkan", { threads });
};

export const getDetailThread = async (req, res, next) => {
  const id = req.params.id;
  const thread = await ThreadRepositories.getDetailThread(id);

  if (thread) {
    const { user: owner, ...threadDetail } = thread;
    const responseData = { ...threadDetail, owner };

    return response(res, 200, "Thread berhasil ditampilkan", {
      detailThread: responseData,
    });
  }
};
