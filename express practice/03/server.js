import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/userRegister.js";
const app = express();
const PORT = 1000;
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect("mongodb+srv://junaidengineer162:1234@mydb.zsqux.mongodb.net/", {
    dbName: "mydb",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error", err));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/register",userRegister);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
