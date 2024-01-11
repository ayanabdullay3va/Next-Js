const router = require("express").Router();
const userControllers = require("./../controller/userController");

router.post("/Users", userControllers.postUser);
router.get("/Users", userControllers.getAllUser);

module.exports = router;

