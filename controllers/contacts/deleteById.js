const { Contact } = require("../../models/contact/contact");
const { checkResult } = require("../../helpers");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);

  checkResult(result);
  res.json({ message: "contact deleted" });
};

module.exports = deleteById;
