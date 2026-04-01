exports.getAnalytics = (req, res) => {
  res.status(200).json({ message: "Get overall analytics data" });
};

exports.getDepartmentStats = (req, res) => {
  res.status(200).json({ message: "Get department-wise statistics" });
};
