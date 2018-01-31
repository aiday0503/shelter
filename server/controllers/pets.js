var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');


module.exports = {

    viewAll: function(req, res) {
        Pet.find({}, function(err, data) {
            if (err) {
                console.log("i am the error", err);
                res.json({ message: "error", err: err });
            } else {
                res.json({ message: "Success", data: data })
            }
        })
    },

    create: function(req, res) {
        console.log("this is Post Data", req.body)
        var pets = req.body.pets;
        console.log(pets)
        var newPet = new Pet({ name: req.body.name, type: req.body.type, description: req.body.description, skill1: req.body.skill1, skill2: req.body.skill2, skill3: req.body.skill3, like: req.body.like })
        newPet.save(function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving Pets", err: err });
            } else {
                res.json({ message: "Success", data: data })
            }
        })
    },


    viewOne: function(req, res) {
        console.log("this is the id", req.params.id)
        Pet.find({ _id: req.params.id }, req.body, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving pets", err: err });
            } else if (data) {
                res.json({ message: "Success", data: data })
            }
        })
    },

    update: function(req, res) {
        console.log("This is the update data", req.body);
        Pet.update({ _id: req.params.id }, req.body, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: "error retrieving pets", err: err });

            } else if (data) {
                res.json({ message: "Success", data: data })
            }
        })
    },


}