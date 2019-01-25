const chai = require('chai');
const nock = require('nock');
const data = require('../AppsSupporters/GetHomePageData')
const googleHomePage = require('../Apps/GetHomePage');


describe('---GoogleHomePage---', function() {
  before(function(done){
    nock('http://www.google.com')
    .get('/')
    .reply(201,data.getData(function(data){
      return data;
    }))
    done();
  })
  
  after(function(done){
    nock.cleanAll()
   done();
  })
  
  it.only('googleHomepageBody', function(done) {
    var expected = 200;
    googleHomePage.getBody(function(response,body){
      chai.assert.equal(body,'sucess');
    });
    done();
  })   
})
