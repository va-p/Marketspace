import React from 'react';

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5555/',
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});

/*api.interceptors.request.use(async (config: any) => {
  try {
    const jsonToken = storageToken.getString('token');
    if (jsonToken) {
      const loggedInUserAuthToken = JSON.parse(jsonToken);
      config.headers.Authorization = `Bearer ${loggedInUserAuthToken}`;
    }
  } catch (error) {
    console.error(error);
  }

  return config;
});*/

export default api;
