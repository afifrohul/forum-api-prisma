import bcrypt from "bcrypt";
import prisma from "../../../../prisma/libs/prisma.js";

class UserRepositories {
  constructor() {
    this.prisma = prisma;
  }

  async register({ email, password, name }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const avatar = `https://ui-avatars.com/api/?name=${name}&background=random`;

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        avatar,
      },
    });

    await this.prisma.leaderboards.create({
      data: {
        score: 0,
        userId: user.id,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
  }

  async verifyUserCredential(email, password) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      omit: {
        password: false,
      },
    });

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return null;
    }

    return user.id;
  }

  async getAllUsers() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    });

    return users;
  }

  async getOwnProfile(id) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    });

    return user;
  }
}

export default new UserRepositories();
