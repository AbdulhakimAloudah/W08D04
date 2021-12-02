const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const roleRouter = express.Router();

const { createRole, getAllRoles } = require("./../controllers/role");

roleRouter.post("/create", authentication, authorization, createRole);
roleRouter.get("/", authentication, authorization, getAllRoles);

module.exports = roleRouter;
