import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";
import { fakerID_ID as faker } from "@faker-js/faker";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const afif = await prisma.user.upsert({
    where: { email: "afifmemyself22@gmail.com" },
    update: {},
    create: {
      email: "afifmemyself22@gmail.com",
      name: "Afif Rohul",
      password: "password",
      avatar: "https://ui-avatars.com/api/?name=Afif%20Rohul&background=random",
    },
  });

  const afif_leaderboard = await prisma.leaderboards.create({
    data: {
      score: 0,
      userId: afif.id,
    },
  });

  for (let i = 0; i < 10; i++) {
    const name = faker.person.fullName();
    const user = await prisma.user.create({
      data: {
        name,
        email: faker.internet.email(),
        password: "password",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name,
        )}&background=random`,
      },
    });

    const leaderboard = await prisma.leaderboards.create({
      data: {
        score: 0,
        userId: user.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
