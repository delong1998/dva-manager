import request from '../utils/request'; 
const pox = "/api/"

export function login(params) {
  return request(pox + '/oauth/token?username=' + params.username + '&password=' + params.password,
  'post',
  params
  );
}

export function logout(params) {
  return request(pox + '/logout',
  'get',
  params
  );
}
