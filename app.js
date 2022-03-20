const express = require("express")
const app = express();
const path = require("path")

console.log(__dirname)

app.use(express.static(path.join(__dirname, "src/html")))

const indexRouter = require('./routes');
const searchRouter = require('./routes/search');

app.use('/', indexRouter);
app.use('/search', searchRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`server is running ${PORT}`));