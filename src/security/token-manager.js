import jwt from "jsonwebtoken";
import { InvariantError } from "../exceptions/index.js";

const TokenManager = {
  generateAccessToken: (payload) =>
    jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
      expiresIn: process.env.EXPIRES_ACCESS_TOKEN ?? "3h",
    }),
  verify: (accessToken, secret) => {
    try {
      const payload = jwt.verify(accessToken, secret);
      return payload;
    } catch (error) {
      console.log(error);
      throw new InvariantError("Access token tidak valid");
    }
  },
};

export default TokenManager;
