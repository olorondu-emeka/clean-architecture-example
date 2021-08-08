const express = require('express');
const cors = require('cors');
const userRoute = require('./regular/routes/users');
const PORT = 5000;

const app = express();
const { json, urlencoded } = express;

app.use(cors());
app.use(json({ limit: '20mb' }));
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).send('Welcome');
});

app.use('/users', userRoute);

app.use('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
