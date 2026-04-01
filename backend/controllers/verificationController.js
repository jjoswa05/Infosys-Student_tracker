exports.verifyProof = (req, res) => {
  res.status(200).json({ message: `Proof with ID ${req.params.id} verified` });
};

exports.rejectProof = (req, res) => {
  res.status(200).json({ message: `Proof with ID ${req.params.id} rejected` });
};
