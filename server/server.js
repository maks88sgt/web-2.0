const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const dbConfig = require("./config/db.config");

const db = require("./models");

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB is connected");
}).catch(()=>{
    console.log("Error. DB is not connected");
    process.exit();
})

app.get('/', (req, res) => {
    res.send('Good morning  World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
