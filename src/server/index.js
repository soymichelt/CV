require('./server.config');

const {app} = require('./server');

app.listen(PORT, error => {
    if(error) console.log(error);
    console.log(`Server Running on ${PORT}`);
});