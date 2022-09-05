const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('mvc patern practice project');
    res.sendFile(__dirname + '/public/home.html')
});

app.listen(port, () => {
    console.log('Listening to port', port);
})

