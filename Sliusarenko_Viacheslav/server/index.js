const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const cors = require('cors');
const { v1: timestampUuid } = require( 'uuid' );

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

//Вывод чатов
//http://localhost:5000/chats/
app.get('/chats', (req, res) => {
    chats.find({}, (err, docs) => {
        if(err) {
            return res.status(500).json({message: 'Unexpected error'});
        }
        res.json(docs);
    });
});

//Создание чата
//http://localhost:5000/chats/create?name=43&id=1&unread=false
app.get('/chats/create', (req, res = false ) => {
    if( !req.query.name ) {
        return res.status(500).json({error: 'Incorrect params'});
    }

    const body = {
        name: req.query.name,
        unread: req.query.unread == "true",
    };

    chats.insert({...body, messages: []}, (err, newChat ) => {
        if( err ) {
            return res.status(500).json({message: 'Unexpected error'});
        }
        res.json( newChat );
    });
});

//Создание сообщения
//http://localhost:5000/chats/addmessage?chatId=HG9ZY1lfk2ZOJ0sO&author=111&text=4223
app.get('/chats/addmessage', (req, res) => {
    const { query: { chatId, author, text } } = req;
    if ( !chatId || !author || !text){
        return res.status(500).json({error: 'Incorrect params'});
    }

    const message = { id: timestampUuid(), author, text };

    chats.update({ _id: chatId }, { $push: { messages: message } }, {}, (err, numReplaced) => {
        if(err) {
            return res.status(500).json({message: 'Unexpected error'});
        }
        res.json({ chatId, message });
    });
});

//Удаление чатов
//http://localhost:5000/chats/delete?chatId=0EfG2ENsqkhwGqBg
app.get('/chats/delete', (req, res) => {
    const chatId = req.query.chatId;
    if ( !chatId ){
        return res.status(500).json({error: 'Incorrect params'});
    }
    chats.remove({ _id: chatId }, (err) => {
        if ( err ) {
            return res.status(500).json({message: 'Unexpected error'});
        }

        res.json( chatId );
    })
});

app.delete('/chats/:chatId/messages/:messageId', (req, res) => {
    const { params: { chatId, messageId } } = req;

    chats.findOne({ _id: chatId },  ( err, chat ) => {
        if ( err ) {
            return res.status(500).json({message: 'Unexpected error'});
        }
        const messages = chat.messages.filter(({ id }) => id !== messageId );
        chats.update({ _id: chatId }, { $set: { messages } }, {}, ( err ) => {
            if ( err ) {
                return res.status(500).json({message: 'Unexpected error'});
            }
            res.json({ chatId, messages });
        });
    });
});

//Для ДЗ
app.get('/profile', (req, res) => {
    profile.findOne({}, (err, doc) => {
        if(err) {
            return res.status(500).json({message: 'Unexpected error'});
        }
        res.json(doc);
    });
});

http.listen(5000, function () {
    console.log('Server is listening on *:5000');
});