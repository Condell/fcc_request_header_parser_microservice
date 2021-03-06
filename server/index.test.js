import chai from 'chai';
import {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

/* eslint-disable no-unused-expressions */

chai.use(chaiHttp);


describe('GET route tests', () => {
  it('should respond with json matching the structure defined in the user stories', (done) => {
    chai.request(app)
      .get('/api/whoami')
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res).to.have.status(200);
        expect(res.body).to.have.all.keys(['ipaddress', 'language', 'software']);
        done();
      });
  });
});
