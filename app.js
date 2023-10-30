const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const blogPosts = [];


app.get('/', (req, res) => {
    res.render('home', { blogPosts });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/newpost', (req, res) => {
    res.render('newpost');
});

app.post('/addpost', (req, res) => {
    const { title, content } = req.body;
    const id = Date.now().toString();
    blogPosts.push({ id, title, content });
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
