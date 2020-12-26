var Forms = require('./forms_controller');

module.exports = function(router) {
    router.post('/create', Forms.createForm);
    router.get('/get', Forms.getForms);
    router.get('/get/:id', Forms.getForm);
    router.put('/update/:id', Forms.updateForm);
    router.delete('/remove/:id', Forms.removeForm);
}