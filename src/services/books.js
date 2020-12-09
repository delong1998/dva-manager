import request from '../utils/request';
const pox = "/api/"

// export function queryBooks() {
//   return request(pox + '/api/books','get',{});
// }

export function removeBooks(params) {
  return request(pox + '/api/books/' + params.id,
    'delete',
    params
  );
}

export function addBooks(params) {
  return request(pox + '/api/books',
    'post',
    params
  );
}

export function updateBooks(params) {
  return request(pox + '/api/books/' + params.id,
    'put',
    params
  );
}

export function queryBooks() {
  return request('/mockbooks');
}
