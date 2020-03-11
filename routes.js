var express = require('express');
var router = express.Router();

const DatabaseService = require('./DatabaseService');


/* GET home page. */
router.get('/', function (request, response, next) {
    response.render('index', { title: 'Express' });
});

router.get('/collections/:collectionName', (request, response) => {
    const collectionName = request.params.collectionName;
    DatabaseService.getEntireCollection(collectionName, (error, result) => {
        if (error) response.error(error);
        else response.send(result);
    });
});

router.get('/forms/:formId', (request, response) => {

    const formId = request.params.formId;
    DatabaseService.getFormByFormId(formId, (error, result) => {
        if (error) response.error(error);
        else response.send(result);
    })
})

router.post('/forms', (request, response) => {
    const newForm = request.body;
    DatabaseService.insertObjectIntoCollection(newForm, 'forms', (error, result) => {
        if (error) response.error(error);
        else response.send(result);
    });
});

module.exports = router;