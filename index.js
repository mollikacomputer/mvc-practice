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

app.get('/api/v1/product', async(req, res, next) => {
    try {   
        const products = await Product.find({})
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message:"Can't get the data",
            error:error.message,
        })
    }
})

app.listen(port, () => {
    console.log('Listening to port', port);
})

