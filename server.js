(async () => {

const express = require('express');
const app = express();
const sqlite = require('sqlite');
const db = await sqlite.open('./db.sqlite');
await db.migrate({ force: 'last' });

app.use(express.static('./www'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/v1/', async (req, res) => {
    // let result = await db.all('SELECT * FROM Test LIMIT 10 OFFSET 0;');
    res.json(req.query);
});

app.post('/v1/', async (req, res) => {
    // const result = await db.all('SELECT COUNT(*) FROM Test;');
    // const count = result[0]['COUNT(*)'];
    // await db.all('INSERT INTO Test (id, text) VALUES (?, ?)', count, 'hi');

    res.json(req.body);
});

app.listen(8080);

})();