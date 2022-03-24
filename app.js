const express = require("express")
const http = require('http')
const cors = require('cors')

const app = express();
const path = require("path")

console.log(__dirname)

app.use(express.static(path.join(__dirname, 'src')))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const indexRouter = require('./routes');
const searchRouter = require('./routes/search');

app.use(cors())
app.use('/', indexRouter);
app.use('/search', searchRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`server is running ${PORT}`));