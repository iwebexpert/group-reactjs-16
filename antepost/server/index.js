const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const Datastore = require('nedb');

const chats = new Datastore({
    filename: path.resolve(__dirname, './data/ourchats.db'),
    autoload: true,
});

const profile = new Datastore({
    filename: path.resolve(__dirname, './data/ourprofile.db'),
    autoload: true,
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/chats', (req, res) => {
    chats.find({}, (err, docs) => {
        if (err) {
            return res.status(500).json({ message: 'Unexpected error' });
        }

        const chatObject = {};
        for (chat of docs) {
            chatObject[chat._id] = chat;
        }

        res.json(chatObject);
    });
});

app.post('/chats/create', (req, res) => {
    if (!req.body.chatName) {
        return res.status(500).json({ error: 'Incorrect params' });
    }

    const newChat = {
        name: req.body.chatName,
        messages: [],
    };

    chats.insert({ ...newChat }, (err, newDoc) => {
        if (err) {
            return res.status(500).json({ message: 'Unexpected error' });
        }

        res.json({ newDoc });
    });
});

app.post('/chats/addmessage', (req, res) => {
    if (!req.body.chatId || !req.body.author || !req.body.text) {
        return res.status(500).json({ error: 'Incorrect params' });
    }

    const message = {
        author: req.body.author,
        text: req.body.text,
    };
    const chatId = req.body.chatId;

    chats.update({ _id: chatId }, { $push: { messages: message } }, {}, (err, numReplaced) => {
        if (err) {
            return res.status(500).json({ message: 'Unexpected error' });
        }

        res.json({ message, chatId });
    });
});

app.delete('/chats/delete', (req, res) => {
    const chatId = req.body.chatId;
    
    if (!chatId) {
        return res.status(500).json({ error: 'Incorrect params' });
    }
    chats.remove({ _id: chatId }, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Unexpected error' });
        }

        res.json({ chatId });
    })
});

app.get('/profile', (req, res) => {
    profile.findOne({}, (err, doc) => {
        if (err) {
            return res.status(500).json({ message: 'Unexpected error' });
        }
        res.json(doc);
    });
});

http.listen(5000, function () {
    console.log('Server is listening on *:5000');
});
