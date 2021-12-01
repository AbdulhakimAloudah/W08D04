const express = require("express");
require("dotenv").config();

const db = require("./db/db.js");

const app = express();
app.use(express.json());



const roleRouter = require("./routers/routes/role");
app.use( roleRouter);

const userSchema = require("./routers/routes/user");
app.use( userSchema);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});