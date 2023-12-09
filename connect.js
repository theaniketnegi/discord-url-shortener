const mongoose = require('mongoose');

async function connectDb(MONGO_URL){
    return mongoose.connect(`${MONGO_URL}/discord-shortener`);
}

module.exports = {connectDb};