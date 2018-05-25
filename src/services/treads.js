import request from '../utils/request';

const url = 'http://wx.hy-bang.com/consult';

export function query(page, body) {
  return request(`${url}/listTreads/${page}?${body}`);
}

export function getTreads(consultId, category) {
  return request(`${url}/getTreads?consultId=${consultId}&category=${category}`);
}

export function getHot() {
  return request(`${url}/getHot`);
}
