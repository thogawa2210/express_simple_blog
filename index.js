const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();

app.set('view engine', 'ejs');

app.set('views', './views');

const arrBlog = [];

app.get('/', (req, res) => {
    res.render("blog");
});

app.get('/view', (req, res) => {
    res.render("view", {data: arrBlog});
})

app.post('/view', upload.none(), (req, res) => {
    if (req.body.title && req.body.content) {
        const blog = {
            title: req.body.title,
            content: req.body.content
        }
        arrBlog.splice(0, 0, blog);

        console.log(arrBlog);

        res.render("view", {data: arrBlog});
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});