import express from 'express';
import bodyParser from 'body-parser';
import homeController from './controllers/homeController'
const port = process.env.PORT || 4003;
const app = express();

app.use(bodyParser.json());

app.get("/",homeController);

app.listen(port);