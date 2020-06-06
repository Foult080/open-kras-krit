const express = require('express');
const app = express();
const path = require("path");

const connectDB = require('./config/db');

//connection to mongoDB
connectDB();

app.use(express.json({ extended: false }));

//routes
app.use('/api/users/', require('./routes/users'));
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/news', require('./routes/news'));
app.use('/api/applicant', require('./routes/Applicant/applicant'));
app.use('/api/contact', require('./routes/contactForm'));
app.use('/api/profile/', require('./routes/Employers/profiles'));
app.use('/api/employers/', require('./routes/Employers/employers'));
/*

app.use('/api/events/', require('./routes/events'));
app.use('/api/info', require('./routes/info'));
*/


app.use(express.static("front-app/build"));

app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, 'front-app', 'build', 'index.html'));
});


/*
if (process.env.NODE_ENV === "production") {
    app.use(express.static("front-app/build"));

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, 'front-app', 'build', 'index.html'));
    });
}
*/
//initial port to start
const PORT = process.env.PORT || 5000;

//server app
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));