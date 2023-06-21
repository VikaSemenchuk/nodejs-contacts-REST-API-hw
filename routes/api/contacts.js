const express = require("express");
const ctrl = require("../../controllers/contacts");
const {validateBody} = require('../../middlewares');
const schemas = require('../../schemas/contacts')

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema, 'missing required name field'), ctrl.addNew);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(schemas.addSchema, 'missing fields'), ctrl.updateById);

module.exports = router;
