// dependecies requires
const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
// route requires
const itemRoute       = require('./routes/api/itemRoute');


const app = express();


// Connect to MongoDB using key value pair or connect to local db for production
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use('/itemRoute', itemRoute);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
