require('dotenv/config');
const express = require('express');
const { join } = require('path');
const session = require('express-session');
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(join(__dirname, 'public')));

// Pas encore nécessaire
// app.use(
// 	session({
// 		secret: process.env.SESSION_SECRET,
// 		resave: true,
// 		saveUninitialized: true,
// 		cookie: { secure: false },
// 	})
// );

app.use(router);

// const PORT = process.env.PORT;
// app.listen(process.env.PORT, process.env.IP, () => {
// 	console.log(`Server is running on http://localhost:${process.env.PORT}`);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
