const express = require("express");
const bodyParser = require("body-parser");
var admin = require("firebase-admin");

var serviceAccount = require("./fers-4a88d-firebase-adminsdk-14e5t-ca421d5e2c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.BASE_URL_DATABASE,
});

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
const port = 4000;
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/login", (req, res) => {
    // console.log("Got body:", req.body.authToken);
    admin
        .auth()
        .verifyIdToken(req.body.authToken)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            // ...
            console.log(uid);
            console.log(decodedToken);
        })
        .catch((error) => {
            // Handle error
        });
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
