const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use('/api/todos', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server started on port ${port}`.green.underline);
});
