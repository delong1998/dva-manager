import request from '../utils/request'; 
const pox = "/api/"

export function login(params) {
  return request(pox + 'api/login',
  'get',
  {}
  );
}
