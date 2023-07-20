const { Contact } = require("../../models/contact/contact");
const { checkResult } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  checkResult(result);
  res.json(result);
};

module.exports = updateById;
