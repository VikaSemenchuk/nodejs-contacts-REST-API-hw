const express = require("express");
const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post(
  "/",
  validateBody(schemas.addSchema, "missing required name field"),
  ctrl.addNew
);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema, "missing fields"),
  isValidId,
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema, "missing field favorite"),
  isValidId,
  ctrl.updateStatusContact
);

module.exports = router;
