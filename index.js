const express = require("express");
require("dotenv").config();
const cors = require("cors");

const db = require("./db/db.js");
const app = express();
app.use(express.json());
// app.use(cors({ credentials: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));




const roleRouter = require("./routers/routes/role");
app.use(roleRouter);

const userSchema = require("./routers/routes/user");
app.use(userSchema);

const postRouter = require("./routers/routes/post");
app.use(postRouter);

const commentRouter = require("./routers/routes/comment");

const likesRouter = require("./routers/routes/like");
app.use(likesRouter);

app.use(commentRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
