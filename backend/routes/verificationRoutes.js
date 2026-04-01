const express = require("express");
const router = express.Router();
const verificationController = require("../controllers/verificationController");

router.put("/:id/verify", verificationController.verifyProof);
router.put("/:id/reject", verificationController.rejectProof);

module.exports = router;
