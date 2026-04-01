const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const uploadController = require("../controllers/uploadController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("proof"), uploadController.uploadProof);

module.exports = router;
