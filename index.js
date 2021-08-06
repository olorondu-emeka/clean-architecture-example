const express = require('express');
const cors = require('cors');
const userRoute = require('./regular/routes/users');
const PORT = 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.status(200).json('Welcome');
});

app.use('/users', userRoute);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
