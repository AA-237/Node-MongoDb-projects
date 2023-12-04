const express = require("express");
const connectDB = require('./src/db/connection');
const alertRoutes = require('./src/routes/alert_routes')

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/alert', alertRoutes);


port = 5000;
start = async () => {
    try {
        connectDB();
        app.listen(port, () => console.log(`Server listenning to port ${port}`))
    } catch (error) {
        
    }
}

start()