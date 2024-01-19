const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.get("/users", userControllers.getAllUser);
router.post("/users", userControllers.PostUser);
// router.delete("/users", userControllers.deleteUser);
module.exports = router;
