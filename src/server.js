require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const routerLogin = require('./handlers/login/router');

app.use(cors());
app.use(express.json());
app.use('/api', routerLogin);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});