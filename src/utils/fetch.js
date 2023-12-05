import axios from 'axios';
import { clearDataLogin } from './storage';

export default function fetch(options) {

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios(options);
      console.log(response)
      resolve(response.data);
    } catch (error) {
      console.log({ error })
      if (error.response.data) {
        if (error.response.data.code === 401) {
          clearDataLogin();
        } else {
          reject(error.response.data);
        }
      } else { // this means the server does not respond
        console.log(error)
        const defaultError = {
          success: false,
          data: null,
          code: 500,
          message: 'Failed to fetch data. Please contact developer.',
        };

        reject(defaultError);
      }
    }
  });
}