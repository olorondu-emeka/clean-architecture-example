const express = require('express');
const cors = require('cors');

const connectMongodb = require('./clean_architecture/config/dbConnection');
const userRoute_regular = require('./regular/routes/users');
const userRoute_clean_architecture = require('./clean_architecture/entry_point/web/routes/users');
const PORT = 5000;

const app = express();
const { json, urlencoded } = express;

app.use(cors());
app.use(json({ limit: '20mb' }));
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).send('Welcome');
});

// ca stands for: clean architecture
app.use('/regular/users', userRoute_regular);
app.use('/ca/users', userRoute_clean_architecture);

app.use('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(PORT, () => {
  connectMongodb();
  console.log(`listening on port: ${PORT}`);
});
