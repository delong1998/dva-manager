import request from '../utils/request'; 
const pox = "/api/"

export function queryProducts() {
  return request(pox + '/api/papers');
}

export function testMock() {
  return request("/papers");
}