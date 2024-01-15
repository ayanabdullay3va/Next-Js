const productController = require("./../controller/productController");
const express = require("express");

const router = express.Router();

router.get("/product", productController.getUser);
router.post("/product", productController.getPostUser);
router.get("/product/:id", productController.getByIdUser);
router.delete("/product/:id", productController.getDeleteUser);
router.put("/product/:id", productController.getPutUser);
router.patch("/product/:id", productController.getUpdateUser);

module.exports = router;
