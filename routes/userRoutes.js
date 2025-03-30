const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.addUser); // Добавление пользователя
router.get("/", userController.getUsers); // Получение всех пользователей

module.exports = router;
