var express = require("express");
var path = require("path");

var app = express();
var PORT = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        tableName: "Table 1",
        name: 1,


    },
    {
        tableName: "Table 2",
        name: 2,
    },
    {
        tableName: "Table 3",
        name: 3,

    },
    {
        tableName: "Table 4",
        name: 4,
    },
    {
        tableName: "Table 5",
        name: 5,
    }
];

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserved.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/tables/:tables", function(req, res) {
    var chosen = req.params.tables;

for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].tableName) {
        return res.json(tables[i]);
    }
}
return res.json(false);
});

app.post("/api/tables", function(res, req) {

    var newTable = req.body;

    newTable.tableName = newTable.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);


});

