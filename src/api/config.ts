import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { ApiGithubRequestUrl } from './constants';

export const client = (props: AxiosRequestConfig): AxiosPromise => axios({
  method: props.method,
  baseURL: `${ApiGithubRequestUrl.BASE}/`,
  url: props.url,
  headers: {
    'Content-Type': 'application/json',
  },
  data: props.data,
});
