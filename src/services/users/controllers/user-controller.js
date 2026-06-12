import { InvariantError, NotFoundError } from "../../../exceptions/index.js";
import response from "../../../utils/response.js";
import UserRepositories from "../repositories/user-repositories.js";
import TokenManager from "../../../security/token-manager.js";

export const register = async (req, res, next) => {
  const { email, password, name, role } = req.validated;

  const user = await UserRepositories.register({
    email,
    password,
    name,
  });

  if (!user) {
    return next(new InvariantError("User gagal ditambahkan"));
  }

  return response(res, 201, "User berhasil ditambahkan", { user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.validated;
  const userId = await UserRepositories.verifyUserCredential(email, password);

  if (!userId) {
    return next(new AuthenticationError("Kredensial yang Anda berikan salah"));
  }

  const accessToken = TokenManager.generateAccessToken({ id: userId });

  return response(res, 200, "Authentication berhasil ditambahkan", {
    accessToken,
  });
};

export const getAllUsers = async (req, res, next) => {
  const users = await UserRepositories.getAllUsers();

  return response(res, 200, "User berhasil ditampilkan", { users });
};

export const getOwnProfile = async (req, res, next) => {
  const { id } = req.user;
  const user = await UserRepositories.getOwnProfile(id);

  return response(res, 200, "User berhasil ditampilkan", { user });
};
