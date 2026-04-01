exports.generateStudentReport = (req, res) => {
  res.status(200).json({ message: `Generate report for student ID: ${req.params.id}` });
};

exports.generateDepartmentReport = (req, res) => {
  res.status(200).json({ message: `Generate report for department: ${req.params.name}` });
};

exports.generateProgramCompletionReport = (req, res) => {
  res.status(200).json({ message: `Generate program completion report for program ID: ${req.params.id}` });
};
