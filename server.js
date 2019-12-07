(async () => {

const express = require('express');
const app = express();

app.use(express.static('./www'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/v1/', async (req, res) => {
    res.json(req.query);
});

app.post('/v1/', async (req, res) => {
    res.json(req.body);
});

app.listen(8080);

})();