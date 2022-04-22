import axios from 'axios';

const baseUrl = 'https://5f62b7ce67e195001625f17c.mockapi.io/api/todos';

const todoApi = {
  getAll() {
    const url = `${baseUrl}`;
    return axios.get(url);
  },

  add(data) {
    const url = `${baseUrl}`;
    return axios.post(url, data);
  },

  delete(id) {
    const url = `${baseUrl}/${id}`;
    return axios.delete(url);
  },

  update(id, data) {
    const url = `${baseUrl}/${id}`;
    return axios.put(url, data);
  },
};

export default todoApi;
