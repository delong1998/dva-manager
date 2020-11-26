import request from '../utils/request'; 
const pox = "/api/"

// export function queryBooks() {
//   return request(pox + '/api/goods','get',{});
// }

export function queryBooks() {
    return request('/mockbooks');
  }
