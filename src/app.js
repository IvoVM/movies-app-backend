import express from "express";
import cors from "cors"; 
import config from "./config";
import morgan from "morgan";

import authRoutes from "./routes/auth";
import indexRoutes from "./routes/index";
import movieRoutes from "./routes/movies";

const app = express();

app.set("port", config.port);

app.use(cors()); 
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes);
app.use(authRoutes);
app.use(movieRoutes);

export default app;
