import Axios from 'axios';

Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.csrf_token
};

export default {

  methods: {
    get: function (path) {
      return new Promise(async (resolve, reject) => {

        try {
          let response = await Axios.get('http://104.248.73.159/api/' + path);
          resolve(response);

        } catch (error) {
          reject(error);
        }
      });
    },

    post: function (path,info) {
        return new Promise(async (resolve, reject) => {
  
          try {
            let response = await Axios.post('http://104.248.73.159/api/' + path,info);
            resolve(response);
  
          } catch (error) {
            reject(error);
          }
        });
      },

      put: function (path,info) {
        return new Promise(async (resolve, reject) => {
  
          try {
            let response = await Axios.put('http://104.248.73.159/api/' + path,info);
            resolve(response);
  
          } catch (error) {
            reject(error);
          }
        });
      },
  }
}