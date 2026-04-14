const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(cors({
    origin: 'https://namegenerator-ressdominik.jcloud.jedlik.cloud'
}));
app.use(express.json());
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})