exports.getParticipationStatus = (req, res) => {
  res.status(200).json({ message: `Get status for student ${req.params.studentId} and program ${req.params.programId}` });
};

exports.updateParticipationStatus = (req, res) => {
  res.status(200).json({ message: `Update status for participation ID: ${req.params.participationId}` });
};
