const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public")
const port = 3000

app.listen(port, () => {
	console.log("server running ok in port " + port)
});

app.use(express.static(publicPath))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get('/crear-producto', (req, res) => {
	res.sendFile(path.join(__dirname,"/views/crear-producto.html"))
});

app.get('/registro', (req, res) => {
	res.sendFile(path.join(__dirname,"/views/registro.html"))
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname,"/views/login.html"))
});