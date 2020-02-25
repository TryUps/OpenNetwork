const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.get('*', (req, res) => {
    var pg = req.originalUrl;
    pg = pg.replace('/','');
    res.render(pg);
});

app.get('/stream/:streamID', (req, res) => {
    const { streamID } = req.params;
})

app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})