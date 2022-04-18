var request = require('supertest');
var app = require('../index.js');

describe('GET', function() {
 it('respond with hello world', function(done) {
 request(app).get('/').expect('hello world', done);
 });

 it('respond with hello user', function(done) {
    request(app).get('/user').expect('hello user', done);
    });
});