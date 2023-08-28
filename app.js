const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 5000;


app.use(express.static(__dirname+'/public'));


app.set('view engine','ejs')
app.set('views','./Views')



app.get('/', (req, res) => {
   res.render('index',{})
});

app.get('/about', (req, res) => {
  res.render('about',{})
});

app.get('/shop', (req, res) => {
  res.render('shop',{})

});

app.get('/contact', (req, res) => {
  res.render('contact',{})
});


app.use((req, res) => {
  res.status(404).send('<h1>404, Page not found!</h1>');
});





app.listen(PORT, () => {
  console.log('Server is running right now on ' + PORT);
});
