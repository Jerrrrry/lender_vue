import Axios from 'axios';

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
    }
  }
}