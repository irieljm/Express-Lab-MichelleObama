const express = require('express');
const app = express();

// this makes the public folder available in the html files
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log('this is the home page');
    //response.send('<h1>hello from Express</h1>');
    response.sendFile(__dirname + '/home-page.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/gallery2.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/works.html');
});

app.get('/url', (req, res) => {
    res.render('view', {
      page: req.url,
      ul: {
        'Home Page': '/home-page',
        'About': '/about',
        'Works': '/works',
        'Gallery': '/gallery2',
      }
    });
  });



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
    
});