const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/UserRoutes");
const cors = require('cors');
const bodyParser = require('body-parser'); 
const app = express();
const PORT = process.env.PORT || 3000;

sequelize 
  .sync()
  .then(() => {
    console.log("Подключено к БД");
  })
  .catch((error) => {
    console.error("нет подключения к БД:", error);
  });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
