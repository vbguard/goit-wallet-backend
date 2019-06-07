module.exports = (req, res) => {
  req.logout();
  res.status(200).json({
    message: 'User successfully logout',
  });
};
