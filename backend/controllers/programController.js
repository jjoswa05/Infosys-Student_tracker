exports.addProgram = (req, res) => {
  res.status(200).json({ message: "Add new program endpoint" });
};

exports.getAllPrograms = (req, res) => {
  res.status(200).json({ message: "Get all programs endpoint" });
};

exports.updateProgram = (req, res) => {
  res.status(200).json({ message: `Update program with ID: ${req.params.id}` });
};

exports.deleteProgram = (req, res) => {
  res.status(200).json({ message: `Delete program with ID: ${req.params.id}` });
};
