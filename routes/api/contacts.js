const express = require("express");
const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema, "missing required name field"),
  ctrl.addNew
);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema, "missing fields"),
  isValidId,
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema, "missing field favorite"),
  isValidId,
  ctrl.updateStatusContact
);

module.exports = router;
