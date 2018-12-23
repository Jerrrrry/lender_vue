import Axios from 'axios';

import utl from '../tools/utl'

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
            let response = await Axios.post('http://104.248.73.159/api/' + path,info,{
                    headers: {
                                "Authorization":localStorage.getItem('token')

                             } 
            });
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