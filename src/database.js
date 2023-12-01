import mongoose from "mongoose";
import Movie from "./models/Movie";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://0.0.0.0:27017/movies", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database is connected");

    const moviesData = [
      {
        title: "Tenet",
        description:
          "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real-time.",
        rating: 7.8,
        duration: "2h 30min",
        genre: ["Action", "Sci-Fi"],
        releasedDate: "2020-09-03",
        trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
        img: "https://www.themoviedb.org/t/p/original/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
      },
      {
        title: "Spider-Man: Into the Spider-Verse",
        description:
          "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        rating: 8.4,
        duration: "1h 57min",
        genre: ["Action", "Animation", "Adventure"],
        releasedDate: "2018-12-14",
        trailerLink: "https://www.youtube.com/watch?v=tg52up16eq0",
        img: "https://www.themoviedb.org/t/p/original/3cZn1k8x0bikrDKEy9ZKJ6Vdj30.jpg",
      },
      {
        title: "Knives Out",
        description:
          "A detective investigates the death of a patriarch of an eccentric, combative family.",
        rating: 7.9,
        duration: "2h 10min",
        genre: ["Comedy", "Crime", "Drama"],
        releasedDate: "2019-11-27",
        trailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
        img: "https://www.themoviedb.org/t/p/original/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      },
      {
        title: "Guardians of the Galaxy",
        description:
          "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        rating: 8.0,
        duration: "2h 1min",
        genre: ["Action", "Adventure", "Comedy"],
        releasedDate: "2014-08-01",
        trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA",
        img: "https://www.themoviedb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      },
      {
        title: "Avengers: Age of Ultron",
        description:
          "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        rating: 7.3,
        duration: "2h 21min",
        genre: ["Action", "Adventure", "Sci-Fi"],
        releasedDate: "2015-05-01",
        trailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do",
        img: "https://www.themoviedb.org/t/p/original/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
      },
    ];

    // Verify if movie is already in database
    for (const movie of moviesData) {
      const existingMovie = await Movie.findOne({ title: movie.title });

      if (!existingMovie) {
        await Movie.create(movie);
        console.log(`Movie "${movie.title}" has been added to database.`);
      }
    }
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
})();
