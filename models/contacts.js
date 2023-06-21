const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("models", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return (contacts = JSON.parse(data));

  } catch (error) {
    throw new Error(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const allContacts = await listContacts();
    const contactById = allContacts.find((contact) => contact.id === contactId);
    return contactById;

  } catch (error) {
    throw new Error(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const allContacts = await listContacts();

    const contactForRemove = allContacts.findIndex(
      (contact) => contact.id === contactId
    );

    if (contactForRemove === -1) return null;

    const [result] = allContacts.splice(contactForRemove, 1);
    
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return result;

  } catch (error) {
    throw new Error(error.message);
  }
};

const addContact = async (body) => {
  try {
    const allContacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...body,
    };

    allContacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;

  } catch (error) {
    throw new Error(error.message);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const allContacts = await listContacts();
    const index = allContacts.findIndex((item) => item.id === contactId);

    if (index === -1) return null;

    const id = contactId;
    allContacts[index] = { id, ...body };

    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return allContacts[index];

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
