const { Contact } = require("../../models/contact/contact");

const addNew = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = addNew;
