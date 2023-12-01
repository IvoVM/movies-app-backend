import { Router } from "express";
import {
  getMovies,
  createMovie,
  getMovieById,
  deleteMovieById,
  updateMovieById,
} from "../controllers/movieController";
import { verifyToken } from "../libs/verifyToken";

const router = Router();

router.get("/movies", getMovies);

router.get("/movies/:id", getMovieById);

router.post("/movies", verifyToken, createMovie);

router.delete("/movies/:id", verifyToken, deleteMovieById);

router.put("/movies/:id", verifyToken, updateMovieById);

export default router;
