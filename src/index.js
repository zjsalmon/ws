//WebService
const PORT = 10000
console.log("WS");

const express =require ('express');
const bodyparser = require('body-parser');
const cors = require ('cors');
const helmet = require('helmet');
const morgan = require ('morgan');

const app = express ();

const ads = [
    {title: "WS-E"}
];
const sayhello =
"<html><h3> Hello! </h3></html>"

app.use(helmet());
app.use(bodyparser.json());
app.use(cors());
app.get('/',(req, res)=> {
  res.send(ads);
});
app.get('/sayhello',(req, res)=> {
  res.send(sayhello);
});
app.listen(PORT, () => {
  console.log ("listening on: ", PORT);
});
