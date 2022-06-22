const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use('/api/todos', require('./routes/taskRoutes'));

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
