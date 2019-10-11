const express = require('express');
const app = express();
const sendMail = require('./sendMail.js');
const config = require('./config.js');






 app.get('/', (req, res) => {
     sendMail();
});








app.get('/', (req, res) => {
    res.send('ok');
});
app.listen(config.PORT, () => {
    console.log(`Express запущен на http://localhost:'  ${config.PORT}  '; нажмите Ctrl+C для завершения.`);
});