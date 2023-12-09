const express = require('express')
const {connectDb} = require('./connect');
const urlRouter = require('./routes/url');
const app = express();
const URL = require('./models/url');
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

connectDb(MONGO_URL).then(()=>console.log("CONNECTED TO MONGO")).catch((err)=>console.log(err));
const PORT = process.env.PORT;

app.set("port", PORT);
app.use(express.json());
app.use('/urls', urlRouter);
app.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const body = await URL.findOne({shortId:id});
    if(!body)
        return res.end("404 not found!");
    const url = body.url;
    if(!url.startsWith('http') && !url.startsWith('https'))
        return res.redirect(`https://${url}`);
    
    return res.redirect(url);
})

app.listen(PORT || 8000, ()=>console.log(`Server started at ${PORT}`));