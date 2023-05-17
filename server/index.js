const express = require('express');

const app = express();

app.use(express.json());

app.use('/test', (req, res) => {
    res.status(200).json({ mssg: 'Test passed successfully !' })
})

app.listen(5000, () => console.log('Server is listening for requests on port 5000 ...'));