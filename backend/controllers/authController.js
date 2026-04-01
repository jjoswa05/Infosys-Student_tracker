const { db } = require("../firebase");

exports.registerStudent = async (req, res) => {
  try {
    const { username, password } = req.body;
    const studentRef = db.collection("students");
    const snapshot = await studentRef.where("username", "==", username).get();
    if (!snapshot.empty) {
      return res.status(400).json({ message: "Student with this username already exists." });
    }
    const newStudentRef = await studentRef.add({ username, password, role: "student" });
    res.status(201).json({ message: "Student registered successfully", id: newStudentRef.id });
  } catch (error) {
    res.status(500).json({ message: "Error registering student", error: error.message });
  }
};

exports.loginStudent = async (req, res) => {
  try {
    const { username, password } = req.body;
    const studentRef = db.collection("students");
    const snapshot = await studentRef.where("username", "==", username).where("password", "==", password).get();
    if (snapshot.empty) {
      return res.status(401).json({ message: "Invalid student credentials." });
    }
    const student = snapshot.docs[0].data();
    res.status(200).json({ message: "Student logged in successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Error logging in student", error: error.message });
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminRef = db.collection("admins"); // Assuming a separate collection for admins
    const snapshot = await adminRef.where("username", "==", username).get();
    if (!snapshot.empty) {
      return res.status(400).json({ message: "Admin with this username already exists." });
    }
    const newAdminRef = await adminRef.add({ username, password, role: "admin" });
    res.status(201).json({ message: "Admin registered successfully", id: newAdminRef.id });
  } catch (error) {
    res.status(500).json({ message: "Error registering admin", error: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminRef = db.collection("admins");
    const snapshot = await adminRef.where("username", "==", username).where("password", "==", password).get();
    if (snapshot.empty) {
      return res.status(401).json({ message: "Invalid admin credentials." });
    }
    const admin = snapshot.docs[0].data();
    res.status(200).json({ message: "Admin logged in successfully", admin });
  } catch (error) {
    res.status(500).json({ message: "Error logging in admin", error: error.message });
  }
};
