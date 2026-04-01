exports.searchStudents = (req, res) => {
  const { department, year, program, status } = req.query;
  res.status(200).json({ message: "Search students endpoint", filters: { department, year, program, status } });
};
