const contacts = require("../models/contacts");
const { ctrlWrapper, checkResult } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);

  checkResult(result);
  res.json(result);
};

const addNew = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);

  checkResult(result);
  res.json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);

  checkResult(result);
  res.json({ message: "contact deleted" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addNew: ctrlWrapper(addNew),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
