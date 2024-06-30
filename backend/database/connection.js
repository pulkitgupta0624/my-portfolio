import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_PERSONAL_PORTFOLIO",
    })
    .then(() => {
      console.log("Database se connection safal hua!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};