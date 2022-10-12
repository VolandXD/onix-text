require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./router/index')
const errorMiddleware = require('./middleware/error-middleware');

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json());
app.use(cors());
app.use('/', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();