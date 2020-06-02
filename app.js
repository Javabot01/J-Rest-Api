const express = require("express");
const ejs = require("ejs");
const { App } = require('./config');
const { ArticleRouter } = require('./routes/articles')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use('/us', ArticleRouter)

app.listen(App.PORT, function () {
    console.log("Server started on port ", App.PORT);
});