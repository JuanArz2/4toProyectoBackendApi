import mongoose from "mongoose";

mongoose
  .connect(process.env.DATABASE_URI)
  .then((data) => {
    console.log("Database is conected");
  })
  .catch((error) => {
    console.log("Error, Database isn't conected");
  });
