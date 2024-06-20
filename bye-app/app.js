const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Bye, world!');
});

app.listen(port, () => {
    console.log(`Bye app listening at http://localhost:${port}`);
});
