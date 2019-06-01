module.exports = (req, res) =>
  res.json({
    items: [{ name: 'a' }, { name: 'b' }],
  });
