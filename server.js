const express = require("express");
const email = require("./email");
const tableau = require("./tableau");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res
        .status(406)
        .send(
            '<p style="text-align:center;margin:50px;font-family:Benton Sans, Helvetica, Arial;">Hi! 😊 This app only speaks REST. Check out the <a href="https://glitch.com/edit/#!/datadev-webhooks-email">source code</a></p>'
        );
});

app.post("/DatasourceRefreshSucceeded", (req, res) => {
    let webhook = req.body;
    let dataSourceId = webhook.resource_luid;
    let dataSourceName = webhook.resource_name;

    // If you want to only send notifications for a certain data source add:
    // if (dataSourceName === "My Data Source") {
    tableau.getTableauData(
        tableau.getDataSource,
        dataSourceId,
        (err, dataSource) => {
            if (err) throw err;
            email.sendDataSource(dataSource);
        }
    );
    // }
    res.status(200).send("Webhook received!");
});

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});