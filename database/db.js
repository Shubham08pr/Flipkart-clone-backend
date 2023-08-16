import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL =
    process.env.MONGODB_URI ||
    `mongodb+srv://${username}:${password}@ecommerce-web.fxtnwqk.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with database", error.message);
  }
};

export default Connection;
