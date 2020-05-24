import { AxiosPromise, AxiosResponse } from 'axios';

import { client } from '$api/config';
import { ApiRequestUrl, ApiErrorStatusCode } from '$api/constants';

export interface IRequestError {
  status: number,
  text: string,
}

const parseResult = (result: AxiosResponse): AxiosResponse['data'] => result && result.data;

const onError = ({ response }): IRequestError => {
  switch (response.status) {
    case ApiErrorStatusCode.BAD_REQUEST:
      return {
        status: response.status,
        text: 'Incorrect request data',
      };
    case ApiErrorStatusCode.UNAUTHORIZEDS:
      return {
        status: response.status,
        text: 'Authorisation error',
      };
    case ApiErrorStatusCode.NOT_FOUND:
      return {
        status: response.status,
        text: 'User not found',
      };
    case response.status >= ApiErrorStatusCode.INTERNAL_STATUS_ERROR:
      return {
        status: response.status,
        text: 'It seems something went wrong. Please, try later.',
      };
    default:
      return {
        status: response.status,
        text: response.statusText,
      };
  }
};

export const apiGetUser = (data = {}): AxiosPromise => (
  client({
    data,
    method: 'GET',
    url: `${ApiRequestUrl.GET_USER}EdMSL`,
  })
    .then(parseResult)
    .catch(onError)
);
