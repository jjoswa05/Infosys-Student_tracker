exports.registerStudent = (req, res) => {
  res.status(200).json({ message: "Student registration endpoint" });
};

exports.loginStudent = (req, res) => {
  res.status(200).json({ message: "Student login endpoint" });
};

exports.registerAdmin = (req, res) => {
  res.status(200).json({ message: "Admin registration endpoint" });
};

exports.loginAdmin = (req, res) => {
  res.status(200).json({ message: "Admin login endpoint" });
};
