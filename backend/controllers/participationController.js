exports.submitParticipation = (req, res) => {
  res.status(200).json({ message: "Submit participation details endpoint" });
};

exports.getStudentParticipation = (req, res) => {
  res.status(200).json({ message: `Get participation for student ID: ${req.params.studentId}` });
};
