import express from "express";
import cors from "cors";
import routes from "../routes/index.js";
import ErrorHandler from "../middlewares/error.js";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { fileURLToPath } from "url";
import path from "path";

// Mendapatkan path file di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(path.join(__dirname, "../../docs/openapi.yaml"));

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

export default app;
