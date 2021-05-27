const app = require('./app');
const { PORT } = require('./constants');

const start = async () => {
  try {
    await app.listen(PORT);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
