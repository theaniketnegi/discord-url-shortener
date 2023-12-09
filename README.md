# Discord bot URL Shortener

## Build
Clone the repository
```sh
git clone https://github.com/theaniketnegi/discord-url-shortener/ 
```

Move to directory
```sh
cd discord-url-shortener
```

Install required modules
```sh
npm install
```

Populate the .env file with appropriate variables (use example.env)
```
PORT = ""
MONGO_URL = ""
DISCORD_BOT_TOKEN = ""
DISCORD_CLIENT_ID = ""
FETCH_URL = ""
```

Register the slash(/) commands
```sh
node run commands
```

## Run
Start the server
```sh
npm run server
```

Start the bot
```sh
npm start
```

## Usage
Add your bot to a server and use "/create `<URL>`" or "create `<URL>`" which will generate the shortened URL

![image](https://github.com/theaniketnegi/discord-url-shortener/assets/49506854/83783c21-61a7-444d-aa7d-1ef9887ca1f9)

