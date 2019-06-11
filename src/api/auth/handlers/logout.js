module.exports = (req, res) => {
  res.status(200).json({
    message: 'User successfully logout',
  });
};
