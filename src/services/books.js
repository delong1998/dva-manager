import request from '../utils/request';
const pox = "/api/"

// export function queryBooks() {
//   return request(pox + '/api/goods','get',{});
// }

// export function removeBooks(params) {
//   return request(pox + '/api/goods' + params.id,
//     'delete',
//     params
//   );
// }

// export function addBooks(params) {
//   return request(pox + '/api/goods',
//     'post',
//     params
//   );
// }

// export function updateBooks(params) {
//   return request(pox + '/api/goods' + params.id,
//     'put',
//     params
//   );
// }

export function queryBooks() {
  return request('/mockbooks');
}
