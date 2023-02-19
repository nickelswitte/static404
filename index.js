
const express = require('express')
const app = express()
const port = 3000



app.get('/404', function(req, res, next){
    // trigger a 404 since no other middleware
    // will match /404 after this one, and we're not
    // responding here
    next();
});

app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {

        switch (Math.floor(Math.random() * 4)) {
            case 0:
                res.sendFile('./404-1.html', { root: __dirname });
                break;
            case 1:
                res.sendFile('./404-2.html', { root: __dirname });
                break;
            case 2:
                res.sendFile('./404-3.html', { root: __dirname });
                break;
            case 3:
                res.sendFile('./404-4.html', { root: __dirname });
                break;
            default:
                res.sendFile('./404-1.html', { root: __dirname });
        }
      
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(port, () => {
  console.log(`Static 404 page listening on port ${port}`)
})
