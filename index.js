const express = require('express');
const cors = require('cors');
const PORT = 5000;

app.use(cors());

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json('Welcome');
});

app.listen(port, () => {
  console.log(`listening on port: ${PORT}`);
});
