require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/db");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });
