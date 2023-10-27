const express = require("express");
const testUser = require("../middleware/testUser");

const router = express.Router();
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require("../controllers/jobs");

router.route("/").post(testUser, createJob).get(getAllJobs);
router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(testUser, getJob)
  .delete(testUser, deleteJob)
  .patch(updateJob);

module.exports = router;
