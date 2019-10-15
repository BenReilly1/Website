const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 8080);
