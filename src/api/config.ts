import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { ApiRequestUrl } from './constants';

export const client = (props: AxiosRequestConfig): AxiosPromise => axios({
  method: props.method,
  baseURL: `${ApiRequestUrl.BASE}/`,
  url: props.url,
  headers: {
    'Content-Type': 'application/json',
  },
  data: props.data,
});
