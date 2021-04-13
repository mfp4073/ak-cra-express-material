const path = require('path');
// loading the environment variables needed
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup routes (should just be API)
require('./routes')(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
