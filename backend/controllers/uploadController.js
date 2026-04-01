const { db } = require("../firebase");

exports.uploadProof = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }
  try {
    const { studentId, programId } = req.body; // Assuming studentId and programId are sent in the body
    const uploadRef = db.collection("uploads");
    const newUploadRef = await uploadRef.add({
      studentId,
      programId,
      filename: req.file.filename,
      filepath: req.file.path,
      mimetype: req.file.mimetype,
      uploadedAt: new Date(),
      status: "Pending Verification" // Initial status
    });
    res.status(200).json({ message: "File uploaded successfully", id: newUploadRef.id, filename: req.file.filename });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file and saving metadata", error: error.message });
  }
};
