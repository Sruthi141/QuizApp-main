require("dotenv").config(); // ✅ ADD THIS LINE

const express = require("express");
const connect = require("./configs/db.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const Port = process.env.PORT || 3755;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Auth Controller
const authController = require("./controller/auth.controller.js");
app.use("/", authController);
app.use("/user", authController);

// ✅ Admin Quiz Add Controller
const quizAddController = require("./controller/quizAdd.controller.js");
app.use("/admin", quizAddController);

// ✅ Display Quiz Controller
const quizController = require("./controller/displayQuiz.controller.js");
app.use("/quiz", quizController);

// ✅ User Result Controller
const userResultController = require("./controller/userData.controller.js");
app.use("/userResult", userResultController);

// ✅ Start Server
app.listen(Port, async () => {
  try {
    console.log("Mongo URL:", process.env.MONGO_URL); // ✅ Debug check

    await connect();
    console.log(`✅ Server running on port ${Port}`);
  } catch (error) {
    console.log("❌ Database connection error:", error);
  }
});
