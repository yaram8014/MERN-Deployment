const CrewController = require("../controllers/crew.controller");
const { Crew } = require("../models/crew.model");
// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
  app.post("/api/crew", CrewController.createCrew);
  // Read
  // Get All
  app.get("/api/crew", CrewController.getAll)
  // Get One
  app.get("/api/crew/:idd", CrewController.getOne)
  // Update
	app.put("/api/crew/:id", CrewController.updateCrew );
  // Delete
  app.delete("/api/crew/:iddd", CrewController.deleteCrew)

};