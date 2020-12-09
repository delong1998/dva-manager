import request from '../utils/request'; 
const pox = "/api/"

// export function queryUsers() {
//   return request(pox + '/api/goods','get',{});
// }

export function queryUsers() {
  return request('/mockusers');
}
