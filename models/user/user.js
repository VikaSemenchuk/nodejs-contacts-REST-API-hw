const { model } = require("mongoose");

const { handleMongooseError } = require("../../helpers");

const userSchema = require("./userSchema");

const registerSchema = require("./registerSchema");
const verifySchema = require("./verifySchema");
const loginSchema = require("./loginSchema");

userSchema.post("save", handleMongooseError);
const User = model("user", userSchema);

const schemas = {
  registerSchema,
  loginSchema,
  verifySchema,
};

module.exports = {
  User,
  schemas,
};
