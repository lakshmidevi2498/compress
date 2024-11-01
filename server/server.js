const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes.js/studentRoute');
require('./dbs');  

const app = express();

 
app.use(cors());
app.use(bodyParser.json());

 
app.use('/', studentRoutes);

 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
