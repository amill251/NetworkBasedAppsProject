const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes')

const app = express();

let port = 3000;
let host = 'localhost'
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use(express.static('node_modules'));
app.use('/', routes);


app.listen(port, host, ()=> {
    console.log('Server is running on port', port);
})