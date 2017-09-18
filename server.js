const express = require('express');
const app = express();


// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}



// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));



// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require('morgan');
const morganToolkit = require('morgan-toolkit')(morgan);

app.use(morganToolkit());


// ----------------------------------------
// Routes
// ----------------------------------------
const searchRouter = require('./routers/search');

app.use('/api/v1', searchRouter);


// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT ||
  process.argv[2] ||
  3000;
const host = 'localhost';


let args;
process.env.NODE_ENV === 'production' ?
  args = [port] :
  args = [port, host];

args.push(() => {
  console.log(`Listening: http://${ host }:${ port }\n`);
});


app.listen.apply(app, args);


// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }
  res.status(500).json({ error: err });
});


module.exports = app;





