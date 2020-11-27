import request from '../utils/request'; 
const pox = "/api/"

export function queryProducts() {
  return request(pox + '/api/goods','get',{});
}

export function testMock() {
  return request("/papers");
}