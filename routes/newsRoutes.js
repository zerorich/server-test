const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const multer = require("multer");
const path = require("path"); // ✅ Добавлен импорт

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.post("/", upload.single("img"), newsController.addNews); // Добавление новости с изображением
router.get("/", newsController.getNews); // Получение всех новостей

module.exports = router;
