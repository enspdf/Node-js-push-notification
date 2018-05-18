const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = 'BIAAeTgQY9g17yYay0XS-KRk4vZH3MBSjg3FHrq85jS6sWJ3kS_HnWTEfYsFGEbkB7f1iyoGvvFTduTYCyHK8Lc';
const privateVapidKey = 'OrJ8ORTLWdQV-p7E_z7rF630BX0rwAUTGy66_RrCIcg';

webpush.setVapidDetails('mailto:text@test.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: 'Push Test' });

    webpush.sendNotification(subscription, payload).catch(err => console.log(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));