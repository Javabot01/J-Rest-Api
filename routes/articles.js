const express = require("express");
const bodyParser = require("body-parser");
const { Article } = require('./../models/article');

const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json())


router.get('/', (req, res) => {
    Article.find((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            res.send(err);
        }
    })
});

router.post('/', (req, res) => {
    const data = new Article({
        title: req.body.title,
        content: req.body.content
    })
    data.save((err) => {
        if (!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    });
})

exports.ArticleRouter = router;