var pets = require('../controllers/pets.js');
var path = require('path');


module.exports = function(app) {

    app.get('/pets', function(req, res) {
        pets.viewAll(req, res);
    })

    app.post('/pets', function(req, res) {
        pets.create(req, res);
    })

    app.get('/pets/:id', function(req, res) {
        pets.viewOne(req, res);
    })

    app.patch('/pets/:id', function(req, res) {
        pets.update(req, res);
    })

    // app.delete('/pets/:id', function(req, res) {
    //     pets.delete(req, res)
    // })



    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}