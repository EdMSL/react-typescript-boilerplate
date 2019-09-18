import axios, { AxiosPromise } from 'axios';

import { ApiGithubRequestUrl } from './constants';

export const client = (props): AxiosPromise => axios({
  method: props.method,
  baseURL: `${ApiGithubRequestUrl.BASE}/`,
  url: props.url,
  headers: {
    'Content-Type': 'application/json',
  },
  data: props.data || {},
});
