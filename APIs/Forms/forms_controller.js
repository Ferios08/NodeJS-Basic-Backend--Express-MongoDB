var Forms = require('./form_dao');

exports.createForm = function (req, res, next) {
    var form = {
        id: req.body.id,
        user: req.body.user,
        content: req.body.content,
    };

    Forms.create(form, function(err, form) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Form created successfully"
        })
    })
}

exports.getForms = function(req, res, next) {
    Forms.get({}, function(err, forms) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            forms: forms
        })
    })
}

exports.getForm = function(req, res, next) {
    Forms.get({id: req.params.id}, function(err, forms) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            forms: forms
        })
    })
}

exports.updateForm = function(req, res, next) {
    var form = {
        user: req.body.user,
        content: req.body.content,
    }
    Forms.update({id: req.params.id}, form, function(err, form) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Form updated successfully"
        })
    })
}

exports.removeForm = function(req, res, next) {
    Forms.delete({id: req.params.id}, function(err, form) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Form deleted successfully"
        })
    })
}