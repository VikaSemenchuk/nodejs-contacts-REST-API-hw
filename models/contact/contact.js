const { model } = require("mongoose");

const { handleMongooseError } = require("../../helpers");

const contactSchema = require("./contactSchema");

const addSchema = require("./addSchema");
const updateFavoriteSchema = require("./updateFavoriteSchema");

contactSchema.post("save", handleMongooseError);
const Contact = model("contact", contactSchema);

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

module.exports = {
  Contact,
  schemas,
};
