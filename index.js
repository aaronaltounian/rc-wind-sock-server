require('dotenv').config({path: './.env'});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/UserRoutes');
const sessionRoutes = require('./routes/SessionRoutes');
const planeRoutes = require('./routes/PlaneRoutes');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.mongodburl, {useNewUrlParser: true}).then(
    () => {
        console.log('mongoose connected successfully');
        startWebServer();
    },
    err => {
        console.log('mongoose did not connect', err);
    }
).catch(err => res.error(err))

function startWebServer() {
    const app = express();
    // app.use(express.static(path.join(__dirname, '/public/')))

    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(userRoutes);
    app.use(sessionRoutes);
    app.use(planeRoutes);

    require('./routes')(app);

    app.get('/', (req, res) => {
        res.send(`Listening on port ${port}.`);
    })

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Listening on port:${port}`);
    });
}
