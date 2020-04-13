const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const routes = express.Router();
const ongController = require("./controllers/ong");
const incidentController = require("./controllers/incident");
const profileController = require("./controllers/profile");
const sessionController = require("./controllers/session");

routes.post("/session", sessionController.create);

routes.post("/ongs", ongController.create);
routes.get("/ongs", ongController.index);

routes.get("/profile", profileController.index);

routes.post("/incidents", incidentController.create);
routes.get("/incidents", incidentController.index);
routes.delete("/incidents/:id", incidentController.delete);

module.exports = routes;
