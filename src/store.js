const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const pg = require('pg');
const conString = process.env.ELEPHANTSQL_URL || "postgres://lrlnpjuy:QjC9NYkRnQVABmzhjnCxU_uigErCiagm@tantor.db.elephantsql.com:5432/lrlnpjuy";

const client = new pg.Client(conString);
client.connect(err => {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * from moodhistory', (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});

//sql tables setup
//need to connect redux to pull in
//don't worry about password  - this is front end focused..............
//connect everything so you can get started...on the front end....



app.listen(3000, () => console.log('Listening on port 3000!'))
