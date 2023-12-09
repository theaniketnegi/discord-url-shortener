const shortid = require('shortid');
const URL = require('../models/url');

async function shortenURL(req, res){
    const url = req.body.url;
    if(!url)
        return res.json({msg:"No URL"});
    const shortId = shortid();
    await URL.create({
        url, shortId
    })
    const shortURL = `http://${req.hostname}:${req.app.get("port")}/${shortId}`;
    return res.json({shortURL});
}

module.exports = {shortenURL};