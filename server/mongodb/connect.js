import mongoose from "mongoose";

const connectDb = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Mongo db connected"))
    .catch((err) => console.error(err));
};

export default connectDb;
