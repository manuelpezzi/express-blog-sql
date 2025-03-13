const express = require('express');
const cors = require("cors")




const app = express();

const port = 3000;

const postRouter = require('./routers/postRouters.js')

const errorsHandler = require('./middlewares/errorHandler.js')

const notFound = require('./middlewares/erorrNotFound.js')

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postRouter);




//homepage
app.get('/', (req, res) => {
    res.send("Server del mio blog")

});

app.use(errorsHandler)

app.use(notFound)



app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});

