const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./taskRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

const PORT = process.env.PORT || 6578;
app.listen(PORT, () => {
  console.log(`Server is running on port ${6578}`);
});