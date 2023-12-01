import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    rating: Number,
    duration: String,
    genre: [String],
    releasedDate: Date,
    trailerLink: String,
    img: String,
  },
  {
    versionKey: false,
  }
);

const Movie = model("Movie", movieSchema);

export default Movie;
