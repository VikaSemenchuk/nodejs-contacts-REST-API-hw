const { Contact } = require("../../models/contact");
const { checkResult } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  checkResult(result);
  res.json(result);
};

module.exports = updateStatusContact;
