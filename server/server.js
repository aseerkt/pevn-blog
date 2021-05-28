require('dotenv').config();
require('colors');
const app = require('./app');
const { PORT } = require('./constants');

async function startServer() {
  await app.listen(PORT);
}

startServer().catch((err) => console.error(`${err.messaeg}`.red));
