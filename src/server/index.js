import express from "express";
import cors from "cors";
import routes from "../routes/index.js";
import ErrorHandler from "../middlewares/error.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Forum API Prisma Documentation",
      version: "1.0.0",
      description: "Dokumentasi API pakai Swagger + Express + Prisma ORM",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [{ url: "http://localhost:3000/v1" }],
  },
  apis: ["./src/services/users/routes/index.js"],
};
const openapiSpecification = swaggerJsDoc(swaggerOptions);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use(routes);
app.use(ErrorHandler);

export default app;
