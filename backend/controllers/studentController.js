exports.getStudentProfile = (req, res) => {
  res.status(200).json({ message: `Get student profile for ID: ${req.params.id}` });
};

exports.updateStudentProfile = (req, res) => {
  res.status(200).json({ message: `Update student profile for ID: ${req.params.id}` });
};
