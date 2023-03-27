const app = require('./app');
require('dotenv').config();

const mongodbConnect = require('./db/mongo');
const PORT = process.env.PORT || 3000;
const mongoDBUri = process.env.MONGO_URI;

mongodbConnect(mongoDBUri)
  .then(() => {
    console.log(`db connected`)
  })
  .catch((err) => {
    console.error(err);
  })


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
