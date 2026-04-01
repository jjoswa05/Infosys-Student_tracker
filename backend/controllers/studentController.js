const { db } = require("../firebase");

exports.createStudentProfile = async (req, res) => {
  try {
    const { name, registerNumber, department, year, section, email, phone } = req.body;
    const studentRef = db.collection("students");
    const newStudentRef = await studentRef.add({ name, registerNumber, department, year, section, email, phone });
    res.status(201).json({ message: "Student profile created successfully", id: newStudentRef.id });
  } catch (error) {
    res.status(500).json({ message: "Error creating student profile", error: error.message });
  }
};

exports.getStudentProfile = async (req, res) => {
  try {
    const studentId = req.params.id;
    const studentRef = db.collection("students").doc(studentId);
    const doc = await studentRef.get();
    if (!doc.exists) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ message: "Error fetching student profile", error: error.message });
  }
};

exports.updateStudentProfile = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedData = req.body;
    const studentRef = db.collection("students").doc(studentId);
    await studentRef.update(updatedData);
    res.status(200).json({ message: "Student profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating student profile", error: error.message });
  }
};
