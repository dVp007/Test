// expose the routes to our app with module.exports
module.exports = function(app) {
    // application -------------------------------------------------------------
    
    app.get('*', function(req, res) {
        res.sendfile('./public/Hello.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.post('/upload',function(req,res){
        console.log(req.body);
        res.send('OK');
    })
} 