import express from 'express';
import path from 'path';
import router from './class/router.js';
const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve(path.dirname(''));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/', router);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})