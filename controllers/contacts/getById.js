const { Contact } = require("../../models/contact");
const { checkResult } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  checkResult(result);
  res.json(result);
};

module.exports = getById;
