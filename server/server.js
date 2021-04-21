const express = require('express');
const app = express();
const port = 3001;


app.get('/api/','apiRoutes');

app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port,() => {
    console.log(`App listening to ${port}`);
})