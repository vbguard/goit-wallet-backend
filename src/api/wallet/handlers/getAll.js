module.exports = (req, res) => {
  return res.json({
    items: [{ name: 'a' }, { name: 'b' }],
  });
};
