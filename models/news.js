const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    img: String, // Добавляем поле для изображения
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("News", newsSchema);