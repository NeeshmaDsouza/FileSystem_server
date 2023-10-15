const express = require('express');
const usersApi = require('./routers/usersApi.js');
const filesApi = require('./routers/filesApi.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/usersApi', usersApi);
app.use('/filesApi', filesApi);


app.listen(8080, () => {
    console.log('Server is listening...');
});

