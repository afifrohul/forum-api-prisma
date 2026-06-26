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
    return next(new InvariantError("Failed to create user"));
  }

  return response(res, 201, "User created", { user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.validated;
  const userId = await UserRepositories.verifyUserCredential(email, password);

  if (!userId) {
    return next(
      new AuthenticationError("The credentials you provided are incorrect"),
    );
  }

  const accessToken = TokenManager.generateAccessToken({ id: userId });

  return response(res, 200, "ok", {
    token: accessToken,
  });
};

export const getAllUsers = async (req, res, next) => {
  const users = await UserRepositories.getAllUsers();

  return response(res, 200, "ok", { users });
};

export const getOwnProfile = async (req, res, next) => {
  const { id } = req.user;
  const user = await UserRepositories.getOwnProfile(id);

  return response(res, 200, "ok", { user });
};
