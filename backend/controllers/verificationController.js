const { db } = require("../firebase");

exports.verifyProof = async (req, res) => {
  try {
    const uploadId = req.params.id;
    const uploadRef = db.collection("uploads").doc(uploadId);
    await uploadRef.update({ status: "Verified", verifiedAt: new Date() });
    res.status(200).json({ message: `Proof with ID ${uploadId} verified` });
  } catch (error) {
    res.status(500).json({ message: "Error verifying proof", error: error.message });
  }
};

exports.rejectProof = async (req, res) => {
  try {
    const uploadId = req.params.id;
    const uploadRef = db.collection("uploads").doc(uploadId);
    await uploadRef.update({ status: "Rejected", rejectedAt: new Date() });
    res.status(200).json({ message: `Proof with ID ${uploadId} rejected` });
  } catch (error) {
    res.status(500).json({ message: "Error rejecting proof", error: error.message });
  }
};
