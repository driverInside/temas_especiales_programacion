require('dotenv').config()
const app = require('./app');
const dbConnection = require('./db/mongodb');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

dbConnection(MONGO_URI)
  .then(() => {
      console.log(`db connected`);
    })
    .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
