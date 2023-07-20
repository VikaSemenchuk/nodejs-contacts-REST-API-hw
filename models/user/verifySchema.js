const Joi = require("joi");

const emailRegexp = require("./emailRegexp");

const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = verifySchema;
