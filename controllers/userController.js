const User = require("../models/User");

// Добавление пользователя (POST /users)
exports.addUser = async (req, res) => {
    try {
        // Деструктуризация всех параметров
        const {
            Имя, Фамилия, Отчество, "Место Учёбы/Работы": место, "Номер телефона": телефон,
            "Серия и Номер Паспорта": паспорт, "Кем Выдан": кемВыдан, "Когда Выдан": когдаВыдан, "СД": сд
        } = req.body;

        // Создание нового пользователя со всеми параметрами
        const newUser = new User({
            Имя, Фамилия, Отчество, "Место Учёбы/Работы": место, "Номер телефона": телефон,
            "Серия и Номер Паспорта": паспорт, "Кем Выдан": кемВыдан, "Когда Выдан": когдаВыдан, "СД": сд
        });

        await newUser.save();

        res.status(201).json({ message: "✅ User added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получение всех пользователей (GET /users)
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
