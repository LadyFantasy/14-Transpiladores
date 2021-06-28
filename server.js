var _this = this;
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("Probando transpiladores");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor escuchando en http://localhost:" + _this.address().port);
});
