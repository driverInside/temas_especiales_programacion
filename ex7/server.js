require('dotenv').config();
const app = require('./app');
const sequelize = require('./db/postgres');

const Editorials = require('./models/editorials');


const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port, ${PORT}`);
});
