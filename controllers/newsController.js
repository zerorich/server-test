const News = require("../models/news");

// Добавление новости (POST /news)
exports.addNews = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const img = req.file ? `https://server-test-production-6d80.up.railway.app/uploads/${req.file.filename}` : ""; // Сохранение пути к файлу
        
        const newNews = new News({ title, content, author, img });
        await newNews.save();
        res.status(201).json({ message: "✅ News added successfully", news: newNews });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получение всех новостей (GET /news)
exports.getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
