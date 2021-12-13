const express = require("express");
require("dotenv").config();

const db = require("./db/db.js");
// sdfljkasdlfnalndks
const app = express();
app.use(express.json());

const roleRouter = require("./routers/routes/role");
app.use(roleRouter);

const userSchema = require("./routers/routes/user");
app.use(userSchema);

const postRouter = require("./routers/routes/post");
app.use(postRouter);

const commentRouter = require("./routers/routes/comment");

const likesRouter = require("./routers/routes/like");
app.use("/likes", likesRouter);

app.use(commentRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
