const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/taskRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
