
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book");
const userRoute = require("./routes/userRoutes");
app.use(express.json());
const multer = require("multer");
dotenv.config();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/bookdB').then(console.log("Connected To MongoDB"));;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
app.use("/api/users",userRoute);
app.use("/api/books",bookRoute);






 

