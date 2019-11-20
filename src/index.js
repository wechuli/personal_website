const app = require('./app');


const PORT = process.env.PORT || 8099;

app.listen(PORT, () => {
  console.info(`The server is listening on port ${PORT}`);
});