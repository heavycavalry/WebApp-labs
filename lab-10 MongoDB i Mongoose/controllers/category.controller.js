const Category = require("../models/category.model");

exports.getAll = (req, res) => {
    Category.find({}, function(err, categories) {
        res.status(200).send(categories);
    });
};

exports.add = (req, res) => {
    const category = new Category({ name: req.body.name });
    category.save((err) => {
        if (err) {
            return false;
        }
        res.status(201).send();
        return true;
    });
};