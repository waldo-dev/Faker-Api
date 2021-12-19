const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.use('/api', require('./routes/api'));

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`))